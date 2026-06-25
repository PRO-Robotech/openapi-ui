import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  DynamicComponents,
  DynamicRendererWithProviders,
  TDynamicComponentsAppTypeMap,
  useK8sSmartResource,
  TFactoryResponse,
  ErrorBoundary,
  // ContentCard,
} from '@prorobotech/openapi-k8s-toolkit'
import { Result, Spin } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  NODE_TERMINAL_DEFAULT_PROFILE,
  RAW_NAMESPACE_ALL_LABEL,
  RAW_NAMESPACE_CHOOSE_PLACEHOLDER,
  RAW_NAMESPACE_LABEL,
  RAW_NAMESPACE_PLACEHOLDER,
  RAW_NAMESPACE_SELECT_PLACEHOLDER,
} from 'constants/customizationApiGroupAndVersion'
import '@xterm/xterm/css/xterm.css'
import { ContentCardMain } from 'components/atoms'
import { Styled } from './styled'

type TFactoryProps = {
  setSidebarTags: (tags: string[]) => void
  setForcedSidebarId: (id?: string) => void
}

export const Factory: FC<TFactoryProps> = ({ setSidebarTags, setForcedSidebarId }) => {
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const clusterEnabled = Boolean(cluster)
  const { key } = useParams()
  const [canShowNotFound, setCanShowNotFound] = useState(false)
  const namespaceLabels = {
    ...(RAW_NAMESPACE_LABEL ? { label: RAW_NAMESPACE_LABEL } : {}),
    ...(RAW_NAMESPACE_PLACEHOLDER ? { placeholder: RAW_NAMESPACE_PLACEHOLDER } : {}),
    ...(RAW_NAMESPACE_ALL_LABEL ? { allLabel: RAW_NAMESPACE_ALL_LABEL } : {}),
    ...(RAW_NAMESPACE_CHOOSE_PLACEHOLDER ? { choosePlaceholder: RAW_NAMESPACE_CHOOSE_PLACEHOLDER } : {}),
    ...(RAW_NAMESPACE_SELECT_PLACEHOLDER ? { selectPlaceholder: RAW_NAMESPACE_SELECT_PLACEHOLDER } : {}),
  }
  const hasNamespaceLabels = Object.keys(namespaceLabels).length > 0

  const { data: factoryData, isLoading: isFactoryLoading } = useK8sSmartResource<
    TFactoryResponse<TDynamicComponentsAppTypeMap>
  >({
    cluster: cluster || '',
    apiGroup: BASE_API_GROUP,
    apiVersion: BASE_API_VERSION,
    plural: 'factories',
    isEnabled: clusterEnabled,
  })

  const { spec } = factoryData?.items.find(({ spec }) => spec.key === key) ?? { spec: undefined }
  const hasFactoryData = Array.isArray(factoryData?.items)

  useEffect(() => {
    if (isFactoryLoading || !hasFactoryData || spec) {
      setCanShowNotFound(false)
      return undefined
    }

    const timer = window.setTimeout(() => {
      setCanShowNotFound(true)
    }, 400)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isFactoryLoading, hasFactoryData, spec, key])

  useEffect(() => {
    setSidebarTags(spec?.sidebarTags || [])
    setForcedSidebarId(spec?.forcedSidebarId)
  }, [spec?.sidebarTags, spec?.forcedSidebarId, setSidebarTags, setForcedSidebarId])

  if (isFactoryLoading || !hasFactoryData || (!spec && !canShowNotFound)) {
    return (
      <Styled.LoadingNotFoundContainer>
        <Spin />
      </Styled.LoadingNotFoundContainer>
    )
  }

  if (!spec) {
    return (
      <ContentCardMain>
        <Styled.LoadingNotFoundContainer $insideContentCard>
          <Result
            status="404"
            title="Factory Not Found"
            subTitle={`No factory is configured for key "${key ?? ''}".`}
            style={{ padding: 0 }}
          />
        </Styled.LoadingNotFoundContainer>
      </ContentCardMain>
    )
  }

  if (spec.withScrollableMainContentCard) {
    // <ContentCard flexGrow={1} displayFlex flexFlow="column" maxHeight={height}>
    return (
      <ErrorBoundary>
        <ContentCardMain>
          <DynamicRendererWithProviders
            urlsToFetch={spec.urlsToFetch ?? []}
            theme={theme}
            nodeTerminalDefaultProfile={NODE_TERMINAL_DEFAULT_PROFILE}
            namespaceLabels={hasNamespaceLabels ? namespaceLabels : undefined}
            items={spec.data}
            components={DynamicComponents}
            effectiveReqIndexes={spec.effectiveReqIndexes}
            effectiveItemsPath={spec.effectiveItemsPath}
          />
        </ContentCardMain>
      </ErrorBoundary>
    )
    // </ContentCard>
  }

  return (
    <ErrorBoundary>
      <DynamicRendererWithProviders
        urlsToFetch={spec.urlsToFetch ?? []}
        theme={theme}
        nodeTerminalDefaultProfile={NODE_TERMINAL_DEFAULT_PROFILE}
        namespaceLabels={hasNamespaceLabels ? namespaceLabels : undefined}
        items={spec.data}
        components={DynamicComponents}
        effectiveReqIndexes={spec.effectiveReqIndexes}
        key={key}
      />
    </ErrorBoundary>
  )
}
