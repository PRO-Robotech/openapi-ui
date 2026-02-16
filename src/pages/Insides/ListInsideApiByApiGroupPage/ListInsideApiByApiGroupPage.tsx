import React, { FC, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { ListInsideApisByApiGroup, ContentCardMain } from 'components'
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
    <ContentCardMain>
      {apiGroup && apiVersion && (
        <ListInsideApisByApiGroup namespace={namespace} apiGroup={apiGroup} apiVersion={apiVersion} />
      )}
    </ContentCardMain>
  )
}
