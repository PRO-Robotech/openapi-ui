import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { TableCrdInfo } from 'components'
import { getTableCustomizationIdPrefix } from 'utils/getTableCustomizationIdPrefix'
import { getTablesBackLink } from 'utils/getBacklink'
import { TChromeCtx } from 'templates'
import { BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'

type TTableCrdPageProps = {
  inside?: boolean
}

export const TableCrdPage: FC<TTableCrdPageProps> = ({ inside }) => {
  const { clusterName, namespace, syntheticProject, apiGroup, apiVersion, apiExtensionVersion, crdName } = useParams()
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
    setSidebarSuffix('crd-table')
    setBreadcrumbsSuffix('crd-table')
    setCurrentTags([`${apiGroup}/${apiVersion}/${crdName}`])
    setBacklinkTo(preparedBacklink)
    setBacklinkTitle(`${apiGroup}/${apiVersion}/${crdName}`)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setBacklinkTo(undefined)
      setBacklinkTitle(undefined)
    }
  }, [
    apiGroup,
    apiVersion,
    crdName,
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

  return (
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
  )
}
