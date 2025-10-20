import React, { FC, useState, useEffect } from 'react'
import { Spin, Alert } from 'antd'
import { usePermissions, checkIfApiInstanceNamespaceScoped, useCrdData } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { ResourceInfo } from './molecules'

type TTableCrdInfoProps = {
  namespace?: string
  apiGroup: string
  apiVersion: string
  apiExtensionVersion: string
  crdName: string
  inside?: boolean
  customizationIdPrefix: string
}

export const TableCrdInfo: FC<TTableCrdInfoProps> = ({
  namespace,
  apiGroup,
  apiVersion,
  apiExtensionVersion,
  crdName,
  inside,
  customizationIdPrefix,
}) => {
  const cluster = useSelector((state: RootState) => state.cluster.cluster)

  const [isNamespaced, setIsNamespaced] = useState<boolean>()

  const { isPending, error, data } = useCrdData({
    clusterName: cluster,
    crdName,
    apiExtensionVersion,
  })

  useEffect(() => {
    if (data && !isPending && !error) {
      checkIfApiInstanceNamespaceScoped({
        apiGroup,
        apiVersion,
        typeName: data.spec.names.plural,
        clusterName: cluster,
      }).then(({ isNamespaceScoped }) => {
        if (isNamespaceScoped) {
          setIsNamespaced(true)
        }
      })
    }
  }, [cluster, data, isPending, error, apiGroup, apiVersion])

  const createPermission = usePermissions({
    group: apiGroup,
    resource: data ? data.spec.names.singular : '',
    namespace: '',
    clusterName: cluster,
    verb: 'create',
    refetchInterval: false,
  })

  const updatePermission = usePermissions({
    group: apiGroup,
    resource: data ? data.spec.names.singular : '',
    namespace: '',
    clusterName: cluster,
    verb: 'update',
    refetchInterval: false,
  })

  const deletePermission = usePermissions({
    group: apiGroup,
    resource: data ? data.spec.names.singular : '',
    namespace: '',
    clusterName: cluster,
    verb: 'delete',
    refetchInterval: false,
  })

  return (
    <>
      {isPending && <Spin />}
      {error && <Alert message={`An error has occurred: ${error?.message} `} type="error" />}
      {!error && data && data.spec && (
        <ResourceInfo
          clusterName={cluster}
          namespace={namespace}
          crdName={crdName}
          crdPluralName={data.spec.names.plural}
          apiGroup={data.spec.group}
          apiVersion={apiVersion}
          apiExtensionVersion={apiExtensionVersion}
          crdAdditionalPrinterColumns={
            data.spec.versions.find(({ name }) => name === apiVersion)?.additionalPrinterColumns
          }
          permissions={{
            canCreate: isNamespaced ? true : createPermission.data?.status.allowed,
            canUpdate: isNamespaced ? true : updatePermission.data?.status.allowed,
            canDelete: isNamespaced ? true : deletePermission.data?.status.allowed,
          }}
          inside={inside}
          customizationIdPrefix={customizationIdPrefix}
        />
      )}
    </>
  )
}
