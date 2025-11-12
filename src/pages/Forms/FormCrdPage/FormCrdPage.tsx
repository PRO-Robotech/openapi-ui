import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useSearchParams, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { CreateCrdsForm, UpdateCrdsForm } from 'components'
import { getFormsBackLink } from 'utils/getBacklink'
import { BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'
import { TChromeCtx } from 'templates'

export const FormCrdPage: FC = () => {
  const { clusterName, syntheticProject, apiGroup, apiVersion, namespace, typeName, entryName } = useParams()
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
    setSidebarSuffix('crd-form')
    setBreadcrumbsSuffix(`crd-form${entryName ? '-edit' : ''}`)
    setCurrentTags([`${apiGroup}/${apiVersion}/${typeName}`])
    setBacklinkTo(preparedBacklink)
    setBacklinkTitle(
      `${entryName ? 'Update' : 'Create'} ${apiGroup}/${apiVersion}/${typeName}${entryName ? `/${entryName}` : ''}`,
    )

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
    typeName,
    entryName,
    preparedBacklink,
    setSidebarSuffix,
    setBreadcrumbsSuffix,
    setCurrentTags,
    setBacklinkTo,
    setBacklinkTitle,
  ])

  if (!typeName || !apiGroup || !apiVersion) {
    return null
  }
  return (
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
  )
}
