import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useOutletContext } from 'react-router-dom'
import { ListInsideApisByApiGroup } from 'components'
import { TChromeCtx } from 'templates'

export const ListInsideApiByApiGroupPage: FC = () => {
  const { namespace, apiGroup, apiVersion } = useParams()

  const { setSidebarSuffix, setBreadcrumbsSuffix, setUseOnlyNamespace } = useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix('api-by-api')
    setBreadcrumbsSuffix('api-by-api')
    setUseOnlyNamespace(true)

    return () => {
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setUseOnlyNamespace(false)
    }
  }, [setSidebarSuffix, setBreadcrumbsSuffix, setUseOnlyNamespace])

  return (
    <ContentCard flexGrow={1} displayFlex flexFlow="column">
      {apiGroup && apiVersion && (
        <ListInsideApisByApiGroup namespace={namespace} apiGroup={apiGroup} apiVersion={apiVersion} />
      )}
    </ContentCard>
  )
}
