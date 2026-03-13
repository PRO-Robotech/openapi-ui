import React, { FC, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { RbacGraph } from 'components/organisms/RbacGraph'
import { TChromeCtx } from 'templates'

export const RbacGraphPage: FC = () => {
  const { cluster } = useParams()
  const { setSidebarSuffix, setBreadcrumbsSuffix, setCurrentTags, setForcedSidebarId } = useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix('rbac-graph')
    setBreadcrumbsSuffix('rbac-graph')

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setForcedSidebarId(undefined)
      setBreadcrumbsSuffix(undefined)
    }
  }, [setSidebarSuffix, setBreadcrumbsSuffix, setCurrentTags, setForcedSidebarId])

  return <RbacGraph clusterId={cluster ?? ''} />
}
