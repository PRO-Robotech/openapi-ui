import React, { FC } from 'react'
import { Col } from 'antd'
import { ContentCard, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import {
  CreateCrdsForm,
  UpdateCrdsForm,
  BackLink,
  ManageableBreadcrumbs,
  ManageableSidebar,
  RowFlexGrow,
  FlexCol,
} from 'components'
import { BaseTemplate } from 'templates'

type TFormCrdPageProps = {
  forcedTheme?: 'light' | 'dark'
  inside?: boolean
}

export const FormCrdPage: FC<TFormCrdPageProps> = ({ forcedTheme, inside }) => {
  const { clusterName, syntheticProject, apiGroup, apiVersion, namespace, typeName, entryName } = useParams()
  const [searchParams] = useSearchParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const customBacklink = possibleInstance
    ? `${baseprefix}/${clusterName}/${possibleInstance}/${possibleProject}/api-table/apps/v1/deployments`
    : `${baseprefix}/clusters/${clusterName}/projects/${possibleProject}`

  if (!typeName || !apiGroup || !apiVersion) {
    return null
  }

  const backLink = searchParams.get('backlink')?.startsWith('/') ? searchParams.get('backlink') : undefined

  return (
    <BaseTemplate forcedTheme={forcedTheme} inside={inside}>
      <ManageableBreadcrumbs inside={inside} />
      <Spacer $space={20} $samespace />
      <BackLink
        to={backLink || customBacklink}
        title={`${entryName ? 'Update' : 'Create'} ${apiGroup}/${apiVersion}/${typeName}${
          entryName ? `/${entryName}` : ''
        }`}
      />
      <Spacer $space={20} $samespace />
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <RowFlexGrow wrap={false}>
          <Col span="auto">
            <ManageableSidebar instanceName={possibleInstance} projectName={possibleProject} />
          </Col>
          <FlexCol flex="auto">
            {entryName ? (
              <UpdateCrdsForm
                namespace={namespace}
                apiGroup={apiGroup}
                apiVersion={apiVersion}
                typeName={typeName}
                entryName={entryName}
                backLink={backLink}
              />
            ) : (
              <CreateCrdsForm
                namespace={namespace}
                apiGroup={apiGroup}
                apiVersion={apiVersion}
                typeName={typeName}
                backLink={backLink}
              />
            )}
          </FlexCol>
        </RowFlexGrow>
      </ContentCard>
    </BaseTemplate>
  )
}
