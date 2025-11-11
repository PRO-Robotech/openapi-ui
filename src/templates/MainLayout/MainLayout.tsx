import React, { FC, ReactNode, useEffect, useCallback } from 'react'
import { Layout, theme as antdtheme, Alert } from 'antd'
import { useClusterList } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Outlet } from 'react-router-dom'
import type { RootState } from 'store/store'
import { setTheme } from 'store/theme/theme/theme'
import { setCluster } from 'store/cluster/cluster/cluster'
import { setClusterList } from 'store/clusterList/clusterList/clusterList'
import { DefaultLayout, DefaultColorProvider, Header } from 'components'
import { Styled } from './styled'

type TMainLayoutProps = {
  children?: ReactNode | undefined
  forcedTheme?: 'dark' | 'light'
}

export const MainLayout: FC<TMainLayoutProps> = ({ children, forcedTheme }) => {
  const { clusterName } = useParams()
  const { useToken } = antdtheme
  const { token } = useToken()
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const clusterListQuery = useClusterList({ refetchInterval: false })

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
    if (clusterListQuery.data) {
      dispatch(setClusterList(clusterListQuery.data))
    }
  }, [clusterListQuery, dispatch])

  // if (clusterName) {
  //   dispatch(setCluster(clusterName))
  // }

  // if (clusterName === undefined) {
  //   dispatch(setCluster(''))
  // }

  useEffect(() => {
    dispatch(setCluster(clusterName ?? ''))
  }, [dispatch, clusterName])

  return (
    <DefaultColorProvider $color={token.colorText}>
      <Styled.Container $isDark={theme === 'dark'}>
        <Layout>
          <DefaultLayout.Layout $bgColor={token.colorBgLayout}>
            <DefaultLayout.ContentContainer>
              <Header />
              {clusterListQuery.error && (
                <Alert message={`Cluster List Error: ${clusterListQuery.error?.message} `} type="error" />
              )}
              <Outlet />
              {children}
            </DefaultLayout.ContentContainer>
          </DefaultLayout.Layout>
        </Layout>
      </Styled.Container>
    </DefaultColorProvider>
  )
}
