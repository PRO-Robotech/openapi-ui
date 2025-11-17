import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
  // useDirectUnknownResource,
  useK8sSmartResource,
  TNavigationResource,
} from '@prorobotech/openapi-k8s-toolkit'
import { useNavSelector } from 'hooks/useNavSelector'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE,
} from 'constants/customizationApiGroupAndVersion'

type TSelectorProps = {
  clusterName?: string
  projectName?: string
  instanceName?: string
}

export const Selector: FC<TSelectorProps> = ({ clusterName, projectName, instanceName }) => {
  const navigate = useNavigate()

  const [selectedClusterName, setSelectedClusterName] = useState(clusterName)
  const [selectedProjectName, setSelectedProjectName] = useState(projectName)
  const [selectedInstanceName, setSelectedInstanceName] = useState(instanceName)

  // const { projectsInSidebar, instancesInSidebar, allInstancesLoadingSuccess, clustersInSidebar } = useNavSelector(
  const { projectsInSidebar, instancesInSidebar, allInstancesLoadingSuccess } = useNavSelector(
    selectedClusterName,
    projectName,
  )

  // const { data: navigationData } = useDirectUnknownResource<{
  //   spec: { projects: { clear: string; change: string }; instances: { clear: string; change: string } }
  // }>({
  //   uri: `/api/clusters/${clusterName}/k8s/apis/${BASE_API_GROUP}/${BASE_API_VERSION}/${BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME}/${BASE_CUSTOMIZATION_NAVIGATION_RESOURCE}`,
  //   refetchInterval: false,
  //   queryKey: ['navigation', clusterName || 'no-cluster'],
  //   isEnabled: clusterName !== undefined,
  // })

  const { data: navigationDataArr } = useK8sSmartResource<{
    items: TNavigationResource[]
  }>({
    cluster: clusterName || '',
    group: BASE_API_GROUP,
    version: BASE_API_VERSION,
    plural: BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME,
    fieldSelector: `metadata.name=${BASE_CUSTOMIZATION_NAVIGATION_RESOURCE}`,
    isEnabled: clusterName !== undefined,
  })

  const navigationData =
    navigationDataArr?.items && navigationDataArr.items.length > 0 ? navigationDataArr.items[0] : undefined

  // const handleClusterChange = (value: string) => {
  //   setSelectedClusterName(value)
  //   navigate(`${baseprefix}/clusters/${value}`)
  // }

  const handleProjectChange = (value?: string) => {
    if (value && value !== 'all') {
      setSelectedProjectName(value)
      const changeUrl =
        navigationData?.spec?.projects?.change
          .replace('{selectedCluster}', selectedClusterName || 'no-cluster')
          .replace('{value}', value) || 'no navigation data'
      navigate(changeUrl)
    } else {
      const clearUrl =
        navigationData?.spec?.projects?.clear.replace('{selectedCluster}', selectedClusterName || 'no-cluster') ||
        'no navigation data'
      navigate(clearUrl)
    }
  }

  const handleInstanceChange = (value?: string) => {
    if (value && value !== 'all') {
      setSelectedInstanceName(value)
      const changeUrl =
        navigationData?.spec?.instances?.change
          .replace('{selectedCluster}', selectedClusterName || 'no-cluster')
          .replace('{selectedProject}', selectedProjectName || 'no-project')
          .replace('{value}', value) || 'no navigation data'
      navigate(changeUrl)
    } else {
      const clearUrl =
        navigationData?.spec?.instances?.clear
          .replace('{selectedCluster}', selectedClusterName || 'no-cluster')
          .replace('{selectedProject}', selectedProjectName || 'no-project') || 'no navigation data'
      navigate(clearUrl)
    }
  }

  useMountEffect(() => {
    setSelectedClusterName(clusterName)
    setSelectedProjectName(projectName)
    setSelectedInstanceName(instanceName)
  }, [projectName, instanceName, clusterName])

  return (
    <Flex gap={18} justify="start" align="center">
      {/* <EntrySelect
        placeholder="Cluster"
        options={clustersInSidebar}
        value={selectedClusterName}
        onChange={handleClusterChange}
      /> */}
      <Typography.Text>Project: </Typography.Text>
      <EntrySelect
        placeholder="Project"
        options={[{ value: 'all', label: 'All Namespaces' }, ...projectsInSidebar]}
        value={selectedProjectName || 'all'}
        onChange={handleProjectChange}
        disabled={selectedClusterName === undefined || projectsInSidebar.length === 0}
      />
      <Typography.Text>Instance: </Typography.Text>
      <EntrySelect
        placeholder="Instance"
        options={[{ value: 'all', label: 'All Namespaces' }, ...instancesInSidebar]}
        value={selectedInstanceName || 'all'}
        onChange={handleInstanceChange}
        disabled={
          selectedClusterName === undefined ||
          selectedProjectName === undefined ||
          (allInstancesLoadingSuccess && instancesInSidebar.length === 0)
        }
      />
    </Flex>
  )
}
