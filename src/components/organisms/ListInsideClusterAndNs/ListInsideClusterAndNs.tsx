/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react'
import { Button, Alert, Spin, Typography } from 'antd'
import {
  filterSelectOptions,
  Spacer,
  TSingleResource,
  //  useBuiltinResources,
  // useApiResources,
  useK8sSmartResource,
} from '@prorobotech/openapi-k8s-toolkit'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store/store'
import { setCluster } from 'store/cluster/cluster/cluster'
import {
  CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
  CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
  CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME,
} from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

export const ListInsideClusterAndNs: FC = () => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [selectedCluster, setSelectedCluster] = useState<string>()
  const [selectedNamespace, setSelectedNamespace] = useState<string>()

  const isCustomNamespaceResource: boolean =
    CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP.length > 0 &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION.length > 0 &&
    CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME.length > 0

  // const namespacesData = useBuiltinResources({
  //   clusterName: selectedCluster || '',
  //   typeName: 'namespaces',
  //   limit: null,
  //   isEnabled: Boolean(selectedCluster !== undefined && !isCustomNamespaceResource),
  // })

  const namespacesData = useK8sSmartResource<{
    items: TSingleResource[]
  }>({
    cluster: selectedCluster || '',
    version: 'v1',
    plural: 'namespaces',
    isEnabled: Boolean(selectedCluster !== undefined && !isCustomNamespaceResource),
  })

  // const namespacesDataCustom = useApiResources({
  //   clusterName: selectedCluster || '',
  //   apiGroup: CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
  //   apiVersion: CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
  //   typeName: CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME,
  //   limit: null,
  //   isEnabled: Boolean(selectedCluster !== undefined && isCustomNamespaceResource),
  // })

  const namespacesDataCustom = useK8sSmartResource<{
    items: TSingleResource[]
  }>({
    cluster: selectedCluster || '',
    group: CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
    version: CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
    plural: CUSTOM_NAMESPACE_API_RESOURCE_RESOURCE_NAME,
    isEnabled: Boolean(selectedCluster !== undefined && isCustomNamespaceResource),
  })

  return (
    <>
      <Typography.Text>
        Cluster<Typography.Text type="danger">*</Typography.Text>
      </Typography.Text>
      <Spacer $space={8} $samespace />
      {!clusterList && <Spin />}
      {Array.isArray(clusterList) && (
        <Styled.FullWidthSelect
          placeholder="Choose cluster"
          options={clusterList.map(({ name }) => ({
            label: name,
            value: name,
          }))}
          filterOption={filterSelectOptions}
          allowClear
          showSearch
          onSelect={value => {
            if (typeof value === 'string') {
              dispatch(setCluster(value))
              setSelectedCluster(value)
              // navigate(`/${value}/apis`)
            }
          }}
          onClear={() => {
            dispatch(setCluster(''))
            setSelectedCluster(undefined)
          }}
        />
      )}
      <Spacer $space={8} $samespace />
      {selectedCluster && (isCustomNamespaceResource ? namespacesDataCustom.isLoading : namespacesData.isLoading) && (
        <Spin />
      )}
      {selectedCluster && (isCustomNamespaceResource ? namespacesDataCustom.error : namespacesData.error) && (
        <Alert
          message={`An error has occurred: ${
            isCustomNamespaceResource
              ? typeof namespacesDataCustom.error === 'string'
                ? namespacesDataCustom.error
                : namespacesDataCustom.error?.message
              : typeof namespacesData.error === 'string'
              ? namespacesData.error
              : namespacesData.error?.message
          } `}
          type="error"
        />
      )}
      {selectedCluster &&
        selectedCluster.length > 0 &&
        ((!isCustomNamespaceResource && namespacesData.data && namespacesData.data.items.length > 0) ||
          (isCustomNamespaceResource && namespacesDataCustom.data && namespacesDataCustom.data.items.length > 0)) && (
          <>
            <Typography.Text>Namespace</Typography.Text>
            <Spacer $space={8} $samespace />
            {isCustomNamespaceResource ? (
              <Styled.FullWidthSelect
                placeholder="Choose namespace"
                options={namespacesDataCustom.data?.items.map(ns => ({
                  label: ns.metadata.name,
                  value: ns.metadata.name,
                }))}
                filterOption={filterSelectOptions}
                allowClear
                showSearch
                onSelect={value => {
                  if (typeof value === 'string') {
                    setSelectedNamespace(value)
                  }
                }}
                onClear={() => setSelectedNamespace(undefined)}
              />
            ) : (
              <Styled.FullWidthSelect
                placeholder="Choose namespace"
                options={namespacesData.data?.items.map(ns => ({
                  label: ns.metadata.name,
                  value: ns.metadata.name,
                }))}
                filterOption={filterSelectOptions}
                allowClear
                showSearch
                onSelect={value => {
                  if (typeof value === 'string') {
                    setSelectedNamespace(value)
                  }
                }}
                onClear={() => setSelectedNamespace(undefined)}
              />
            )}
            <Spacer $space={8} $samespace />
          </>
        )}
      <Button
        onClick={() =>
          navigate(`${baseprefix}/inside/${cluster}${selectedNamespace ? `/${selectedNamespace}` : ''}/apis`)
        }
      >
        Go
      </Button>
    </>
  )
}
