import { TClusterList } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

type TClusterLike = Partial<TClusterList[number]> & {
  displayName?: string
  metadata?: {
    name?: string
  }
}

const getClusterName = (cluster: TClusterLike): string => {
  const byName = typeof cluster.name === 'string' ? cluster.name.trim() : ''
  if (byName.length > 0) {
    return byName
  }

  const byMetadataName = typeof cluster.metadata?.name === 'string' ? cluster.metadata.name.trim() : ''
  return byMetadataName
}

const getClusterLabel = (cluster: TClusterLike): string => {
  const displayName = typeof cluster.displayName === 'string' ? cluster.displayName.trim() : ''
  if (displayName.length > 0) {
    return displayName
  }

  return getClusterName(cluster)
}

export const useNavSelectorClusters = () => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  const clustersInSidebar = clusterList
    ? (clusterList as unknown as TClusterLike[])
        .map(cluster => {
          const name = getClusterName(cluster)
          const label = getClusterLabel(cluster)

          return name.length > 0 ? { value: name, label } : undefined
        })
        .filter((cluster): cluster is { value: string; label: string } => Boolean(cluster))
        .sort((a, b) => a.label.localeCompare(b.label))
    : []

  return { clustersInSidebar }
}
