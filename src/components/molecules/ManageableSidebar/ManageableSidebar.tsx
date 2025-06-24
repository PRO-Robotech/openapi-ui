import React, { FC, useState, useEffect } from 'react'
import { theme as antdtheme } from 'antd'
import { useLocation, useParams } from 'react-router-dom'
import { ManageableSidebarWithDataProvider } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import {
  HEAD_FIRST_ROW,
  HEAD_SECOND_ROW,
  HEAD_BORDER_BOTTOM,
  FOOTER_HEIGHT,
  MAIN_CONTENT_VERTICAL_PADDING,
  BREADCRUMBS_HEIGHT,
  AFTER_BREADCRUMBS_SPACE,
  BACKLINK_HEIGHT,
  BACKLINK_MARGIN_TOP,
  AFTER_BACKLINK_SPACE,
  CONTENT_CARD_PADDING,
} from 'constants/blocksSizes'
import { BASE_API_GROUP, BASE_API_VERSION } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

type TManageableSidebarProps = {
  instanceName?: string
  projectName?: string
}

export const ManageableSidebar: FC<TManageableSidebarProps> = ({ projectName, instanceName }) => {
  const { pathname } = useLocation()
  const params = useParams()
  const clusterName = params?.clusterName || ''
  const namespace = params?.namespace || ''
  const syntheticProject = params?.syntheticProject || ''
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const { token } = antdtheme.useToken()

  const [height, setHeight] = useState(0)

  useEffect(() => {
    const height =
      window.innerHeight -
      HEAD_FIRST_ROW -
      HEAD_SECOND_ROW -
      HEAD_BORDER_BOTTOM -
      MAIN_CONTENT_VERTICAL_PADDING * 2 -
      BREADCRUMBS_HEIGHT -
      AFTER_BREADCRUMBS_SPACE -
      BACKLINK_HEIGHT -
      BACKLINK_MARGIN_TOP -
      AFTER_BACKLINK_SPACE -
      CONTENT_CARD_PADDING * 2 -
      FOOTER_HEIGHT
    setHeight(height)

    const handleResize = () => {
      setHeight(height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Styled.Container
      $isDark={theme === 'dark'}
      $colorInfoBg={token.colorInfoBg}
      $colorFillQuaternary={token.colorFillQuaternary}
      $colorPrimaryHover={token.colorPrimaryHover}
      $colorBorder={token.colorBorder}
      $maxHeight={height}
    >
      <ManageableSidebarWithDataProvider
        uri={`/api/clusters/${clusterName}/k8s/apis/${BASE_API_GROUP}/${BASE_API_VERSION}/sidebars/`}
        refetchInterval={5000}
        isEnabled={clusterName !== undefined}
        replaceValues={{
          clusterName,
          projectName,
          instanceName,
          namespace,
          syntheticProject,
        }}
        pathname={pathname}
        noMarginTop
      />
    </Styled.Container>
  )
}
