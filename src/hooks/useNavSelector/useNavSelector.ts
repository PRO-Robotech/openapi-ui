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
  BASE_PROJECTS_API_GROUP,
  BASE_PROJECTS_API_VERSION,
  BASE_PROJECTS_PLURAL,
  BASE_INSTANCES_API_GROUP,
  BASE_INSTANCES_API_VERSION,
  BASE_INSTANCES_PLURAL,
} from 'constants/customizationApiGroupAndVersion'
import { parseAll } from './utils'

const mappedClusterToOptionInSidebar = ({ name }: TClusterList[number]): { value: string; label: string } => ({
  value: name,
  label: name,
})

const mappedProjectToOptionInSidebar = ({
  project,
  aliasPath,
}: {
  project: TSingleResource
  aliasPath?: string
}): { value: string; label: string } => ({
  value: project.metadata.name,
  label: aliasPath
    ? parseAll({
        text: aliasPath,
        replaceValues: {},
        multiQueryData: { req0: { ...project } },
      })
    : project.metadata.name,
})

const mappedInstanceToOptionInSidebar = ({
  instance,
  templateString,
  aliasPath,
}: {
  instance: TSingleResource
  templateString?: string
  aliasPath?: string
}): { value: string; label: string } => ({
  value: templateString
    ? parseAll({
        text: templateString,
        replaceValues: {},
        multiQueryData: { req0: { ...instance } },
      })
    : `${instance.metadata.namespace}-${instance.metadata.name}`,
  label: aliasPath
    ? parseAll({
        text: aliasPath,
        replaceValues: {},
        multiQueryData: { req0: { ...instance } },
      })
    : instance.metadata.name,
})

export const useNavSelector = (cluster?: string, projectName?: string) => {
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

  const { data: projects } = useK8sSmartResource<{
    items: TSingleResource[]
  }>({
    cluster: cluster || '',
    apiGroup: BASE_PROJECTS_API_GROUP,
    apiVersion: BASE_PROJECTS_API_VERSION,
    plural: BASE_PROJECTS_PLURAL,
    isEnabled: cluster !== undefined,
  })

  const {
    data: instances,
    isLoading: isInstancesLoading,
    isError: isInstancesError,
  } = useK8sSmartResource<{
    items: TSingleResource[]
  }>({
    cluster: cluster || '',
    apiGroup: BASE_INSTANCES_API_GROUP,
    apiVersion: BASE_INSTANCES_API_VERSION,
    plural: BASE_INSTANCES_PLURAL,
    isEnabled: cluster !== undefined,
  })

  const allInstancesLoadingSuccess: boolean = Boolean(
    instances && instances.items && !isInstancesError && !isInstancesLoading,
  )

  const clustersInSidebar = clusterList ? clusterList.map(mappedClusterToOptionInSidebar) : []
  const projectsInSidebar =
    cluster && projects
      ? projects.items.map(item =>
          mappedProjectToOptionInSidebar({ project: item, aliasPath: navigationData?.spec?.projects?.aliasPath }),
        )
      : []
  const instancesInSidebar =
    cluster && instances
      ? instances.items
          .filter(item => item.metadata.namespace === projectName)
          .map(item =>
            mappedInstanceToOptionInSidebar({
              instance: item,
              templateString: navigationData?.spec?.instances?.mapOptionsPattern,
              aliasPath: navigationData?.spec?.instances?.aliasPath,
            }),
          )
      : []

  return { clustersInSidebar, projectsInSidebar, instancesInSidebar, allInstancesLoadingSuccess }
}
