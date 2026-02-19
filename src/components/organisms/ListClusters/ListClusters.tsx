import React, { FC } from 'react'
import { ClusterListTable } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { TABLE_PROPS } from 'constants/tableProps'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL,
  BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME,
  BASE_NAVIGATE_FROM_CLUSTERLIST,
} from 'constants/customizationApiGroupAndVersion'

export const ListClusters: FC = () => {
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)

  if (!clusterList) {
    return null
  }

  return (
    <ClusterListTable
      theme={theme}
      dataSource={clusterList}
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Api',
          dataIndex: 'api',
          key: 'api',
        },
        {
          title: 'Tenant',
          dataIndex: 'tenant',
          key: 'tenant',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
      ]}
      pathToNavigate={BASE_NAVIGATE_FROM_CLUSTERLIST}
      recordKeysForNavigation={['name']}
      tableProps={TABLE_PROPS}
      navigationSettings={{
        apiGroup: BASE_API_GROUP,
        apiVersion: BASE_API_VERSION,
        plural: BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_PLURAL,
        resourceName: BASE_CUSTOMIZATION_NAVIGATION_RESOURCE_NAME,
      }}
    />
  )
}
