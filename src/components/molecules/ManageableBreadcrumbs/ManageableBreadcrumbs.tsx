import React, { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ManageableBreadcrumbsWithDataProvider } from '@prorobotech/openapi-k8s-toolkit'
import { BASE_API_GROUP, BASE_API_VERSION } from 'constants/customizationApiGroupAndVersion'

type TManageableBreadCrumbsProps = {
  idToCompare: string
  inside?: boolean
}

export const ManageableBreadcrumbs: FC<TManageableBreadCrumbsProps> = ({ idToCompare, inside }) => {
  const location = useLocation()
  const { pathname } = useLocation()
  const params = useParams()
  const clusterName = params?.clusterName || ''
  const namespace = params?.namespace || ''
  const syntheticProject = params?.syntheticProject || ''
  const apiGroup = params?.apiGroup || ''
  const apiVersion = params?.apiVersion || ''
  const typeName = params?.typeName || ''
  const entryName = params?.entryName || ''
  const apiExtensionVersion = params?.apiExtensionVersion || ''
  const crdName = params?.crdName || ''

  const replaceValuesPartsOfUrls = location.pathname
    .split('/')
    .reduce<Record<string, string | undefined>>((acc, value, index) => {
      acc[index.toString()] = value
      return acc
    }, {})

  return (
    <ManageableBreadcrumbsWithDataProvider
      idToCompare={idToCompare}
      wsUrl={`/api/clusters/${clusterName}/openapi-bff-ws/listThenWatch/listWatchWs`}
      apiGroup={BASE_API_GROUP}
      apiVersion={BASE_API_VERSION}
      plural={inside ? 'breadcrumbsinsides' : 'breadcrumbs'}
      isEnabled={clusterName !== undefined}
      replaceValues={{
        clusterName,
        projectName: '',
        instanceName: '',
        namespace,
        syntheticProject,
        entryType: '',
        apiGroup,
        apiVersion,
        typeName,
        entryName,
        apiExtensionVersion,
        crdName,
        ...replaceValuesPartsOfUrls,
      }}
      pathname={pathname}
    />
  )
}
