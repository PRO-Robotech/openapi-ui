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
  const { cluster, syntheticProject, namespace, plural, name } = useParams()
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
    setSidebarSuffix('builtin-form')
    setBreadcrumbsSuffix(`builtin-form${name ? '-edit' : ''}`)
    setCurrentTags([`${plural}`])
    setBacklinkTo(preparedBacklink)
    setBacklinkTitle(`${name ? 'Update' : 'Create'} ${plural}${name ? `/${name}` : ''}`)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setBacklinkTo(undefined)
      setBacklinkTitle(undefined)
    }
  }, [
    plural,
    name,
    preparedBacklink,
    setSidebarSuffix,
    setBreadcrumbsSuffix,
    setCurrentTags,
    setBacklinkTo,
    setBacklinkTitle,
  ])

  if (!plural) {
    return null
  }

  return (
    <ContentCard flexGrow={1} displayFlex flexFlow="column">
      {name ? (
        <UpdateBuiltinForm namespace={namespace} plural={plural} name={name} backLink={backLink} />
      ) : (
        <CreateBuiltinForm namespace={namespace} plural={plural} backLink={backLink} />
      )}
    </ContentCard>
  )
}
