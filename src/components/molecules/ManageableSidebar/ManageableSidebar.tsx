/* eslint-disable no-nested-ternary */
import React, { FC, useState, useEffect } from 'react'
import { theme as antdtheme } from 'antd'
import { useLocation, useParams } from 'react-router-dom'
import { ManageableSidebarProvider, useK8sSmartResource } from '@prorobotech/openapi-k8s-toolkit'
import type { TSingleResource } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { HEAD_FIRST_ROW, SELECTOR_CLUSTER_NEW_HEIGHT } from 'constants/blocksSizes'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  BASE_INSTANCES_API_GROUP,
  BASE_INSTANCES_API_VERSION,
  BASE_INSTANCES_PLURAL,
  BASE_PROJECTS_API_GROUP,
  BASE_PROJECTS_API_VERSION,
  BASE_PROJECTS_PLURAL,
  BASE_USE_NAMESPACE_NAV,
  BASE_USE_NEW_NAVIGATION,
  CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
  CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
  CUSTOM_NAMESPACE_API_RESOURCE_PLURAL,
  CUSTOMIZATION_SIDEBAR_FALLBACK_ID,
} from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

type TManageableSidebarProps = {
  instanceName?: string
  projectName?: string
  idToCompare: string
  currentTags?: string[]
}

export const ManageableSidebar: FC<TManageableSidebarProps> = ({
  projectName,
  instanceName,
  idToCompare,
  currentTags,
}) => {
  const location = useLocation()
  const { pathname, search } = location
  const params = useParams()
  const cluster = params?.cluster || ''
  const namespace = params?.namespace || ''
  const syntheticProject = params?.syntheticProject || ''
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const { token } = antdtheme.useToken()
  const isNamespaceNavigation = BASE_USE_NAMESPACE_NAV === 'true'
  const req0Name = syntheticProject || namespace

  const isCustomNamespaceResource =
    CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP.length > 0 &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION.length > 0 &&
    CUSTOM_NAMESPACE_API_RESOURCE_PLURAL &&
    typeof CUSTOM_NAMESPACE_API_RESOURCE_PLURAL === 'string' &&
    CUSTOM_NAMESPACE_API_RESOURCE_PLURAL.length > 0

  const { data: projectData } = useK8sSmartResource<{ items: TSingleResource[] }>({
    cluster,
    apiGroup: BASE_PROJECTS_API_GROUP,
    apiVersion: BASE_PROJECTS_API_VERSION,
    plural: BASE_PROJECTS_PLURAL,
    fieldSelector: `metadata.name=${req0Name}`,
    isEnabled: Boolean(cluster && req0Name && !isNamespaceNavigation),
  })

  const { data: namespaceBuiltinData } = useK8sSmartResource<{ items: TSingleResource[] }>({
    cluster,
    apiVersion: 'v1',
    plural: 'namespaces',
    fieldSelector: `metadata.name=${req0Name}`,
    isEnabled: Boolean(cluster && req0Name && isNamespaceNavigation && !isCustomNamespaceResource),
  })

  const { data: namespaceCustomData } = useK8sSmartResource<{ items: TSingleResource[] }>({
    cluster,
    apiGroup: CUSTOM_NAMESPACE_API_RESOURCE_API_GROUP,
    apiVersion: CUSTOM_NAMESPACE_API_RESOURCE_API_VERSION,
    plural: CUSTOM_NAMESPACE_API_RESOURCE_PLURAL,
    fieldSelector: `metadata.name=${req0Name}`,
    isEnabled: Boolean(cluster && req0Name && isNamespaceNavigation && isCustomNamespaceResource),
  })

  const { data: instanceData } = useK8sSmartResource<{ items: TSingleResource[] }>({
    cluster,
    apiGroup: BASE_INSTANCES_API_GROUP,
    apiVersion: BASE_INSTANCES_API_VERSION,
    plural: BASE_INSTANCES_PLURAL,
    namespace: syntheticProject || undefined,
    fieldSelector: `metadata.name=${namespace}`,
    isEnabled: Boolean(cluster && namespace && syntheticProject),
  })

  const currentReq0Resource = isNamespaceNavigation
    ? isCustomNamespaceResource
      ? namespaceCustomData?.items?.[0]
      : namespaceBuiltinData?.items?.[0]
    : projectData?.items?.[0]
  const currentInstanceResource = instanceData?.items?.[0]

  const [height, setHeight] = useState(0)

  useEffect(() => {
    const height = window.innerHeight - HEAD_FIRST_ROW - 2 - (BASE_USE_NEW_NAVIGATION ? SELECTOR_CLUSTER_NEW_HEIGHT : 0)
    setHeight(height)

    const handleResize = () => {
      setHeight(height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const replaceValuesPartsOfUrls = location.pathname
    .split('/')
    .reduce<Record<string, string | undefined>>((acc, value, index) => {
      acc[index.toString()] = value
      return acc
    }, {})

  return (
    <Styled.Container
      $isDark={theme === 'dark'}
      $colorInfoBg={token.colorInfoBg}
      $colorBgContainer={token.colorBgContainer}
      $colorFillQuaternary={token.colorFillQuaternary}
      $colorPrimaryHover={token.colorPrimaryHover}
      $colorBorder={token.colorBorder}
      $maxHeight={height}
    >
      <ManageableSidebarProvider
        cluster={cluster}
        apiGroup={BASE_API_GROUP}
        apiVersion={BASE_API_VERSION}
        plural="sidebars"
        isEnabled={cluster !== undefined}
        replaceValues={{
          cluster,
          projectName,
          instanceName,
          namespace,
          syntheticProject,
          ...replaceValuesPartsOfUrls,
        }}
        pathname={pathname}
        searchParams={search}
        idToCompare={idToCompare}
        fallbackIdToCompare={
          namespace ? `${CUSTOMIZATION_SIDEBAR_FALLBACK_ID}-namespaced` : CUSTOMIZATION_SIDEBAR_FALLBACK_ID
        }
        multiQueryData={{
          req0: currentReq0Resource || (req0Name ? { metadata: { name: req0Name } } : undefined),
          req1:
            currentInstanceResource ||
            (syntheticProject && namespace
              ? {
                  metadata: {
                    name: namespace,
                    namespace: syntheticProject,
                  },
                }
              : undefined),
        }}
        currentTags={currentTags}
        noMarginTop
      />
    </Styled.Container>
  )
}
