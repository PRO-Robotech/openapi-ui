import React, { FC, useState, useEffect } from 'react'
import { Spin, Alert } from 'antd'
import {
  usePermissions,
  checkIfApiInstanceNamespaceScoped,
  // useCrdData,
  useK8sSmartResource,
  TCRD,
} from '@prorobotech/openapi-k8s-toolkit'
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

  const {
    data: dataArr,
    isLoading: isPending,
    error,
  } = useK8sSmartResource<{
    items: TCRD[]
  }>({
    cluster,
    apiGroup: 'apiextensions.k8s.io',
    apiVersion: apiExtensionVersion,
    plural: 'customresourcedefinitions',
    fieldSelector: `metadata.name=${crdName}`,
  })

  const data = dataArr?.items && dataArr.items.length > 0 ? dataArr.items[0] : undefined

  useEffect(() => {
    if (data && !isPending && !error) {
      checkIfApiInstanceNamespaceScoped({
        apiGroup,
        apiVersion,
        plural: data.spec.names.plural,
        cluster,
      }).then(({ isNamespaceScoped }) => {
        if (isNamespaceScoped) {
          setIsNamespaced(true)
        }
      })
    }
  }, [cluster, data, isPending, error, apiGroup, apiVersion])

  const createPermission = usePermissions({
    apiGroup,
    plural: data ? data.spec.names.singular : '',
    namespace: '',
    cluster,
    verb: 'create',
    refetchInterval: false,
  })

  const updatePermission = usePermissions({
    apiGroup,
    plural: data ? data.spec.names.singular : '',
    namespace: '',
    cluster,
    verb: 'update',
    refetchInterval: false,
  })

  const deletePermission = usePermissions({
    apiGroup,
    plural: data ? data.spec.names.singular : '',
    namespace: '',
    cluster,
    verb: 'delete',
    refetchInterval: false,
  })

  return (
    <>
      {isPending && <Spin />}
      {error && (
        <Alert message={`An error has occurred: ${typeof error === 'string' ? error : error?.message} `} type="error" />
      )}
      {!error && data && data.spec && (
        <ResourceInfo
          cluster={cluster}
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
