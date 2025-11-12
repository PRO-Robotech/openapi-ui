import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useOutletContext } from 'react-router-dom'
import { Search } from 'components'
import { TChromeCtx } from 'templates'

export const SearchPage: FC = () => {
  const { setCurrentTags, setSidebarSuffix, setBreadcrumbsSuffix, setUseOnlyNamespace, setBaseTemplateSearchBoolean } =
    useOutletContext<TChromeCtx>()

  useEffect(() => {
    setCurrentTags(['search'])
    setSidebarSuffix('search-page')
    setBreadcrumbsSuffix('search-page')
    setUseOnlyNamespace(true)
    setBaseTemplateSearchBoolean(true)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setUseOnlyNamespace(false)
      setBaseTemplateSearchBoolean(false)
    }
  }, [setSidebarSuffix, setBreadcrumbsSuffix, setCurrentTags, setUseOnlyNamespace, setBaseTemplateSearchBoolean])

  return (
    <ContentCard flexGrow={1} displayFlex flexFlow="column">
      <Search />
    </ContentCard>
  )
}
