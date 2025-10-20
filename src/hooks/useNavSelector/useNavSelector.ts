import {
  useApiResources,
  TClusterList,
  TSingleResource,
  useDirectUnknownResource,
} from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE,
  BASE_PROJECTS_API_GROUP,
  BASE_PROJECTS_VERSION,
  BASE_PROJECTS_RESOURCE_NAME,
  BASE_INSTANCES_API_GROUP,
  BASE_INSTANCES_VERSION,
  BASE_INSTANCES_RESOURCE_NAME,
} from 'constants/customizationApiGroupAndVersion'
import { parseAll } from './utils'

const mappedClusterToOptionInSidebar = ({ name }: TClusterList[number]): { value: string; label: string } => ({
  value: name,
  label: name,
})

const mappedProjectToOptionInSidebar = ({ metadata }: TSingleResource): { value: string; label: string } => ({
  value: metadata.name,
  label: metadata.name,
})

const mappedInstanceToOptionInSidebar = ({
  instance,
  templateString,
}: {
  instance: TSingleResource
  templateString?: string
}): { value: string; label: string } => ({
  value: templateString
    ? parseAll({
        text: templateString,
        replaceValues: {},
        multiQueryData: { req0: { ...instance } },
      })
    : `${instance.metadata.namespace}-${instance.metadata.name}`,
  label: instance.metadata.name,
})

export const useNavSelector = (clusterName?: string, projectName?: string) => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  const { data: navigationData } = useDirectUnknownResource<{
    spec: { instances: { mapOptionsPattern: string } }
  }>({
    uri: `/api/clusters/${clusterName}/k8s/apis/${BASE_API_GROUP}/${BASE_API_VERSION}/${BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME}/${BASE_CUSTOMIZATION_NAVIGATION_RESOURCE}`,
    refetchInterval: false,
    queryKey: ['navigation', clusterName || 'no-cluster'],
    isEnabled: clusterName !== undefined,
  })

  const { data: projects } = useApiResources({
    clusterName: clusterName || '',
    namespace: '',
    apiGroup: BASE_PROJECTS_API_GROUP,
    apiVersion: BASE_PROJECTS_VERSION,
    typeName: BASE_PROJECTS_RESOURCE_NAME,
    limit: null,
    isEnabled: clusterName !== undefined,
  })

  const { data: instances, isSuccess: allInstancesLoadingSuccess } = useApiResources({
    clusterName: clusterName || '',
    namespace: '',
    apiGroup: BASE_INSTANCES_API_GROUP,
    apiVersion: BASE_INSTANCES_VERSION,
    typeName: BASE_INSTANCES_RESOURCE_NAME,
    limit: null,
    isEnabled: clusterName !== undefined,
  })

  const clustersInSidebar = clusterList ? clusterList.map(mappedClusterToOptionInSidebar) : []
  const projectsInSidebar = clusterName && projects ? projects.items.map(mappedProjectToOptionInSidebar) : []
  const instancesInSidebar =
    clusterName && instances
      ? instances.items
          .filter(item => item.metadata.namespace === projectName)
          .map(item =>
            mappedInstanceToOptionInSidebar({
              instance: item,
              templateString: navigationData?.spec.instances.mapOptionsPattern,
            }),
          )
      : []

  return { clustersInSidebar, projectsInSidebar, instancesInSidebar, allInstancesLoadingSuccess }
}
