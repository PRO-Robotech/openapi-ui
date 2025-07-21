import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  DynamicComponents,
  DynamicRendererWithProviders,
  TDynamicComponentsAppTypeMap,
  useDirectUnknownResource,
  TFactoryResponse,
  ContentCard,
} from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { BASE_API_GROUP, BASE_API_VERSION } from 'constants/customizationApiGroupAndVersion'
import { HEAD_FIRST_ROW, HEAD_SECOND_ROW, FOOTER_HEIGHT, NAV_HEIGHT } from 'constants/blocksSizes'
import '@xterm/xterm/css/xterm.css'

type TFactoryProps = {
  setSidebarTags: (tags: string[]) => void
}

export const Factory: FC<TFactoryProps> = ({ setSidebarTags }) => {
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const { key } = useParams()

  const [height, setHeight] = useState(0)

  useEffect(() => {
    const height = window.innerHeight - HEAD_FIRST_ROW - HEAD_SECOND_ROW - NAV_HEIGHT - FOOTER_HEIGHT
    setHeight(height)

    const handleResize = () => {
      setHeight(height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { data: factoryData } = useDirectUnknownResource<TFactoryResponse<TDynamicComponentsAppTypeMap>>({
    uri: `/api/clusters/${cluster}/k8s/apis/${BASE_API_GROUP}/${BASE_API_VERSION}/factories/`,
    refetchInterval: false,
    queryKey: ['factories', cluster || 'no-cluster'],
    isEnabled: cluster !== undefined,
  })

  const { spec } = factoryData?.items.find(({ spec }) => spec.key === key) ?? { spec: undefined }

  useEffect(() => {
    setSidebarTags(spec?.sidebarTags || [])
  }, [spec?.sidebarTags, setSidebarTags])

  if (!spec) {
    return null
  }

  if (spec.withScrollableMainContentCard) {
    return (
      <ContentCard flexGrow={1} displayFlex flexFlow="column" maxHeight={height}>
        <DynamicRendererWithProviders
          urlsToFetch={spec.urlsToFetch}
          theme={theme}
          items={spec.data}
          components={DynamicComponents}
        />
      </ContentCard>
    )
  }

  return (
    <DynamicRendererWithProviders
      urlsToFetch={spec.urlsToFetch}
      theme={theme}
      items={spec.data}
      components={DynamicComponents}
      key={key}
    />
  )
}
