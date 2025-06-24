import React, { FC } from 'react'
import { Col } from 'antd'
import { ContentCard, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { TableNonCrdInfo, BackLink, ManageableBreadcrumbs, ManageableSidebar, RowFlexGrow, FlexCol } from 'components'
import { BaseTemplate } from 'templates'
import {
  BASE_INSTANCES_API_GROUP,
  BASE_INSTANCES_VERSION,
  BASE_INSTANCES_RESOURCE_NAME,
} from 'constants/customizationApiGroupAndVersion'
import { AFTER_BACKLINK_SPACE, AFTER_BREADCRUMBS_SPACE } from 'constants/blocksSizes'

type TTableApiPageProps = {
  forcedTheme?: 'light' | 'dark'
  inside?: boolean
}

export const TableApiPage: FC<TTableApiPageProps> = ({ forcedTheme, inside }) => {
  const { clusterName, namespace, syntheticProject, apiGroup, apiVersion, typeName } = useParams()
  const [searchParams] = useSearchParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const customBacklink = possibleInstance
    ? // ? `${baseprefix}/${clusterName}/${possibleInstance}/${possibleProject}/api-table/apps/v1/deployments`
      `${baseprefix}/${clusterName}/${possibleProject}/api-table/${BASE_INSTANCES_API_GROUP}/${BASE_INSTANCES_VERSION}/${BASE_INSTANCES_RESOURCE_NAME}`
    : `${baseprefix}/clusters/${clusterName}/projects/${possibleProject}`

  const customBacklinkWithInside = inside
    ? `${baseprefix}/inside/${clusterName}${namespace ? `/${namespace}` : ''}/apis`
    : customBacklink

  const clustererBacklink = inside ? customBacklinkWithInside : `${baseprefix}/clusters`

  // const instancesBacklink =
  //   apiGroup === 'apps' && apiVersion === 'v1' && typeName === 'deployments'
  //     ? `${baseprefix}/${clusterName}/${possibleProject}/api-table/${BASE_INSTANCES_API_GROUP}/${BASE_INSTANCES_VERSION}/${BASE_INSTANCES_RESOURCE_NAME}`
  //     : undefined

  // const nonInstanceBackLink = namespace ? customBacklink : clustererBacklink

  return (
    <BaseTemplate forcedTheme={forcedTheme} inside={inside}>
      <ManageableBreadcrumbs inside={inside} />
      <Spacer $space={AFTER_BREADCRUMBS_SPACE} $samespace />
      <BackLink
        to={namespace ? customBacklinkWithInside : clustererBacklink}
        title={`${apiGroup}/${apiVersion}/${typeName}`}
      />
      <Spacer $space={AFTER_BACKLINK_SPACE} $samespace />
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <RowFlexGrow wrap={false}>
          <Col span="auto">
            <ManageableSidebar instanceName={possibleInstance} projectName={possibleProject} />
          </Col>
          <FlexCol flex="auto">
            {typeName && apiGroup && apiVersion && (
              <TableNonCrdInfo
                namespace={namespace}
                apiGroup={apiGroup}
                apiVersion={apiVersion}
                typeName={typeName}
                limit={searchParams.get('limit')}
                inside={inside}
              />
            )}
          </FlexCol>
        </RowFlexGrow>
      </ContentCard>
    </BaseTemplate>
  )
}
