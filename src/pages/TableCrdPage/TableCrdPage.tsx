import React, { FC } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { TableCrdInfo, BackLink, ManageableBreadcrumbs, ManageableSidebar, NavigationContainer } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'
import { getTableCustomizationIdPrefix } from 'utils/getTableCustomizationIdPrefix'
import { getTablesBackLink } from 'utils/getBacklink'
import { BaseTemplate } from 'templates'
import { BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'

type TTableCrdPageProps = {
  inside?: boolean
}

export const TableCrdPage: FC<TTableCrdPageProps> = ({ inside }) => {
  const { clusterName, namespace, syntheticProject, apiGroup, apiVersion, apiExtensionVersion, crdName } = useParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const backlink = getTablesBackLink({
    clusterName,
    possibleProject,
    possibleInstance,
    namespace,
    baseprefix,
    inside,
    namespacesMode: BASE_USE_NAMESPACE_NAV === 'true',
  })

  const sidebarId = `${getSidebarIdPrefix({ instance: !!syntheticProject, project: !!namespace, inside })}crd-table`
  const breadcrumbsId = `${getBreadcrumbsIdPrefix({
    instance: !!syntheticProject,
    project: !!namespace,
    inside,
  })}crd-table`
  const tableCustomizationIdPrefix = getTableCustomizationIdPrefix({
    instance: !!syntheticProject,
    project: BASE_USE_NAMESPACE_NAV !== 'true' && !!namespace,
    namespace: !!namespace,
    inside,
  })

  return (
    <BaseTemplate
      inside={inside}
      sidebar={
        <ManageableSidebar
          instanceName={possibleInstance}
          projectName={possibleProject}
          idToCompare={sidebarId}
          currentTags={[`${apiGroup}/${apiVersion}/${crdName}`]}
        />
      }
    >
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} inside={inside} />
        <BackLink to={backlink} title={`${apiGroup}/${apiVersion}/${crdName}`} />
      </NavigationContainer>
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        {crdName && apiGroup && apiVersion && apiExtensionVersion && (
          <TableCrdInfo
            namespace={namespace}
            apiGroup={apiGroup}
            apiVersion={apiVersion}
            crdName={crdName}
            apiExtensionVersion={apiExtensionVersion}
            inside={inside}
            customizationIdPrefix={tableCustomizationIdPrefix}
          />
        )}
      </ContentCard>
    </BaseTemplate>
  )
}
