import { useQuery } from '@tanstack/react-query'
import { fetchPluginManifest } from 'api/plugins'

export const usePluginManifest = (cluster?: string) => {
  return useQuery({
    queryKey: ['pluginManifest', cluster],
    queryFn: () => fetchPluginManifest(cluster),
    staleTime: 60_000, // 1 minute, tweak as needed
  })
}
