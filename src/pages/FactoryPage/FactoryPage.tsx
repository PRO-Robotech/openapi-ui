import React, { FC, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { Factory } from 'components'
import { TChromeCtx } from 'templates'

export const FactoryPage: FC = () => {
  const { key } = useParams()

  const { setCurrentTags, setSidebarSuffix, setBreadcrumbsSuffix } = useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix(`factory-${key}`)
    setBreadcrumbsSuffix(`factory-${key}`)

    return () => {
      setCurrentTags(undefined)
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
    }
  }, [key, setSidebarSuffix, setBreadcrumbsSuffix, setCurrentTags])

  return <Factory setSidebarTags={setCurrentTags} key={key} />
}
