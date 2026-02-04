import React, { FC, useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ManageableBreadcrumbsProvider } from '@prorobotech/openapi-k8s-toolkit'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID,
} from 'constants/customizationApiGroupAndVersion'

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

  const fallbackIdToCompare = useMemo(() => {
    const isNamespaced = Boolean(namespace)
    const isInside = pathname.includes('/inside/')

    if (isInside) {
      return undefined
    }

    if (pathname.includes('/search')) {
      return `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-search-page`
    }

    if (pathname.includes('/api-table/')) {
      return isNamespaced
        ? `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-table-namespaced-api`
        : `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-table-clusterscoped-api`
    }

    if (pathname.includes('/builtin-table/')) {
      return isNamespaced
        ? `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-table-namespaced-builtin`
        : `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-table-clusterscoped-builtin`
    }

    if (pathname.includes('/forms/apis/')) {
      if (isNamespaced) {
        return name
          ? `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-form-namespaced-api-edit`
          : `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-form-namespaced-api`
      }
      return name
        ? `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-form-clusterscoped-api-edit`
        : `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-form-clusterscoped-api`
    }

    if (pathname.includes('/forms/builtin/')) {
      if (isNamespaced) {
        return name
          ? `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-form-namespaced-builtin-edit`
          : `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-form-namespaced-builtin`
      }
      return name
        ? `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-form-clusterscoped-builtin-edit`
        : `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-form-clusterscoped-builtin`
    }

    if (pathname.includes('/factory/')) {
      const parts = pathname.split('/').filter(Boolean)
      const factoryIndex = parts.indexOf('factory')
      const afterKey = factoryIndex >= 0 ? parts.slice(factoryIndex + 2) : []
      const isApiFactory = afterKey.length >= 4
      const isBuiltinFactory = afterKey.length === 3

      if (isApiFactory) {
        return isNamespaced
          ? `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-factory-namespaced-api`
          : `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-factory-clusterscoped-api`
      }
      if (isBuiltinFactory) {
        return isNamespaced
          ? `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-factory-namespaced-builtin`
          : `${CUSTOMIZATION_BREADCRUMBS_FALLBACK_ID}-factory-clusterscoped-builtin`
      }

      return undefined
    }

    return undefined
  }, [name, namespace, pathname])

  return (
    <ManageableBreadcrumbsProvider
      idToCompare={idToCompare}
      fallbackIdToCompare={fallbackIdToCompare}
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
