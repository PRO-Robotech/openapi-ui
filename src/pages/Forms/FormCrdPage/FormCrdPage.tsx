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
  const { cluster, syntheticProject, apiGroup, apiVersion, namespace, plural, name } = useParams()
  const [searchParams] = useSearchParams()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const backLink = searchParams.get('backlink')?.startsWith('/') ? searchParams.get('backlink') : undefined

  const preparedBacklink = getFormsBackLink({
    backLink,
    cluster,
    possibleProject,
    possibleInstance,
    baseprefix,
    namespacesMode: BASE_USE_NAMESPACE_NAV === 'true',
  })

  const { setCurrentTags, setSidebarSuffix, setBreadcrumbsSuffix, setBacklinkTo, setBacklinkTitle } =
    useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix('crd-form')
    setBreadcrumbsSuffix(`crd-form${name ? '-edit' : ''}`)
    setCurrentTags([`${apiGroup}/${apiVersion}/${plural}`])
    setBacklinkTo(preparedBacklink)
    setBacklinkTitle(`${plural ? 'Update' : 'Create'} ${apiGroup}/${apiVersion}/${plural}${name ? `/${name}` : ''}`)

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
    plural,
    name,
    preparedBacklink,
    setSidebarSuffix,
    setBreadcrumbsSuffix,
    setCurrentTags,
    setBacklinkTo,
    setBacklinkTitle,
  ])

  if (!plural || !apiGroup || !apiVersion) {
    return null
  }
  return (
    <ContentCard flexGrow={1} displayFlex flexFlow="column">
      {name ? (
        <UpdateCrdsForm
          namespace={namespace}
          apiGroup={apiGroup}
          apiVersion={apiVersion}
          plural={plural}
          name={name}
          backLink={backLink}
        />
      ) : (
        <CreateCrdsForm
          namespace={namespace}
          apiGroup={apiGroup}
          apiVersion={apiVersion}
          plural={plural}
          backLink={backLink}
        />
      )}
    </ContentCard>
  )
}
