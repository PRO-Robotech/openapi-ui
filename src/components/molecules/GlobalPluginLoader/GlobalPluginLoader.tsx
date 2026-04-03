import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import type { RootState } from 'store/store'
import { PLUGIN_LOADING_SPINNER_MODE } from 'constants/customizationApiGroupAndVersion'
import { SpinnerContainer } from './styled'

export const GlobalPluginLoader: FC = () => {
  const loadingPlugins = useSelector((state: RootState) => state.pluginLoading.loadingPlugins)
  const isLoading = loadingPlugins.length > 0

  // Only show global spinner in "global" mode
  if (PLUGIN_LOADING_SPINNER_MODE !== 'global' || !isLoading) {
    return null
  }

  return (
    <SpinnerContainer>
      <Spin size="large" />
    </SpinnerContainer>
  )
}
