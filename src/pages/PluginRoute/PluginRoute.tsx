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
import { usePluginManifest, TPluginManifestEntry } from '@prorobotech/openapi-k8s-toolkit'

type TParams = {
  cluster: string
  namespace?: string
  syntheticProject?: string
  pluginName: string
  '*': string // rest of the path after pluginName
}

export const PluginRoute: FC = () => {
  const { cluster, namespace, syntheticProject, pluginName, '*': pluginPath } = useParams<TParams>()

  const {
    data: manifest,
    isLoading: manifestLoading,
    error: manifestError,
  } = usePluginManifest({ cluster: cluster || '', refetchInterval: 60_000, isEnabled: Boolean(cluster) })

  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [remoteLoading, setRemoteLoading] = useState(false)

  // STEP 1 – when manifest is loaded, dynamically load the plugin remote
  useEffect(() => {
    if (!manifest || !pluginName) return undefined

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

    const plugin = manifest.data[pluginName]
    if (plugin) {
      load(plugin)
    } else {
      setLoadError(`Unknown plugin "${pluginName}"`)
    }

    return () => {
      cancelled = true
    }
  }, [manifest, manifest?.data, pluginName])

  console.log('pluginName from URL:', pluginName)
  console.log('manifest keys:', Object.keys(manifest || {}))

  // STEP 2 – render states

  if (manifestLoading) return <div>Loading plugins manifest…</div>
  if (manifestError) return <div>Manifest error: {(manifestError as Error).message}</div>
  if (remoteLoading) return <div>Loading plugin {pluginName}…</div>
  if (loadError)
    return (
      <div>
        Failed to load plugin {pluginName}: {loadError}
      </div>
    )
  if (!Component) return <div>No plugin component available.</div>

  return (
    <Component
      cluster={cluster}
      namespace={namespace}
      syntheticProject={syntheticProject}
      pluginName={pluginName}
      pluginPath={pluginPath}
      withRoutes
    />
  )
}
