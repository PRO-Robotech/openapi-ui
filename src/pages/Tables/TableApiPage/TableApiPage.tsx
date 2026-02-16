import React, { FC, useEffect } from 'react'
import { useParams, useSearchParams, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { ContentCardMain, TableApiBuiltin } from 'components'
import { getTableCustomizationIdPrefix } from 'utils/getTableCustomizationIdPrefix'
import { getTablesBackLink } from 'utils/getBacklink'
import { TChromeCtx } from 'templates'
import {
  BASE_USE_NAMESPACE_NAV,
  BASE_PROJECTS_API_GROUP,
  BASE_PROJECTS_API_VERSION,
  BASE_PROJECTS_PLURAL,
} from 'constants/customizationApiGroupAndVersion'

type TTableApiPageProps = {
  inside?: boolean
}

export const TableApiPage: FC<TTableApiPageProps> = ({ inside }) => {
  const { cluster, namespace, syntheticProject, apiGroup, apiVersion, plural } = useParams()
  const [searchParams] = useSearchParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const isProjectList =
    !namespace &&
    apiGroup === BASE_PROJECTS_API_GROUP &&
    apiVersion === BASE_PROJECTS_API_VERSION &&
    plural === BASE_PROJECTS_PLURAL
  const breadcrumbsIdProjectList = 'projects-list'

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const preparedBacklink = getTablesBackLink({
    cluster,
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
    setSidebarSuffix('api-table')
    setBreadcrumbsSuffix(isProjectList ? breadcrumbsIdProjectList : 'api-table')
    setCurrentTags([`${apiGroup}/${apiVersion}/${plural}`])
    setBacklinkTo(preparedBacklink)
    setBacklinkTitle(undefined)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setBacklinkTo(undefined)
      setBacklinkTitle(`${apiGroup}/${apiVersion}/${plural}`)
    }
  }, [
    plural,
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
    <ContentCardMain>
      {plural && apiGroup && apiVersion && (
        <TableApiBuiltin
          resourceType="api"
          namespace={namespace}
          apiGroup={apiGroup}
          apiVersion={apiVersion}
          plural={plural}
          key={`${apiGroup}-${apiVersion}-${namespace}-${plural}`}
          limit={limitSp && limitSp.length > 0 ? Number(limitSp) : undefined}
          inside={inside}
          customizationIdPrefix={tableCustomizationIdPrefix}
        />
      )}
    </ContentCardMain>
  )
}
