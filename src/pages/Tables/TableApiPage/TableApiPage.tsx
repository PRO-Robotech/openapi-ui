import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { TableApiBuiltin } from 'components'
import { getTableCustomizationIdPrefix } from 'utils/getTableCustomizationIdPrefix'
import { getTablesBackLink } from 'utils/getBacklink'
import { TChromeCtx } from 'templates'
import {
  BASE_USE_NAMESPACE_NAV,
  BASE_PROJECTS_API_GROUP,
  BASE_PROJECTS_VERSION,
  BASE_PROJECTS_RESOURCE_NAME,
} from 'constants/customizationApiGroupAndVersion'

type TTableApiPageProps = {
  inside?: boolean
}

export const TableApiPage: FC<TTableApiPageProps> = ({ inside }) => {
  const { clusterName, namespace, syntheticProject, apiGroup, apiVersion, typeName } = useParams()
  const [searchParams] = useSearchParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const isProjectList =
    !namespace &&
    apiGroup === BASE_PROJECTS_API_GROUP &&
    apiVersion === BASE_PROJECTS_VERSION &&
    typeName === BASE_PROJECTS_RESOURCE_NAME
  const breadcrumbsIdProjectList = 'projects-list'

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const preparedBacklink = getTablesBackLink({
    clusterName,
    possibleProject,
    possibleInstance,
    namespace,
    baseprefix,
    inside,
    namespacesMode: BASE_USE_NAMESPACE_NAV === 'true',
  })

  const { setCurrentTags, setSidebarSuffix, setBreadcrumbsSuffix, setBacklinkTo, setBacklinkTitle } =
    useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix('builtin-table')
    setBreadcrumbsSuffix(isProjectList ? breadcrumbsIdProjectList : 'api-table')
    setCurrentTags([`${typeName}`])
    setBacklinkTo(preparedBacklink)
    setBacklinkTitle(undefined)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setBacklinkTo(undefined)
      setBacklinkTitle(`${apiGroup}/${apiVersion}/${typeName}`)
    }
  }, [
    typeName,
    isProjectList,
    breadcrumbsIdProjectList,
    preparedBacklink,
    apiGroup,
    apiVersion,
    setSidebarSuffix,
    setBreadcrumbsSuffix,
    setCurrentTags,
    setBacklinkTo,
    setBacklinkTitle,
  ])

  const tableCustomizationIdPrefix = getTableCustomizationIdPrefix({
    instance: !!syntheticProject,
    project: BASE_USE_NAMESPACE_NAV !== 'true' && !!namespace,
    namespace: !!namespace,
    inside,
  })

  const limitSp = searchParams.get('limit')

  return (
    <ContentCard flexGrow={1} displayFlex flexFlow="column">
      {typeName && apiGroup && apiVersion && (
        <TableApiBuiltin
          resourceType="api"
          namespace={namespace}
          apiGroup={apiGroup}
          apiVersion={apiVersion}
          typeName={typeName}
          key={`${apiGroup}-${apiVersion}-${namespace}-${typeName}`}
          limit={limitSp && limitSp.length > 0 ? Number(limitSp) : undefined}
          inside={inside}
          customizationIdPrefix={tableCustomizationIdPrefix}
        />
      )}
    </ContentCard>
  )
}
