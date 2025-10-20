import { TClusterList, TSingleResource, useBuiltinResources } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

const mappedClusterToOptionInSidebar = ({ name }: TClusterList[number]): { value: string; label: string } => ({
  value: name,
  label: name,
})

const mappedNamespaceToOptionInSidebar = ({ metadata }: TSingleResource): { value: string; label: string } => ({
  value: metadata.name,
  label: metadata.name,
})

export const useNavSelectorInside = (clusterName?: string) => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  const { data: namespaces } = useBuiltinResources({
    clusterName: clusterName || '',
    typeName: 'namespaces',
    limit: null,
    isEnabled: Boolean(clusterName),
  })

  const clustersInSidebar = clusterList ? clusterList.map(mappedClusterToOptionInSidebar) : []
  const namespacesInSidebar = clusterName && namespaces ? namespaces.items.map(mappedNamespaceToOptionInSidebar) : []

  return { clustersInSidebar, namespacesInSidebar }
}
