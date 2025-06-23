import React, { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ManageableSidebarWithDataProvider } from '@prorobotech/openapi-k8s-toolkit'
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

  return (
    <Styled.Container>
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
