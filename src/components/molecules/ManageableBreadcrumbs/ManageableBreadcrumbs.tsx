import React, { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ManageableBreadcrumbsProvider } from '@prorobotech/openapi-k8s-toolkit'
import { BASE_API_GROUP, BASE_API_VERSION } from 'constants/customizationApiGroupAndVersion'

type TManageableBreadCrumbsProps = {
  idToCompare: string
  inside?: boolean
}

export const ManageableBreadcrumbs: FC<TManageableBreadCrumbsProps> = ({ idToCompare, inside }) => {
  const location = useLocation()
  const { pathname } = useLocation()
  const params = useParams()
  const cluster = params?.cluster || ''
  const namespace = params?.namespace || ''
  const syntheticProject = params?.syntheticProject || ''
  const apiGroup = params?.apiGroup || ''
  const apiVersion = params?.apiVersion || ''
  const plural = params?.plural || ''
  const name = params?.name || ''
  const apiExtensionVersion = params?.apiExtensionVersion || ''
  const crdName = params?.crdName || ''

  const replaceValuesPartsOfUrls = location.pathname
    .split('/')
    .reduce<Record<string, string | undefined>>((acc, value, index) => {
      acc[index.toString()] = value
      return acc
    }, {})

  return (
    <ManageableBreadcrumbsProvider
      idToCompare={idToCompare}
      cluster={cluster}
      apiGroup={BASE_API_GROUP}
      apiVersion={BASE_API_VERSION}
      plural={inside ? 'breadcrumbsinsides' : 'breadcrumbs'}
      isEnabled={cluster !== undefined}
      replaceValues={{
        cluster,
        projectName: '',
        instanceName: '',
        namespace,
        syntheticProject,
        entryType: '',
        apiGroup,
        apiVersion,
        plural,
        name,
        apiExtensionVersion,
        crdName,
        ...replaceValuesPartsOfUrls,
      }}
      pathname={pathname}
    />
  )
}
