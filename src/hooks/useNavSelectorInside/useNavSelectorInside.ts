import {
  TClusterList,
  TSingleResource,
  useK8sSmartResource,
  TNavigationResource,
} from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME,
  CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
  CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
  CUSTOM_NAMESPACE_API_RESOURCE_PLURAL,
} from 'constants/customizationApiGroupAndVersion'
import { parseAll } from './utils'

const mappedClusterToOptionInSidebar = ({ name }: TClusterList[number]): { value: string; label: string } => ({
  value: name,
  label: name,
})

const mappedNamespaceToOptionInSidebar = ({
  namespace,
  aliasPath,
}: {
  namespace: TSingleResource
  aliasPath?: string
}): { value: string; label: string } => ({
  value: namespace.metadata.name,
  label: aliasPath
    ? parseAll({
        text: aliasPath,
        replaceValues: {},
        multiQueryData: { req0: { ...namespace } },
      })
    : namespace.metadata.name,
})

export const useNavSelectorInside = (cluster?: string) => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  const { data: navigationDataArr } = useK8sSmartResource<{
    items: TNavigationResource[]
  }>({
    cluster: cluster || '',
    apiGroup: BASE_API_GROUP,
    apiVersion: BASE_API_VERSION,
    plural: BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL,
    fieldSelector: `metadata.name=${BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME}`,
    isEnabled: cluster !== undefined,
  })

  const navigationData =
    navigationDataArr?.items && navigationDataArr.items.length > 0 ? navigationDataArr.items[0] : undefined

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
    isEnabled: Boolean(cluster !== undefined && isCustomNamespaceResource),
  })

  const clustersInSidebar = clusterList ? clusterList.map(mappedClusterToOptionInSidebar) : []
  const namespacesInSidebar =
    cluster && namespaces
      ? namespaces.items.map(item =>
          mappedNamespaceToOptionInSidebar({ namespace: item, aliasPath: navigationData?.spec?.namespaces?.aliasPath }),
        )
      : []
  const namespacesInSidebarCustom =
    cluster && namespacesCustom
      ? namespacesCustom.items.map(item =>
          mappedNamespaceToOptionInSidebar({ namespace: item, aliasPath: navigationData?.spec?.namespaces?.aliasPath }),
        )
      : []

  return {
    clustersInSidebar,
    namespacesInSidebar: isCustomNamespaceResource ? namespacesInSidebarCustom : namespacesInSidebar,
  }
}
