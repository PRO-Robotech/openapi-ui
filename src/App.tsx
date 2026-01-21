/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import React, { FC, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from 'store/store'
import { setIsFederation } from 'store/federation/federation/federation'
import { setBaseprefix } from 'store/federation/federation/baseprefix'
import {
  MainPage,
  ListClustersPage,
  RedirectProjectsPage,
  RedirectProjectInfoPage,
  ListInsideClustersAndNsPage,
  ListInsideApiPage,
  ListInsideCrdByApiGroupPage,
  ListInsideApiByApiGroupPage,
  TableApiPage,
  TableBuiltinPage,
  FormBuiltinPage,
  FormApiPage,
  FactoryPage,
  SearchPage,
  PluginRoute,
} from 'pages'
import { getBasePrefix } from 'utils/getBaseprefix'
import { getConfigProviderProps } from 'utils/getConfigProviderProps'
import { MainLayout, AppShell } from 'templates'

type TAppProps = {
  isFederation?: boolean
  forcedTheme?: 'dark' | 'light'
}

const queryClient = new QueryClient()

export const App: FC<TAppProps> = ({ isFederation, forcedTheme }) => {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)

  const basePrefix = getBasePrefix(isFederation)

  useEffect(() => {
    if (isFederation) {
      dispatch(setIsFederation(true))
    }
    const basePrefix = getBasePrefix(isFederation)
    dispatch(setBaseprefix(basePrefix))
  }, [dispatch, isFederation])

  const renderRoutes = (prefix = '') => (
    <Routes>
      <Route element={<MainLayout forcedTheme={forcedTheme} />}>
        <Route path={`${prefix}/`} element={<MainPage />} />
        <Route path={`${prefix}/clusters`} element={<ListClustersPage />} />

        <Route path={`${prefix}/:cluster/:namespace?/:syntheticProject?/*`} element={<AppShell />}>
          <Route path="api-table/:apiGroup/:apiVersion/:plural" element={<TableApiPage />} />
          <Route path="builtin-table/:plural" element={<TableBuiltinPage />} />
          <Route path="forms/apis/:apiGroup/:apiVersion/:plural/:name?/" element={<FormApiPage />} />
          <Route path="forms/builtin/:apiVersion/:plural/:name?/" element={<FormBuiltinPage />} />
          <Route path="factory/:key/*" element={<FactoryPage />} />
          <Route path="search/*" element={<SearchPage />} />

          <Route path="plugins/:pluginName/*" element={<PluginRoute />} />
        </Route>

        <Route path={`${prefix}/inside/:cluster/:namespace?/:syntheticProject?/*`} element={<AppShell inside />}>
          <Route path="api-table/:apiGroup/:apiVersion/:plural" element={<TableApiPage inside />} />
          <Route path="builtin-table/:plural" element={<TableBuiltinPage inside />} />
          <Route path="forms/builtin/:apiVersion/:plural/:name?/" element={<FormBuiltinPage />} />
          <Route path="forms/apis/:apiGroup/:apiVersion/:plural/:name?/" element={<FormApiPage />} />
        </Route>

        <Route path={`${prefix}/inside/`} element={<MainPage />} />
        <Route path={`${prefix}/inside/clusters`} element={<ListInsideClustersAndNsPage inside />} />
        <Route path={`${prefix}/inside/:cluster/:namespace?/*`} element={<AppShell inside />}>
          <Route path="apis" element={<ListInsideApiPage />} />
          <Route
            path="crds-by-api/:apiGroup/:apiVersion/:apiExtensionVersion"
            element={<ListInsideCrdByApiGroupPage />}
          />
          <Route path="apis-by-api/:apiGroup/:apiVersion/" element={<ListInsideApiByApiGroupPage />} />
        </Route>

        <Route path={`${prefix}/clusters/:cluster`} element={<RedirectProjectsPage />} />
        <Route path={`${prefix}/clusters/:cluster/projects/:namespace`} element={<RedirectProjectInfoPage />} />
      </Route>
    </Routes>
  )

  const antdConfig = getConfigProviderProps({ theme })

  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.MODE === 'development' && <ReactQueryDevtools />}
      <ConfigProvider theme={antdConfig}>
        {isFederation ? renderRoutes() : <BrowserRouter>{renderRoutes(basePrefix)}</BrowserRouter>}
      </ConfigProvider>
    </QueryClientProvider>
  )
}
