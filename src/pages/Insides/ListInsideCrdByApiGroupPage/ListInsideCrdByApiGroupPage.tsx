import React, { FC } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams } from 'react-router-dom'
import { ListInsideCrdsByApiGroup, ManageableBreadcrumbs, ManageableSidebar, NavigationContainer } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'
import { BaseTemplate } from 'templates'

type TListInsideCrdByApiGroupPageProps = {
  inside?: boolean
}

export const ListInsideCrdByApiGroupPage: FC<TListInsideCrdByApiGroupPageProps> = ({ inside }) => {
  const { namespace, apiGroup, apiVersion, apiExtensionVersion } = useParams()

  const sidebarId = `${getSidebarIdPrefix({ namespace: !!namespace, inside })}crd-by-api`
  const breadcrumbsId = `${getBreadcrumbsIdPrefix({ namespace: !!namespace, inside })}crd-by-api`

  return (
    <BaseTemplate inside={inside} sidebar={<ManageableSidebar idToCompare={sidebarId} />}>
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} inside />
      </NavigationContainer>
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
    </BaseTemplate>
  )
}
