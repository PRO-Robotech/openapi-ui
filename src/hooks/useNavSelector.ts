import { useApiResources, TClusterList, TSingleResource } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  BASE_PROJECTS_API_GROUP,
  BASE_PROJECTS_VERSION,
  BASE_PROJECTS_RESOURCE_NAME,
  BASE_INSTANCES_API_GROUP,
  BASE_INSTANCES_VERSION,
  BASE_INSTANCES_RESOURCE_NAME,
} from 'constants/customizationApiGroupAndVersion'

const mappedClusterToOptionInSidebar = ({ name }: TClusterList[number]): { value: string; label: string } => ({
  value: name,
  label: name,
})

const mappedProjectToOptionInSidebar = ({ metadata }: TSingleResource): { value: string; label: string } => ({
  value: metadata.name,
  label: metadata.name,
})

const mappedInstanceToOptionInSidebar = ({ metadata }: TSingleResource): { value: string; label: string } => ({
  value: `${metadata.namespace}-${metadata.name}`,
  label: metadata.name,
})

export const useNavSelector = (clusterName?: string, projectName?: string) => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  const { data: projects } = useApiResources({
    clusterName: clusterName || '',
    namespace: '',
    apiGroup: BASE_PROJECTS_API_GROUP,
    apiVersion: BASE_PROJECTS_VERSION,
    typeName: BASE_PROJECTS_RESOURCE_NAME,
    limit: null,
  })

  const { data: instances, isSuccess: allInstancesLoadingSuccess } = useApiResources({
    clusterName: clusterName || '',
    namespace: '',
    apiGroup: BASE_INSTANCES_API_GROUP,
    apiVersion: BASE_INSTANCES_VERSION,
    typeName: BASE_INSTANCES_RESOURCE_NAME,
    limit: null,
  })

  const clustersInSidebar = clusterList ? clusterList.map(mappedClusterToOptionInSidebar) : []
  const projectsInSidebar = clusterName && projects ? projects.items.map(mappedProjectToOptionInSidebar) : []
  const instancesInSidebar =
    clusterName && instances
      ? instances.items.filter(item => item.metadata.namespace === projectName).map(mappedInstanceToOptionInSidebar)
      : []

  return { clustersInSidebar, projectsInSidebar, instancesInSidebar, allInstancesLoadingSuccess }
}
