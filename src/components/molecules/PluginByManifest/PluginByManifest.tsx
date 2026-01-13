/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/PluginRoute.tsx
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  __federation_method_getRemote as getRemote,
  __federation_method_setRemote as setRemote,
  __federation_method_unwrapDefault as unwrapModule,
} from 'virtual:__federation__'
import { TPluginManifestEntry } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from 'store/store'
import { setTheme } from 'store/theme/theme/theme'
import { THEME_EVENT } from 'constants/theme'

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

export const PluginByManifest: FC<TPluginByManifestProps> = ({ manifestEntry }) => {
  const { cluster, namespace, syntheticProject, '*': pluginPath } = useParams<TParams>()

  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [remoteLoading, setRemoteLoading] = useState(false)

  // STEP 1 – when manifest is loaded, dynamically load the plugin remote
  useEffect(() => {
    if (!manifestEntry) return undefined

    let cancelled = false

    const load = async (plugin: TPluginManifestEntry) => {
      setRemoteLoading(true)
      setLoadError(null)
      setComponent(null)

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
    }
  }, [manifestEntry])

  console.log('manifestEntry', manifestEntry)

  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)

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

  if (remoteLoading) return <div>Loading plugin {manifestEntry.name}…</div>
  if (loadError)
    return (
      <div>
        Failed to load plugin {manifestEntry.name}: {loadError}
      </div>
    )
  if (!Component) return <div>No plugin component available. {JSON.stringify(manifestEntry)}</div>

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
