// import React, { FC, useState, useEffect } from 'react'
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  DynamicComponents,
  DynamicRendererWithProviders,
  TDynamicComponentsAppTypeMap,
  useK8sSmartResource,
  TFactoryResponse,
  // ContentCard,
} from '@prorobotech/openapi-k8s-toolkit'
import { Result } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  NODE_TERMINAL_DEFAULT_PROFILE,
} from 'constants/customizationApiGroupAndVersion'
// import { HEAD_FIRST_ROW, HEAD_SECOND_ROW, FOOTER_HEIGHT, NAV_HEIGHT } from 'constants/blocksSizes'
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

  // const [height, setHeight] = useState(0)

  // useEffect(() => {
  //   const height = window.innerHeight - HEAD_FIRST_ROW - HEAD_SECOND_ROW - NAV_HEIGHT - FOOTER_HEIGHT
  //   setHeight(height)

  //   const handleResize = () => {
  //     setHeight(height)
  //   }

  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

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

  useEffect(() => {
    setSidebarTags(spec?.sidebarTags || [])
    setForcedSidebarId(spec?.forcedSidebarId)
  }, [spec?.sidebarTags, spec?.forcedSidebarId, setSidebarTags, setForcedSidebarId])

  if (isFactoryLoading) {
    return null
  }

  if (!spec) {
    return (
      <ContentCardMain>
        <Styled.NotFoundContainer>
          <Result
            status="404"
            title="Factory Not Found"
            subTitle={`No factory is configured for key "${key ?? ''}".`}
            style={{ padding: 0 }}
          />
        </Styled.NotFoundContainer>
      </ContentCardMain>
    )
  }

  if (spec.withScrollableMainContentCard) {
    // <ContentCard flexGrow={1} displayFlex flexFlow="column" maxHeight={height}>
    return (
      <ContentCardMain>
        <DynamicRendererWithProviders
          urlsToFetch={spec.urlsToFetch ?? []}
          theme={theme}
          nodeTerminalDefaultProfile={NODE_TERMINAL_DEFAULT_PROFILE}
          items={spec.data}
          components={DynamicComponents}
        />
      </ContentCardMain>
    )
    // </ContentCard>
  }

  return (
    <DynamicRendererWithProviders
      urlsToFetch={spec.urlsToFetch ?? []}
      theme={theme}
      nodeTerminalDefaultProfile={NODE_TERMINAL_DEFAULT_PROFILE}
      items={spec.data}
      components={DynamicComponents}
      key={key}
    />
  )
}
