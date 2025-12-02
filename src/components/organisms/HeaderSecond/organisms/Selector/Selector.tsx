import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useK8sSmartResource, TNavigationResource } from '@prorobotech/openapi-k8s-toolkit'
import { useNavSelector } from 'hooks/useNavSelector'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME,
} from 'constants/customizationApiGroupAndVersion'

type TSelectorProps = {
  cluster?: string
  projectName?: string
  instanceName?: string
}

export const Selector: FC<TSelectorProps> = ({ cluster, projectName, instanceName }) => {
  const navigate = useNavigate()

  const [selectedCluster, setSelectedCluster] = useState(cluster)
  const [selectedProjectName, setSelectedProjectName] = useState(projectName)
  const [selectedInstanceName, setSelectedInstanceName] = useState(instanceName)

  const { projectsInSidebar, instancesInSidebar, allInstancesLoadingSuccess } = useNavSelector(
    selectedCluster,
    projectName,
  )

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

  const handleProjectChange = (value?: string) => {
    if (value && value !== 'all') {
      setSelectedProjectName(value)
      const changeUrl =
        navigationData?.spec?.projects?.change
          .replace('{selectedCluster}', selectedCluster || 'no-cluster')
          .replace('{value}', value) || 'no navigation data'
      navigate(changeUrl)
    } else {
      const clearUrl =
        navigationData?.spec?.projects?.clear.replace('{selectedCluster}', selectedCluster || 'no-cluster') ||
        'no navigation data'
      navigate(clearUrl)
    }
  }

  const handleInstanceChange = (value?: string) => {
    if (value && value !== 'all') {
      setSelectedInstanceName(value)
      const changeUrl =
        navigationData?.spec?.instances?.change
          .replace('{selectedCluster}', selectedCluster || 'no-cluster')
          .replace('{selectedProject}', selectedProjectName || 'no-project')
          .replace('{value}', value) || 'no navigation data'
      navigate(changeUrl)
    } else {
      const clearUrl =
        navigationData?.spec?.instances?.clear
          .replace('{selectedCluster}', selectedCluster || 'no-cluster')
          .replace('{selectedProject}', selectedProjectName || 'no-project') || 'no navigation data'
      navigate(clearUrl)
    }
  }

  useMountEffect(() => {
    setSelectedCluster(cluster)
    setSelectedProjectName(projectName)
    setSelectedInstanceName(instanceName)
  }, [projectName, instanceName, cluster])

  return (
    <Flex gap={18} justify="start" align="center">
      {/* <EntrySelect
        placeholder="Cluster"
        options={clustersInSidebar}
        value={selectedCluster}
        onChange={handleClusterChange}
      /> */}
      <Typography.Text>Project: </Typography.Text>
      <EntrySelect
        placeholder="Project"
        options={[{ value: 'all', label: 'All Projects' }, ...projectsInSidebar]}
        value={selectedProjectName || 'all'}
        onChange={handleProjectChange}
        disabled={selectedCluster === undefined || projectsInSidebar.length === 0}
      />
      <Typography.Text>Instance: </Typography.Text>
      <EntrySelect
        placeholder="Instance"
        options={[{ value: 'all', label: 'All Instances' }, ...instancesInSidebar]}
        value={selectedInstanceName || 'all'}
        onChange={handleInstanceChange}
        disabled={
          selectedCluster === undefined ||
          selectedProjectName === undefined ||
          (allInstancesLoadingSuccess && instancesInSidebar.length === 0)
        }
      />
    </Flex>
  )
}
