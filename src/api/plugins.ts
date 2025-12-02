import { TPluginManifest } from 'localTypes/plugins'

// If you want cluster-aware plugins, include params here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function fetchPluginManifest(cluster?: string): Promise<TPluginManifest> {
  // const url = cluster ? `/api/clusters/${encodeURIComponent(cluster)}/openapi-plugins` : `/api/openapi-plugins`

  // const res = await fetch(url)
  // if (!res.ok) {
  //   throw new Error(`Failed to fetch plugin manifest: ${res.status} ${res.statusText}`)
  // }

  // const data = (await res.json()) as TPluginManifest
  // return data

  return {
    'plugin-example': {
      name: 'plugin-example',
      entry: 'http://localhost:9005/assets/remoteEntry.js',
      exposedModule: './App',
    },
  }
}
