import React, { FC } from 'react'
import { theme as antdtheme } from 'antd'
import { useLocation, useParams } from 'react-router-dom'
import { ManageableSidebarWithDataProvider } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
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

  return (
    <Styled.Container
      $isDark={theme === 'dark'}
      $colorInfoBg={token.colorInfoBg}
      $colorFillQuaternary={token.colorFillQuaternary}
      $colorPrimaryBorder={token.colorPrimaryBorder}
      $colorBorder={token.colorBorder}
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
