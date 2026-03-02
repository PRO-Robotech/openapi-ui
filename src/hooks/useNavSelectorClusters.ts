import { TClusterList } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

type TClusterLike = Partial<TClusterList[number]> & {
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

export const useNavSelectorClusters = () => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  const clustersInSidebar = clusterList
    ? (clusterList as unknown as TClusterLike[])
        .map(getClusterName)
        .filter((name): name is string => name.length > 0)
        .map(name => ({ value: name, label: name }))
        .sort((a, b) => a.label.localeCompare(b.label))
    : []

  return { clustersInSidebar }
}
