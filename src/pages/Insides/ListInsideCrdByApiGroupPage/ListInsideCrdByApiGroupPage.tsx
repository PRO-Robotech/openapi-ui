import React, { FC, useEffect } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams, useOutletContext } from 'react-router-dom'
import { ListInsideCrdsByApiGroup } from 'components'
import { TChromeCtx } from 'templates'

export const ListInsideCrdByApiGroupPage: FC = () => {
  const { namespace, apiGroup, apiVersion, apiExtensionVersion } = useParams()

  const { setSidebarSuffix, setBreadcrumbsSuffix, setUseOnlyNamespace } = useOutletContext<TChromeCtx>()

  useEffect(() => {
    setSidebarSuffix('crd-by-api')
    setBreadcrumbsSuffix('crd-by-api')
    setUseOnlyNamespace(true)

    return () => {
      setSidebarSuffix(undefined)
      setBreadcrumbsSuffix(undefined)
      setUseOnlyNamespace(false)
    }
  }, [setSidebarSuffix, setBreadcrumbsSuffix, setUseOnlyNamespace])

  return (
    <ContentCard flexGrow={1} displayFlex flexFlow="column">
      {apiGroup && apiVersion && apiExtensionVersion && (
        <ListInsideCrdsByApiGroup
          namespace={namespace}
          apiGroup={apiGroup}
          apiVersion={apiVersion}
          apiExtensionVersion={apiExtensionVersion}
        />
      )}
    </ContentCard>
  )
}
