import React, { FC } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import {
  CreateCrdsForm,
  UpdateCrdsForm,
  BackLink,
  ManageableBreadcrumbs,
  ManageableSidebar,
  NavigationContainer,
} from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'
import { getFormsBackLink } from 'utils/getBacklink'
import { BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'
import { BaseTemplate } from 'templates'

type TFormCrdPageProps = {
  inside?: boolean
}

export const FormCrdPage: FC<TFormCrdPageProps> = ({ inside }) => {
  const { clusterName, syntheticProject, apiGroup, apiVersion, namespace, typeName, entryName } = useParams()
  const [searchParams] = useSearchParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  if (!typeName || !apiGroup || !apiVersion) {
    return null
  }

  const backLink = searchParams.get('backlink')?.startsWith('/') ? searchParams.get('backlink') : undefined

  const preparedBacklink = getFormsBackLink({
    backLink,
    clusterName,
    possibleProject,
    possibleInstance,
    baseprefix,
    namespacesMode: BASE_USE_NAMESPACE_NAV === 'true',
  })

  const sidebarId = `${getSidebarIdPrefix({ instance: !!syntheticProject, project: !!namespace, inside })}crd-form`
  const breadcrumbsId = `${getBreadcrumbsIdPrefix({
    instance: !!syntheticProject,
    project: !!namespace,
    inside,
  })}crd-form${entryName ? '-edit' : ''}`

  return (
    <BaseTemplate
      inside={inside}
      sidebar={
        <ManageableSidebar
          instanceName={possibleInstance}
          projectName={possibleProject}
          idToCompare={sidebarId}
          currentTags={[`${apiGroup}/${apiVersion}/${typeName}`]}
        />
      }
    >
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} inside={inside} />
        <BackLink
          to={preparedBacklink}
          title={`${entryName ? 'Update' : 'Create'} ${apiGroup}/${apiVersion}/${typeName}${
            entryName ? `/${entryName}` : ''
          }`}
        />
      </NavigationContainer>
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
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
      </ContentCard>
    </BaseTemplate>
  )
}
