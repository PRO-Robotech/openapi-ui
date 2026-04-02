import React, { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import type { RootState } from 'store/store'
import { PLUGIN_LOADING_SPINNER } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

// Get theme from localStorage immediately (before Redux hydrates)
const getInitialTheme = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('theme') === 'dark'
}

export const GlobalPluginLoader: FC = () => {
  const loadingPlugins = useSelector((state: RootState) => state.pluginLoading.loadingPlugins)
  const reduxTheme = useSelector((state: RootState) => state.openapiTheme.theme)

  // Use localStorage theme initially, then sync with Redux
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    setIsDark(reduxTheme === 'dark')
  }, [reduxTheme])

  const isLoading = loadingPlugins.length > 0

  if (!PLUGIN_LOADING_SPINNER || !isLoading) {
    return null
  }

  return (
    <Styled.Overlay $isDark={isDark}>
      <Spin size="large" />
    </Styled.Overlay>
  )
}
