import React, { FC } from 'react'
import { ContentCard } from '@prorobotech/openapi-k8s-toolkit'
import { useParams } from 'react-router-dom'
import { BackLink, ManageableBreadcrumbs, ManageableSidebar, NavigationContainer, Search } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'
import { BaseTemplate } from 'templates'

type TSearchPageProps = {
  forcedTheme?: 'light' | 'dark'
}

export const SearchPage: FC<TSearchPageProps> = ({ forcedTheme }) => {
  const { namespace, syntheticProject } = useParams()

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  // const sidebarId = `${getSidebarIdPrefix({ instance: !!syntheticProject, project: !!namespace })}search-page`
  // const breadcrumbsId = `${getBreadcrumbsIdPrefix({
  //   instance: !!syntheticProject,
  //   project: !!namespace,
  // })}search-page`
  const sidebarId = `${getSidebarIdPrefix({ namespace: !!namespace })}search-page`
  const breadcrumbsId = `${getBreadcrumbsIdPrefix({
    namespace: !!namespace,
  })}search-page`

  return (
    <BaseTemplate
      forcedTheme={forcedTheme}
      inside={false}
      isSearch
      sidebar={
        <ManageableSidebar
          instanceName={possibleInstance}
          projectName={possibleProject}
          idToCompare={sidebarId}
          currentTags={['search']}
        />
      }
    >
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} inside={false} />
        <BackLink title="Search" />
      </NavigationContainer>
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <Search />
      </ContentCard>
    </BaseTemplate>
  )
}
