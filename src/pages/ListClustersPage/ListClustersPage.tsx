import React, { FC } from 'react'
import { Breadcrumb, theme as antdtheme } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { ContentCardMain, ListClusters, NavigationContainer } from 'components'
import { BaseTemplate } from 'templates'
import { BASE_HIDE_BREADCRUMBS } from 'constants/customizationApiGroupAndVersion'

export const ListClustersPage: FC = () => {
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

  return (
    <BaseTemplate>
      {BASE_HIDE_BREADCRUMBS !== 'true' && (
        <NavigationContainer $bgColor={token.colorBgLayout}>
          <Breadcrumb items={breadcrumbItems} separator=">" />
        </NavigationContainer>
      )}
      <ContentCardMain>
        <ListClusters />
      </ContentCardMain>
    </BaseTemplate>
  )
}
