import React, { FC, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { Factory } from 'components'
import { TChromeCtx } from 'templates'

export const FactoryPage: FC = () => {
  const { key } = useParams()

  const { setCurrentTags, setSidebarSuffix, setForcedSidebarId, setBreadcrumbsSuffix } = useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix(`factory-${key}`)
    setBreadcrumbsSuffix(`factory-${key}`)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setForcedSidebarId(undefined)
      setBreadcrumbsSuffix(undefined)
    }
  }, [key, setSidebarSuffix, setForcedSidebarId, setBreadcrumbsSuffix, setCurrentTags])

  return <Factory setSidebarTags={setCurrentTags} setForcedSidebarId={setForcedSidebarId} key={key} />
}
