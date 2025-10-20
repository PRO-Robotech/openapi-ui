import React, { FC, ReactNode, useEffect, useCallback } from 'react'
import { Layout, theme as antdtheme, Alert, Col } from 'antd'
import { useClusterList } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import type { RootState } from 'store/store'
import { setTheme } from 'store/theme/theme/theme'
import { setCluster } from 'store/cluster/cluster/cluster'
import { setClusterList } from 'store/clusterList/clusterList/clusterList'
import {
  DefaultLayout,
  DefaultColorProvider,
  Header,
  HeaderSecond,
  Footer,
  Sidebar,
  RowFlexGrow,
  FlexCol,
} from 'components'
import { Styled } from './styled'

type TBaseTemplateProps = {
  withNoCluster?: boolean
  children?: ReactNode | undefined
  forcedTheme?: 'dark' | 'light'
  inside?: boolean
  isSearch?: boolean
  sidebar?: ReactNode
}

export const BaseTemplate: FC<TBaseTemplateProps> = ({
  children,
  withNoCluster,
  forcedTheme,
  inside,
  isSearch,
  sidebar,
}) => {
  const navigate = useNavigate()
  const { clusterName } = useParams()
  const { useToken } = antdtheme
  const { token } = useToken()
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const isFederation = useSelector((state: RootState) => state.federation.isFederation)
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)
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

  if (clusterName) {
    dispatch(setCluster(clusterName))
  }

  if (clusterName === undefined) {
    dispatch(setCluster(''))
  }

  if (!clusterName && !withNoCluster) {
    navigate(`${baseprefix}/`)
  }

  return (
    <DefaultColorProvider $color={token.colorText}>
      <Styled.Container $isDark={theme === 'dark'}>
        <Layout>
          <DefaultLayout.Layout $bgColor={token.colorBgLayout}>
            <DefaultLayout.ContentContainer>
              <Header />
              <RowFlexGrow wrap={false}>
                <Col span="250px">
                  <Sidebar sidebar={sidebar} />
                </Col>
                <FlexCol flex="auto">
                  <DefaultLayout.ContentPadding $isFederation={isFederation}>
                    <HeaderSecond inside={inside} isSearch={isSearch} />
                    {clusterListQuery.error && (
                      <Alert message={`Cluster List Error: ${clusterListQuery.error?.message} `} type="error" />
                    )}
                    {children}
                  </DefaultLayout.ContentPadding>
                  <Footer />
                </FlexCol>
              </RowFlexGrow>
            </DefaultLayout.ContentContainer>
          </DefaultLayout.Layout>
        </Layout>
      </Styled.Container>
    </DefaultColorProvider>
  )
}
