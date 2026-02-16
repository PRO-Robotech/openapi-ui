import React, { FC, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { ListInsideAllResources, ContentCardMain } from 'components'
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
    <ContentCardMain>
      <ListInsideAllResources namespace={namespace} />
    </ContentCardMain>
  )
}
