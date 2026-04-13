import React, { FC } from 'react'
import { Breadcrumb, theme as antdtheme } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { ContentCardMain, ListClusters, ListClustersByResources, NavigationContainer } from 'components'
import { BaseTemplate } from 'templates'
import {
  BASE_HIDE_BREADCRUMBS,
  CURRENT_CLUSTER,
  CLUSTERLIST_API_RESOURCE_API_GROUP,
  CLUSTERLIST_API_RESOURCE_API_VERSION,
  CLUSTERLIST_API_RESOURCE_PLURAL,
} from 'constants/customizationApiGroupAndVersion'

type TListClustersPageProps = {
  withBaseTemplate?: boolean
}

export const ListClustersPage: FC<TListClustersPageProps> = ({ withBaseTemplate = true }) => {
  const { token } = antdtheme.useToken()
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

  const content = (
    <>
      {BASE_HIDE_BREADCRUMBS !== 'true' && (
        <NavigationContainer $bgColor={token.colorBgLayout}>
          <Breadcrumb items={breadcrumbItems} separator=">" />
        </NavigationContainer>
      )}
      <ContentCardMain>
        {CURRENT_CLUSTER?.length > 0 &&
        CLUSTERLIST_API_RESOURCE_API_GROUP?.length > 0 &&
        CLUSTERLIST_API_RESOURCE_API_VERSION?.length > 0 &&
        CLUSTERLIST_API_RESOURCE_PLURAL?.length > 0 ? (
          <ListClustersByResources />
        ) : (
          <ListClusters />
        )}
      </ContentCardMain>
    </>
  )

  return withBaseTemplate ? <BaseTemplate>{content}</BaseTemplate> : content
}
