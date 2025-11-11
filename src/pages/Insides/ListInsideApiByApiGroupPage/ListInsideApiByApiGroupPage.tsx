import React, { FC } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams } from 'react-router-dom'
import { ListInsideApisByApiGroup, ManageableBreadcrumbs, ManageableSidebar, NavigationContainer } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'
import { BaseTemplate } from 'templates'

type TListInsideApiByApiGroupPageProps = {
  inside?: boolean
}

export const ListInsideApiByApiGroupPage: FC<TListInsideApiByApiGroupPageProps> = ({ inside }) => {
  const { namespace, apiGroup, apiVersion } = useParams()

  const sidebarId = `${getSidebarIdPrefix({ namespace: !!namespace, inside })}api-by-api`
  const breadcrumbsId = `${getBreadcrumbsIdPrefix({ namespace: !!namespace, inside })}api-by-api`

  return (
    <BaseTemplate inside={inside} sidebar={<ManageableSidebar idToCompare={sidebarId} />}>
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} inside />
      </NavigationContainer>
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        {apiGroup && apiVersion && (
          <ListInsideApisByApiGroup namespace={namespace} apiGroup={apiGroup} apiVersion={apiVersion} />
        )}
      </ContentCard>
    </BaseTemplate>
  )
}
