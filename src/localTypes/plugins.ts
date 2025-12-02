export type TPluginManifestEntry = {
  name: string // remote name, e.g. 'openapi-ui-plugin-xyz'
  entry: string // URL to that plugin's remoteEntry.js
  exposedModule: string // usually './App'
}

export type TPluginManifest = Record<string, TPluginManifestEntry>
