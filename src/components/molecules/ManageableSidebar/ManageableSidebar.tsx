import React, { FC, useState, useEffect } from 'react'
import { theme as antdtheme } from 'antd'
import { useLocation, useParams } from 'react-router-dom'
import { ManageableSidebarProvider } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { HEAD_FIRST_ROW, SELECTOR_CLUSTER_NEW_HEIGHT } from 'constants/blocksSizes'
import {
  BASE_API_GROUP,
  BASE_API_VERSION,
  BASE_USE_NEW_NAVIGATION,
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
  const { pathname } = useLocation()
  const params = useParams()
  const cluster = params?.cluster || ''
  const namespace = params?.namespace || ''
  const syntheticProject = params?.syntheticProject || ''
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const { token } = antdtheme.useToken()

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
        idToCompare={idToCompare}
        fallbackIdToCompare={
          namespace ? `${CUSTOMIZATION_SIDEBAR_FALLBACK_ID}-namespaced` : CUSTOMIZATION_SIDEBAR_FALLBACK_ID
        }
        currentTags={currentTags}
        noMarginTop
      />
    </Styled.Container>
  )
}
