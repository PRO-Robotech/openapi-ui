import React, { FC } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams } from 'react-router-dom'
import { ListInsideAllResources, ManageableBreadcrumbs, ManageableSidebar, NavigationContainer } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'
import { BaseTemplate } from 'templates'

type TListInsideApiPageProps = {
  inside?: boolean
}

export const ListInsideApiPage: FC<TListInsideApiPageProps> = ({ inside }) => {
  const { namespace } = useParams()

  const sidebarId = `${getSidebarIdPrefix({ namespace: !!namespace, inside })}apis`
  const breadcrumbsId = `${getBreadcrumbsIdPrefix({ namespace: !!namespace, inside })}apis`

  return (
    <BaseTemplate inside={inside} sidebar={<ManageableSidebar idToCompare={sidebarId} />}>
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} inside />
      </NavigationContainer>
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <ListInsideAllResources namespace={namespace} />
      </ContentCard>
    </BaseTemplate>
  )
}
