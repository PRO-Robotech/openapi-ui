import React, { FC } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { TableApiBuiltin, BackLink, ManageableBreadcrumbs, ManageableSidebar, NavigationContainer } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'
import { getTableCustomizationIdPrefix } from 'utils/getTableCustomizationIdPrefix'
import { getTablesBackLink } from 'utils/getBacklink'
import { BaseTemplate } from 'templates'
import { BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'

type TTableBuiltinPageProps = {
  inside?: boolean
}

export const TableBuiltinPage: FC<TTableBuiltinPageProps> = ({ inside }) => {
  const { clusterName, namespace, syntheticProject, typeName } = useParams()
  const [searchParams] = useSearchParams()
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

  const sidebarId = `${getSidebarIdPrefix({ instance: !!syntheticProject, project: !!namespace, inside })}builtin-table`
  const breadcrumbsId = `${getBreadcrumbsIdPrefix({
    instance: !!syntheticProject,
    project: !!namespace,
    inside,
  })}builtin-table`
  const tableCustomizationIdPrefix = getTableCustomizationIdPrefix({
    instance: !!syntheticProject,
    project: BASE_USE_NAMESPACE_NAV !== 'true' && !!namespace,
    namespace: !!namespace,
    inside,
  })

  const limitSp = searchParams.get('limit')

  return (
    <BaseTemplate
      inside={inside}
      sidebar={
        <ManageableSidebar
          instanceName={possibleInstance}
          projectName={possibleProject}
          idToCompare={sidebarId}
          currentTags={[`${typeName}`]}
        />
      }
    >
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} inside={inside} />
        <BackLink to={backlink} title={typeName} />
      </NavigationContainer>
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        {typeName && (
          <TableApiBuiltin
            resourceType="builtin"
            apiVersion="v1"
            key={`${namespace}-${typeName}`}
            namespace={namespace}
            typeName={typeName}
            limit={limitSp && limitSp.length > 0 ? Number(limitSp) : undefined}
            inside={inside}
            customizationIdPrefix={tableCustomizationIdPrefix}
          />
        )}
      </ContentCard>
    </BaseTemplate>
  )
}
