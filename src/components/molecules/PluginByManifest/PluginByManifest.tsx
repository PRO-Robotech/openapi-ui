/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  __federation_method_getRemote as getRemote,
  __federation_method_setRemote as setRemote,
  __federation_method_unwrapDefault as unwrapModule,
} from 'virtual:__federation__'
import { TPluginManifestEntry } from '@prorobotech/openapi-k8s-toolkit'
import { Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from 'store/store'
import { setTheme } from 'store/theme/theme/theme'
import { addLoadingPlugin, removeLoadingPlugin } from 'store/pluginLoading/pluginLoading/pluginLoading'
import { THEME_EVENT } from 'constants/theme'
import {
  PLUGIN_LOADING_INDICATOR_HEADER,
  PLUGIN_LOADING_INDICATOR_SIDEBAR,
  PLUGIN_LOADING_INDICATOR_NAVIGATION,
  PLUGIN_LOADING_SPINNER_MODE,
  TPluginLoadingIndicator,
} from 'constants/customizationApiGroupAndVersion'

type TParams = {
  cluster: string
  namespace?: string
  syntheticProject?: string
  pluginName: string
  '*': string // rest of the path after pluginName
}

type TPluginByManifestProps = {
  manifestEntry: TPluginManifestEntry
}

const getLoadingIndicator = (pluginName: string): TPluginLoadingIndicator => {
  if (pluginName === 'plugin-header') return PLUGIN_LOADING_INDICATOR_HEADER
  if (pluginName === 'plugin-sidebar') return PLUGIN_LOADING_INDICATOR_SIDEBAR
  if (pluginName === 'plugin-navigation') return PLUGIN_LOADING_INDICATOR_NAVIGATION
  return 'text'
}

export const PluginByManifest: FC<TPluginByManifestProps> = ({ manifestEntry }) => {
  const { cluster, namespace, syntheticProject, '*': pluginPath } = useParams<TParams>()
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)

  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [remoteLoading, setRemoteLoading] = useState(false)

  const loadingIndicator = getLoadingIndicator(manifestEntry.name)
  const showInlineSpinner = loadingIndicator === 'spinner' && PLUGIN_LOADING_SPINNER_MODE === 'inline'
  const showGlobalSpinner = loadingIndicator === 'spinner' && PLUGIN_LOADING_SPINNER_MODE === 'global'

  // STEP 1 – when manifest is loaded, dynamically load the plugin remote
  useEffect(() => {
    if (!manifestEntry) return undefined

    let cancelled = false
    const pluginId = `plugin-${manifestEntry.name}`

    const load = async (plugin: TPluginManifestEntry) => {
      if (cancelled) return
      setRemoteLoading(true)
      setLoadError(null)
      setComponent(null)
      // Track in Redux only for global spinner mode
      if (showGlobalSpinner) {
        dispatch(addLoadingPlugin(pluginId))
      }

      try {
        // register remote at runtime
        setRemote(plugin.name, {
          url: plugin.entry,
          format: 'esm',
          from: 'vite',
        })

        // load remote module
        const remoteModule = await getRemote(plugin.name, plugin.exposedModule)
        const Comp = (await unwrapModule(remoteModule)) as React.ComponentType<any>

        if (!cancelled) {
          setComponent(() => Comp)
        }
      } catch (e: any) {
        if (!cancelled) {
          setLoadError(e?.message ?? String(e))
        }
      } finally {
        if (!cancelled) {
          setRemoteLoading(false)
          if (showGlobalSpinner) {
            dispatch(removeLoadingPlugin(pluginId))
          }
        }
      }
    }

    const plugin = manifestEntry
    if (plugin) {
      load(plugin)
    } else {
      setLoadError(`Unknown "${manifestEntry}"`)
    }

    return () => {
      cancelled = true
      // Always dispatch remove to avoid stale state if mode changed
      dispatch(removeLoadingPlugin(pluginId))
    }
  }, [manifestEntry, dispatch, showGlobalSpinner])

  const toggleTheme = (checked: boolean) => {
    if (checked) {
      localStorage.setItem('theme', 'dark')
      dispatch(setTheme('dark'))
    } else {
      localStorage.setItem('theme', 'light')
      dispatch(setTheme('light'))
    }
    // 🔔 notify all federated modules in the same tab
    window.dispatchEvent(new CustomEvent(THEME_EVENT))
  }

  // STEP 2 – render states

  if (remoteLoading) {
    // Global mode: return null, GlobalPluginLoader shows the spinner
    if (showGlobalSpinner) {
      return null
    }
    // Inline mode: show spinner in place
    if (showInlineSpinner) {
      return <Spin size="large" />
    }
    // None: show nothing
    if (loadingIndicator === 'none') {
      return null
    }
    // Text (default): show text
    return <div>Loading plugin {manifestEntry.name}…</div>
  }
  if (loadError)
    return (
      <div>
        Failed to load plugin {manifestEntry.name}: {loadError}
      </div>
    )
  if (!Component) {
    return <div>No plugin component available. {JSON.stringify(manifestEntry)}</div>
  }

  return (
    <Component
      cluster={cluster}
      namespace={namespace}
      syntheticProject={syntheticProject}
      pluginName={manifestEntry.name}
      pluginPath={pluginPath}
      toggleTheme={() => toggleTheme(theme !== 'dark')}
    />
  )
}
