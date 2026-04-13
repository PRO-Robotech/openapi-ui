import React, { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Spin, Alert } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { EnrichedTableProvider, useK8sSmartResource, TSingleResource, TJSON } from '@prorobotech/openapi-k8s-toolkit'
import { TABLE_PROPS } from 'constants/tableProps'
import {
  CURRENT_CLUSTER,
  CLUSTERLIST_API_RESOURCE_API_GROUP,
  CLUSTERLIST_API_RESOURCE_API_VERSION,
  CLUSTERLIST_API_RESOURCE_PLURAL,
} from 'constants/customizationApiGroupAndVersion'

export const ListClustersByResources: FC = () => {
  const location = useLocation()
  const params = useParams()
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const {
    data: dataItems,
    isLoading,
    error,
  } = useK8sSmartResource<{ items: TSingleResource[] }>({
    cluster: CURRENT_CLUSTER,
    apiGroup: CLUSTERLIST_API_RESOURCE_API_GROUP,
    apiVersion: CLUSTERLIST_API_RESOURCE_API_VERSION,
    plural: CLUSTERLIST_API_RESOURCE_PLURAL,
  })

  const replaceValuesPartsOfUrls = location.pathname
    .split('/')
    .reduce<Record<string, string | undefined>>((acc, value, index) => {
      acc[index.toString()] = value
      return acc
    }, {})

  return (
    <>
      {error && <Alert message={`An error has occurred: ${error} `} type="error" />}
      {isLoading && !dataItems && <Spin />}
      {!error && dataItems && (
        <EnrichedTableProvider
          customizationId={`stock-cluster-/${CLUSTERLIST_API_RESOURCE_API_GROUP}/${CLUSTERLIST_API_RESOURCE_API_VERSION}/${CLUSTERLIST_API_RESOURCE_PLURAL}`}
          tableMappingsReplaceValues={{
            cluster: params.cluster,
            projectName: params.projectName,
            instanceName: params.instanceName,
            namespace: params.namespace,
            syntheticProject: params.syntheticProject,
            entryType: params.entryType,
            apiGroup: params.apiGroup,
            apiVersion: params.apiVersion,
            plural: params.plural,
            name: params.name,
            apiExtensionVersion: params.apiExtensionVersion,
            crdName: params.crdName,
            ...replaceValuesPartsOfUrls,
          }}
          cluster={CURRENT_CLUSTER}
          theme={theme}
          baseprefix={baseprefix}
          dataItems={(dataItems.items as TJSON[] | undefined) || []}
          tableProps={{ ...TABLE_PROPS }}
          dataForControls={undefined}
          dataForControlsInternal={{
            onDeleteHandle: () => {
              return undefined
            },
          }}
          withoutControls
        />
      )}
    </>
  )
}
