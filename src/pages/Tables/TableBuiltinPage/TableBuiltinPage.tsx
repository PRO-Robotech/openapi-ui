import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { TableApiBuiltin } from 'components'
import { getTableCustomizationIdPrefix } from 'utils/getTableCustomizationIdPrefix'
import { getTablesBackLink } from 'utils/getBacklink'
import { TChromeCtx } from 'templates'
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
    setBreadcrumbsSuffix('builtin-table')
    setCurrentTags([`${typeName}`])
    setBacklinkTo(preparedBacklink)
    setBacklinkTitle(typeName)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setBacklinkTo(undefined)
      setBacklinkTitle(undefined)
    }
  }, [
    typeName,
    preparedBacklink,
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
  )
}
