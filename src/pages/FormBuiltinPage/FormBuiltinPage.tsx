import React, { FC } from 'react'
import { Col } from 'antd'
import { ContentCard, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import {
  CreateBuiltinForm,
  UpdateBuiltinForm,
  BackLink,
  ManageableBreadcrumbs,
  ManageableSidebar,
  RowFlexGrow,
  FlexCol,
} from 'components'
import { AFTER_BACKLINK_SPACE, AFTER_BREADCRUMBS_SPACE } from 'constants/blocksSizes'
import { BaseTemplate } from 'templates'

type TFormBuiltinPageProps = {
  forcedTheme?: 'light' | 'dark'
  inside?: boolean
}

export const FormBuiltinPage: FC<TFormBuiltinPageProps> = ({ forcedTheme, inside }) => {
  const { clusterName, syntheticProject, namespace, typeName, entryName } = useParams()
  const [searchParams] = useSearchParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const customBacklink = possibleInstance
    ? `${baseprefix}/${clusterName}/${possibleInstance}/${possibleProject}/api-table/apps/v1/deployments`
    : `${baseprefix}/clusters/${clusterName}/projects/${possibleProject}`

  if (!typeName) {
    return null
  }

  const backLink = searchParams.get('backlink')?.startsWith('/') ? searchParams.get('backlink') : undefined

  return (
    <BaseTemplate forcedTheme={forcedTheme} inside={inside}>
      <ManageableBreadcrumbs inside={inside} />
      <Spacer $space={AFTER_BREADCRUMBS_SPACE} $samespace />
      <BackLink
        to={backLink || customBacklink}
        title={`${entryName ? 'Update' : 'Create'} ${typeName}${entryName ? `/${entryName}` : ''}`}
      />
      <Spacer $space={AFTER_BACKLINK_SPACE} $samespace />
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <RowFlexGrow wrap={false}>
          <Col span="auto">
            <ManageableSidebar instanceName={possibleInstance} projectName={possibleProject} />
          </Col>
          <FlexCol flex="auto">
            {entryName ? (
              <UpdateBuiltinForm namespace={namespace} typeName={typeName} entryName={entryName} backLink={backLink} />
            ) : (
              <CreateBuiltinForm namespace={namespace} typeName={typeName} backLink={backLink} />
            )}
          </FlexCol>
        </RowFlexGrow>
      </ContentCard>
    </BaseTemplate>
  )
}
