import { TClusterList, TSingleResource, useK8sSmartResource } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
  CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
  CUSTOM_NAMESPACE_API_RESOURCE_PLURAL,
} from 'constants/customizationApiGroupAndVersion'

const mappedClusterToOptionInSidebar = ({ name }: TClusterList[number]): { value: string; label: string } => ({
  value: name,
  label: name,
})

const mappedNamespaceToOptionInSidebar = ({ metadata }: TSingleResource): { value: string; label: string } => ({
  value: metadata.name,
  label: metadata.name,
})

export const useNavSelectorInside = (cluster?: string) => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  const isCustomNamespaceResource =
    CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP.length > 0 &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION.length > 0 &&
    CUSTOM_NAMESPACE_API_RESOURCE_PLURAL &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_PLURAL === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_PLURAL.length > 0

  const { data: namespaces } = useK8sSmartResource<{
    items: TSingleResource[]
  }>({
    cluster: cluster || '',
    apiVersion: 'v1',
    plural: 'namespaces',
    isEnabled: Boolean(cluster !== undefined && !isCustomNamespaceResource),
  })

  const { data: namespacesCustom } = useK8sSmartResource<{
    items: TSingleResource[]
  }>({
    cluster: cluster || '',
    apiGroup: CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
    apiVersion: CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
    plural: CUSTOM_NAMESPACE_API_RESOURCE_PLURAL,
    isEnabled: Boolean(cluster !== undefined && !isCustomNamespaceResource),
  })

  const clustersInSidebar = clusterList ? clusterList.map(mappedClusterToOptionInSidebar) : []
  const namespacesInSidebar = cluster && namespaces ? namespaces.items.map(mappedNamespaceToOptionInSidebar) : []
  const namespacesInSidebarCustom =
    cluster && namespacesCustom ? namespacesCustom.items.map(mappedNamespaceToOptionInSidebar) : []

  return {
    clustersInSidebar,
    namespacesInSidebar: isCustomNamespaceResource ? namespacesInSidebarCustom : namespacesInSidebar,
  }
}
