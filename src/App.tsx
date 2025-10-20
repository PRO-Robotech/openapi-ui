/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import React, { FC, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider, theme as antdtheme } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from 'store/store'
import { setIsFederation } from 'store/federation/federation/federation'
import { setBaseprefix } from 'store/federation/federation/baseprefix'
import {
  MainPage,
  ListClustersPage,
  ListProjectsPage,
  ProjectInfoPage,
  ListInsideClustersAndNsPage,
  ListInsideApiPage,
  ListInsideCrdByApiGroupPage,
  ListInsideApiByApiGroupPage,
  TableCrdPage,
  TableApiPage,
  TableBuiltinPage,
  FormBuiltinPage,
  FormApiPage,
  FormCrdPage,
  FactoryPage,
  FactoryAdminPage,
  SearchPage,
} from 'pages'
import { getBasePrefix } from 'utils/getBaseprefix'
import { colorsLight, colorsDark, sizes } from 'constants/colors'

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
      <Route path={`${prefix}/`} element={<MainPage forcedTheme={forcedTheme} />} />
      <Route path={`${prefix}/clusters`} element={<ListClustersPage forcedTheme={forcedTheme} />} />
      <Route path={`${prefix}/clusters/:clusterName`} element={<ListProjectsPage forcedTheme={forcedTheme} />} />
      <Route path={`${prefix}/inside/`} element={<MainPage forcedTheme={forcedTheme} />} />
      <Route
        path={`${prefix}/clusters/:clusterName/projects/:namespace`}
        element={<ProjectInfoPage forcedTheme={forcedTheme} />}
      />
      <Route
        path={`${prefix}/inside/clusters`}
        element={<ListInsideClustersAndNsPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/apis`}
        element={<ListInsideApiPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/crds-by-api/:apiGroup/:apiVersion/:apiExtensionVersion`}
        element={<ListInsideCrdByApiGroupPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/apis-by-api/:apiGroup/:apiVersion/`}
        element={<ListInsideApiByApiGroupPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/:clusterName/:namespace?/:syntheticProject?/crd-table/:apiGroup/:apiVersion/:apiExtensionVersion/:crdName`}
        element={<TableCrdPage forcedTheme={forcedTheme} />}
      />
      <Route
        path={`${prefix}/:clusterName/:namespace?/:syntheticProject?/api-table/:apiGroup/:apiVersion/:typeName`}
        element={<TableApiPage forcedTheme={forcedTheme} />}
      />
      <Route
        path={`${prefix}/:clusterName/:namespace?/:syntheticProject?/builtin-table/:typeName`}
        element={<TableBuiltinPage forcedTheme={forcedTheme} />}
      />
      <Route
        path={`${prefix}/:clusterName/:namespace?/:syntheticProject?/forms/builtin/:apiVersion/:typeName/:entryName?/`}
        element={<FormBuiltinPage forcedTheme={forcedTheme} />}
      />
      <Route
        path={`${prefix}/:clusterName/:namespace?/:syntheticProject?/forms/apis/:apiGroup/:apiVersion/:typeName/:entryName?/`}
        element={<FormApiPage forcedTheme={forcedTheme} />}
      />
      <Route
        path={`${prefix}/:clusterName/:namespace?/:syntheticProject?/forms/crds/:apiGroup/:apiVersion/:typeName/:entryName?/`}
        element={<FormCrdPage forcedTheme={forcedTheme} />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/:syntheticProject?/crd-table/:apiGroup/:apiVersion/:apiExtensionVersion/:crdName`}
        element={<TableCrdPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/:syntheticProject?/api-table/:apiGroup/:apiVersion/:typeName`}
        element={<TableApiPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/:syntheticProject?/builtin-table/:typeName`}
        element={<TableBuiltinPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/:syntheticProject?/forms/builtin/:apiVersion/:typeName/:entryName?/`}
        element={<FormBuiltinPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/:syntheticProject?/forms/apis/:apiGroup/:apiVersion/:typeName/:entryName?/`}
        element={<FormApiPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/inside/:clusterName/:namespace?/:syntheticProject?/forms/crds/:apiGroup/:apiVersion/:typeName/:entryName?/`}
        element={<FormCrdPage forcedTheme={forcedTheme} inside />}
      />
      <Route
        path={`${prefix}/:clusterName/:namespace?/:syntheticProject?/factory/:key/*`}
        element={<FactoryPage forcedTheme={forcedTheme} />}
      />
      <Route
        path={`${prefix}/:clusterName/:namespace?/:syntheticProject?/search/*`}
        element={<SearchPage forcedTheme={forcedTheme} />}
      />
      <Route path={`${prefix}/factory-admin/*`} element={<FactoryAdminPage />} />
    </Routes>
  )

  const colors = theme === 'dark' ? colorsDark : colorsLight

  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.MODE === 'development' && <ReactQueryDevtools />}
      <ConfigProvider
        theme={{
          algorithm: theme === 'dark' ? antdtheme.darkAlgorithm : undefined,
          token: {
            fontFamily: '"Roboto", sans-serif',
            ...colors,
            ...sizes,
          },
          components: {
            Layout: {
              ...colors,
            },
            Button: {
              colorPrimary: theme === 'dark' ? '#fff' : '#000',
              primaryColor: theme === 'dark' ? '#000' : '#fff',
            },
            Tooltip: {
              colorBgSpotlight: colors?.colorBgLayout,
              colorText: colors?.colorText,
              colorTextLightSolid: colors?.colorText,
            },
            Popover: {
              colorBgElevated: colors?.colorBgLayout,
            },
            Table: {
              headerBg: colors?.colorBgLayout,
            },
            Slider: {
              trackBg: colors?.colorText,
              trackHoverBg: colors?.colorText,
            },
            Menu: {
              itemBg: colors?.colorBgLayout,
              itemHoverBg: colors?.colorBgContainer,
              itemActiveBg: colors?.colorInfoBg,
              itemSelectedBg: colors?.colorInfoBg,
              subMenuItemBg: colors?.colorFillQuaternary,
              // itemColor: colors?.colorTextDescription,
              // itemHoverColor: colors?.colorTextDescription,
              itemColor: colors?.colorText,
              itemHoverColor: colors?.colorText,
              itemSelectedColor: colors?.colorText,
              itemBorderRadius: 0,
            },
            Tag: {
              defaultBg: colors?.colorPrimaryBg,
            },
          },
        }}
      >
        {isFederation ? renderRoutes() : <BrowserRouter>{renderRoutes(basePrefix)}</BrowserRouter>}
      </ConfigProvider>
    </QueryClientProvider>
  )
}
