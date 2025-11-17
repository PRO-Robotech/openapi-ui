import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  // useDirectUnknownResource,
  useK8sSmartResource,
  TNavigationResource,
} from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { useNavSelectorInside } from 'hooks/useNavSelectorInside'
import { useMountEffect } from 'hooks/useMountEffect'
import { useIsSearchPage } from 'hooks/useIsSearchPage'
import { EntrySelect } from 'components/atoms'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE,
} from 'constants/customizationApiGroupAndVersion'

type TSelectorNamespaceProps = {
  clusterName?: string
  namespace?: string
}

export const SelectorNamespace: FC<TSelectorNamespaceProps> = ({ clusterName, namespace }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const [selectedClusterName, setSelectedClusterName] = useState(clusterName)
  const [selectedNamespace, setSelectedNamespace] = useState(namespace)

  const { namespacesInSidebar } = useNavSelectorInside(selectedClusterName)

  // const { data: navigationData } = useDirectUnknownResource<{
  //   spec: { namespaces: { clear: string; change: string } }
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

  const isSearchPage = useIsSearchPage(baseprefix || '')

  const handleNamepsaceChange = (value?: string) => {
    if (isSearchPage) {
      const { pathname, search, hash } = location
      const segs = pathname.split('/')

      // Assume pattern: /prefix/:clusterName/:namespace?/:syntheticProject?/search/*
      // Find the "search" segment index
      const searchIdx = segs.indexOf('search')
      const clusterIdx = segs.indexOf(selectedClusterName || '')
      if (clusterIdx === -1) {
        return
      } // bail if we can't find the cluster

      const nsIdx = clusterIdx + 1 // where namespace would live if present
      const spIdx = clusterIdx + 2 // where syntheticProject would live if present
      const nsExists = nsIdx < searchIdx // true if something occupies ns slot
      const spExists = spIdx < searchIdx // true if something occupies sp slot

      if (value && value !== 'all') {
        setSelectedNamespace(value)

        if (nsExists) {
          // replace namespace in place
          segs[nsIdx] = value
        } else {
          // insert namespace before "search" (or before syntheticProject if present)
          const insertAt = spExists ? spIdx : searchIdx
          segs.splice(insertAt, 0, value)
        }
      } else if (nsExists) {
        segs.splice(nsIdx, 1) // removes namespace; syntheticProject (if any) shifts left
      }
      // if ns didn't exist, nothing to clear

      navigate(segs.join('/') + search + hash, { replace: true })
      return
    }
    if (value && value !== 'all') {
      setSelectedNamespace(value)
      const changeUrl =
        navigationData?.spec?.namespaces?.change
          .replace('{selectedCluster}', selectedClusterName || 'no-cluster')
          .replace('{value}', value) || 'no navigation data'
      navigate(changeUrl)
    } else {
      const clearUrl =
        navigationData?.spec?.namespaces?.clear.replace('{selectedCluster}', selectedClusterName || 'no-cluster') ||
        'no navigation data'
      navigate(clearUrl)
    }
  }

  useMountEffect(() => {
    setSelectedClusterName(clusterName)
    setSelectedNamespace(namespace)
  }, [namespace, clusterName])

  return (
    <Flex gap={18} justify="start" align="center">
      <Typography.Text>Namespace: </Typography.Text>
      <EntrySelect
        placeholder="Namespace"
        options={[{ value: 'all', label: 'All Namespaces' }, ...namespacesInSidebar]}
        value={selectedNamespace || 'all'}
        onChange={handleNamepsaceChange}
        disabled={selectedClusterName === undefined || namespacesInSidebar.length === 0}
      />
    </Flex>
  )
}
