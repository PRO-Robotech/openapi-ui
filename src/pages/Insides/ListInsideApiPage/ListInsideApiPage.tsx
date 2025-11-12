import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useOutletContext } from 'react-router-dom'
import { ListInsideAllResources } from 'components'
import { TChromeCtx } from 'templates'

export const ListInsideApiPage: FC = () => {
  const { namespace } = useParams()

  const { setSidebarSuffix, setBreadcrumbsSuffix, setUseOnlyNamespace } = useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix('apis')
    setBreadcrumbsSuffix('apis')
    setUseOnlyNamespace(true)

    return () => {
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setUseOnlyNamespace(false)
    }
  }, [setSidebarSuffix, setBreadcrumbsSuffix, setUseOnlyNamespace])

  return (
    <ContentCard flexGrow={1} displayFlex flexFlow="column">
      <ListInsideAllResources namespace={namespace} />
    </ContentCard>
  )
}
