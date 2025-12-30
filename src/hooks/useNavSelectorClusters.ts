import { TClusterList } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

const mappedClusterToOptionInSidebar = ({ name }: TClusterList[number]): { value: string; label: string } => ({
  value: name,
  label: name,
})

export const useNavSelectorClusters = () => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  const clustersInSidebar = clusterList
    ? clusterList.map(mappedClusterToOptionInSidebar).sort((a, b) => a.label.localeCompare(b.label))
    : []

  return { clustersInSidebar }
}
