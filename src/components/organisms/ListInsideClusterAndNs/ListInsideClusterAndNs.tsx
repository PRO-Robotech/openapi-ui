import React, { FC, useState } from 'react'
import { Button, Alert, Spin, Typography } from 'antd'
import { filterSelectOptions, Spacer, useBuiltinResources } from '@prorobotech/openapi-k8s-toolkit'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store/store'
import { setCluster } from 'store/cluster/cluster/cluster'
import { Styled } from './styled'

export const ListInsideClusterAndNs: FC = () => {
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [selectedCluster, setSelectedCluster] = useState<string>()
  const [selectedNamespace, setSelectedNamespace] = useState<string>()

  const namespacesData = useBuiltinResources({
    clusterName: selectedCluster || '',
    typeName: 'namespaces',
    limit: null,
    isEnabled: selectedCluster !== undefined,
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
      {selectedCluster && namespacesData.isPending && <Spin />}
      {selectedCluster && namespacesData.error && (
        <Alert message={`An error has occurred: ${namespacesData.error?.message} `} type="error" />
      )}
      {selectedCluster && selectedCluster.length > 0 && namespacesData.data && namespacesData.data.items.length > 0 && (
        <>
          <Typography.Text>Namespace</Typography.Text>
          <Spacer $space={8} $samespace />
          <Styled.FullWidthSelect
            placeholder="Choose namespace"
            options={namespacesData.data.items.map(ns => ({
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
