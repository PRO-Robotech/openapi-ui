import React, { FC, ReactNode, useEffect, useCallback } from 'react'
import { Layout, theme as antdtheme, Alert } from 'antd'
import { TSingleResource, useClusterList, useK8sSmartResource } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Outlet } from 'react-router-dom'
import type { RootState } from 'store/store'
import { setTheme } from 'store/theme/theme/theme'
import { setCluster } from 'store/cluster/cluster/cluster'
import { setClusterList } from 'store/clusterList/clusterList/clusterList'
import { DefaultColorProvider, Header } from 'components'
import {
  CURRENT_CLUSTER,
  CLUSTERLIST_API_RESOURCE_API_GROUP,
  CLUSTERLIST_API_RESOURCE_API_VERSION,
  CLUSTERLIST_API_RESOURCE_PLURAL,
} from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

type TMainLayoutProps = {
  children?: ReactNode | undefined
  forcedTheme?: 'dark' | 'light'
}

export const MainLayout: FC<TMainLayoutProps> = ({ children, forcedTheme }) => {
  const { cluster } = useParams()
  const { useToken } = antdtheme
  const { token } = useToken()
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const isNonEmptyString = (value: string | undefined): value is string => typeof value === 'string' && value.length > 0
  const useClusterListByResources = [
    CURRENT_CLUSTER,
    CLUSTERLIST_API_RESOURCE_API_GROUP,
    CLUSTERLIST_API_RESOURCE_API_VERSION,
    CLUSTERLIST_API_RESOURCE_PLURAL,
  ].every(isNonEmptyString)

  const clusterListQuery = useClusterList({ enabled: !useClusterListByResources, refetchInterval: false })
  const clusterListQueryByResources = useK8sSmartResource<{ items: TSingleResource[] }>({
    cluster: CURRENT_CLUSTER || '',
    apiGroup: CLUSTERLIST_API_RESOURCE_API_GROUP,
    apiVersion: CLUSTERLIST_API_RESOURCE_API_VERSION || '',
    plural: CLUSTERLIST_API_RESOURCE_PLURAL || '',
    isEnabled: useClusterListByResources,
  })

  useEffect(() => {
    if (forcedTheme) {
      return
    }
    const localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme && (localStorageTheme === 'dark' || localStorageTheme === 'light')) {
      dispatch(setTheme(localStorageTheme))
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark')
      dispatch(setTheme('dark'))
    } else {
      localStorage.setItem('theme', 'light')
      dispatch(setTheme('light'))
    }
  }, [dispatch, forcedTheme])

  useEffect(() => {
    if (forcedTheme) {
      dispatch(setTheme(forcedTheme))
    }
  }, [dispatch, forcedTheme])

  const handleStorage = useCallback(() => {
    const localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme && (localStorageTheme === 'dark' || localStorageTheme === 'light')) {
      dispatch(setTheme(localStorageTheme))
    }
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [handleStorage])

  useEffect(() => {
    const clusterListFromResources = clusterListQueryByResources.data?.items
      ?.map(item => {
        const name =
          typeof item?.metadata?.name === 'string' && item.metadata.name.length > 0 ? item.metadata.name : undefined
        const spec = item?.spec as
          | { displayName?: string; api?: string; description?: string; tenant?: string }
          | undefined
        const displayName =
          typeof spec?.displayName === 'string' && spec.displayName.length > 0 ? spec.displayName : undefined

        if (!spec || !name) {
          return undefined
        }

        return {
          name,
          displayName,
          api: spec.api || '',
          description: spec.description || '',
          tenant: spec.tenant || '',
        }
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item))

    const activeClusterList = useClusterListByResources ? clusterListFromResources : clusterListQuery.data
    if (activeClusterList) {
      dispatch(setClusterList(activeClusterList))
    }
  }, [clusterListQuery.data, clusterListQueryByResources.data, dispatch, useClusterListByResources])

  useEffect(() => {
    dispatch(setCluster(cluster ?? ''))
  }, [dispatch, cluster])

  return (
    <DefaultColorProvider $color={token.colorText}>
      <Styled.Container $isDark={theme === 'dark'}>
        <Layout>
          <Styled.Layout $bgColor={token.colorBgLayout}>
            <Styled.ContentContainer>
              <Header />
              {(useClusterListByResources ? clusterListQueryByResources.error : clusterListQuery.error) && (
                <Alert
                  message={`Cluster List Error: ${
                    useClusterListByResources ? clusterListQueryByResources.error : clusterListQuery.error?.message
                  } `}
                  type="error"
                />
              )}
              <Outlet />
              {children}
            </Styled.ContentContainer>
          </Styled.Layout>
        </Layout>
      </Styled.Container>
    </DefaultColorProvider>
  )
}
