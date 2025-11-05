import { TClusterList, TSingleResource, useBuiltinResources, useApiResources } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
  CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
  CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME,
} from 'constants/customizationApiGroupAndVersion'

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

  const isCustomNamespaceResource =
    CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP.length > 0 &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION.length > 0 &&
    CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME.length > 0

  const { data: namespaces } = useBuiltinResources({
    clusterName: clusterName || '',
    typeName: 'namespaces',
    limit: null,
    isEnabled: Boolean(clusterName !== undefined && !isCustomNamespaceResource),
  })

  const { data: namespacesCustom } = useApiResources({
    clusterName: clusterName || '',
    apiGroup: CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
    apiVersion: CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
    typeName: CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME,
    limit: null,
    isEnabled: Boolean(clusterName !== undefined && isCustomNamespaceResource),
  })

  const clustersInSidebar = clusterList ? clusterList.map(mappedClusterToOptionInSidebar) : []
  const namespacesInSidebar = clusterName && namespaces ? namespaces.items.map(mappedNamespaceToOptionInSidebar) : []
  const namespacesInSidebarCustom =
    clusterName && namespacesCustom ? namespacesCustom.items.map(mappedNamespaceToOptionInSidebar) : []

  return {
    clustersInSidebar,
    namespacesInSidebar: isCustomNamespaceResource ? namespacesInSidebarCustom : namespacesInSidebar,
  }
}
