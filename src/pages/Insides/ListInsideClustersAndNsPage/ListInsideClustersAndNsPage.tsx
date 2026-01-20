import React, { FC } from 'react'
import { Breadcrumb, theme as antdtheme } from 'antd'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { ListInsideClusterAndNs, NavigationContainer } from 'components'
import { BaseTemplate } from 'templates'
import { BASE_HIDE_BREADCRUMBS } from 'constants/customizationApiGroupAndVersion'

type TListInsideClustersAndNsPageProps = {
  inside?: boolean
}

export const ListInsideClustersAndNsPage: FC<TListInsideClustersAndNsPageProps> = ({ inside }) => {
  const { token } = antdtheme.useToken()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const breadcrumbItems = [
    {
      title: <Link to={`${baseprefix}/inside/clusters`}>In-Cloud: inside</Link>,
      key: 'home',
    },
    {
      title: 'Select cluster / namespace',
      key: 'select-cluster-and-ns',
    },
  ]

  return (
    <BaseTemplate inside={inside}>
      {BASE_HIDE_BREADCRUMBS !== 'true' && (
        <NavigationContainer $bgColor={token.colorBgLayout}>
          <Breadcrumb items={breadcrumbItems} separator=">" />
        </NavigationContainer>
      )}
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <ListInsideClusterAndNs />
      </ContentCard>
    </BaseTemplate>
  )
}
