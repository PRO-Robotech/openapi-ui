import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useNavSelector } from 'hooks/useNavSelector'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect, PaddingContainer } from 'components/atoms'
import { SELECTOR_WIDTH_PROJECT, SELECTOR_WIDTH_INSTANCE } from 'constants/customizationApiGroupAndVersion'

type TSelectorNamespaceProjectNewProps = {
  cluster?: string
  projectName?: string
  instanceName?: string
  disabled?: boolean
}

export const SelectorNamespaceProjectNew: FC<TSelectorNamespaceProjectNewProps> = ({
  cluster,
  projectName,
  instanceName,
  disabled,
}) => {
  const navigate = useNavigate()
  const params = useParams()

  const [selectedCluster, setSelectedCluster] = useState(cluster)
  const [selectedProjectName, setSelectedProjectName] = useState(projectName)
  const [selectedInstanceName, setSelectedInstanceName] = useState(instanceName)

  const { projectsInSidebar, instancesInSidebar, allInstancesLoadingSuccess } = useNavSelector(
    selectedCluster,
    projectName,
  )

  const updateNamespaceAndSynthetic = (namespace?: string, syntheticProject?: string) => {
    const parts = window.location.pathname.split('/').filter(Boolean)

    const clusterFromRoute = params.cluster || selectedCluster
    if (!clusterFromRoute) return

    const clusterIdx = parts.indexOf(clusterFromRoute)
    if (clusterIdx === -1) return

    const hasNamespace = Boolean(params.namespace)
    const hasSynthetic = Boolean(params.syntheticProject)

    // tail starts after the optional segments that currently exist
    const tailStart = clusterIdx + 1 + (hasNamespace ? 1 : 0) + (hasSynthetic ? 1 : 0)
    const base = parts.slice(0, clusterIdx + 1)
    const tail = parts.slice(tailStart)

    const nextParts = [
      ...base,
      ...(namespace ? [namespace] : []),
      ...(syntheticProject ? [syntheticProject] : []),
      ...tail,
    ]

    navigate('/' + nextParts.join('/'))
  }

  const handleProjectChange = (value?: string) => {
    const project = value && value !== 'all' ? value : undefined
    setSelectedProjectName(project)

    // If project cleared -> clear instance too (prevents stale syntheticProject behavior)
    if (!project) {
      setSelectedInstanceName(undefined)
      updateNamespaceAndSynthetic(undefined, undefined)
      return
    }

    // If there is an instance selected -> keep namespace as instance, set syntheticProject = project
    if (selectedInstanceName && selectedInstanceName !== 'all') {
      updateNamespaceAndSynthetic(selectedInstanceName, project)
      return
    }

    // No instance -> namespace becomes project, remove syntheticProject
    updateNamespaceAndSynthetic(project, undefined)
  }

  const handleInstanceChange = (value?: string) => {
    const instance = value && value !== 'all' ? value : undefined
    setSelectedInstanceName(instance)

    // Clearing instance -> revert to "project as namespace" mode
    if (!instance) {
      if (selectedProjectName) updateNamespaceAndSynthetic(selectedProjectName, undefined)
      else updateNamespaceAndSynthetic(undefined, undefined)
      return
    }

    // Instance selected -> namespace = instance, syntheticProject = project
    updateNamespaceAndSynthetic(instance, selectedProjectName)
  }

  useMountEffect(() => {
    setSelectedCluster(cluster)
    setSelectedProjectName(projectName)
    setSelectedInstanceName(instanceName)
  }, [projectName, instanceName, cluster])

  return (
    <PaddingContainer $padding="0 0 16px 0">
      <Flex gap={18} justify="start" align="center">
        <Typography.Text>Project: </Typography.Text>
        <EntrySelect
          placeholder="Project"
          options={[{ value: 'all', label: 'All Projects' }, ...projectsInSidebar]}
          value={selectedProjectName || 'all'}
          onChange={handleProjectChange}
          disabled={selectedCluster === undefined || projectsInSidebar.length === 0 || disabled}
          forcedWidth={SELECTOR_WIDTH_PROJECT}
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
            (allInstancesLoadingSuccess && instancesInSidebar.length === 0) ||
            disabled
          }
          forcedWidth={SELECTOR_WIDTH_INSTANCE}
        />
      </Flex>
    </PaddingContainer>
  )
}
