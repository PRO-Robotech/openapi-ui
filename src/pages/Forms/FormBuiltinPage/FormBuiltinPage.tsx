import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { CreateBuiltinForm, UpdateBuiltinForm } from 'components'
import { getFormsBackLink } from 'utils/getBacklink'
import { BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'
import { TChromeCtx } from 'templates'

export const FormBuiltinPage: FC = () => {
  const { clusterName, syntheticProject, namespace, typeName, entryName } = useParams()
  const [searchParams] = useSearchParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const backLink = searchParams.get('backlink')?.startsWith('/') ? searchParams.get('backlink') : undefined

  const preparedBacklink = getFormsBackLink({
    backLink,
    clusterName,
    possibleProject,
    possibleInstance,
    baseprefix,
    namespacesMode: BASE_USE_NAMESPACE_NAV === 'true',
  })

  const { setCurrentTags, setSidebarSuffix, setBreadcrumbsSuffix, setBacklinkTo, setBacklinkTitle } =
    useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix('builtin-form')
    setBreadcrumbsSuffix(`builtin-form${entryName ? '-edit' : ''}`)
    setCurrentTags([`${typeName}`])
    setBacklinkTo(preparedBacklink)
    setBacklinkTitle(`${entryName ? 'Update' : 'Create'} ${typeName}${entryName ? `/${entryName}` : ''}`)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setBacklinkTo(undefined)
      setBacklinkTitle(undefined)
    }
  }, [
    typeName,
    entryName,
    preparedBacklink,
    setSidebarSuffix,
    setBreadcrumbsSuffix,
    setCurrentTags,
    setBacklinkTo,
    setBacklinkTitle,
  ])

  if (!typeName) {
    return null
  }

  return (
    <ContentCard flexGrow={1} displayFlex flexFlow="column">
      {entryName ? (
        <UpdateBuiltinForm namespace={namespace} typeName={typeName} entryName={entryName} backLink={backLink} />
      ) : (
        <CreateBuiltinForm namespace={namespace} typeName={typeName} backLink={backLink} />
      )}
    </ContentCard>
  )
}
