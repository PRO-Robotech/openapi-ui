import React, { FC } from 'react'
import { Breadcrumb } from 'antd'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { ListClusters, NavigationContainer } from 'components'
import { BaseTemplate } from 'templates'
import { BASE_HIDE_BREADCRUMBS } from 'constants/customizationApiGroupAndVersion'

export const ListClustersPage: FC = () => {
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const breadcrumbItems = [
    {
      title: <Link to={`${baseprefix}/`}>In-Cloud</Link>,
      key: 'home',
    },
    {
      title: 'Cluster List',
      key: 'cluster-list',
    },
  ]

  return (
    <BaseTemplate>
      {BASE_HIDE_BREADCRUMBS !== 'true' && (
        <NavigationContainer>
          <Breadcrumb items={breadcrumbItems} separator=">" />
        </NavigationContainer>
      )}
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <ListClusters />
      </ContentCard>
    </BaseTemplate>
  )
}
