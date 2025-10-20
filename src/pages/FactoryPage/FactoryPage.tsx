import React, { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ManageableBreadcrumbs, ManageableSidebar, Factory, NavigationContainer } from 'components'
import { getBreadcrumbsIdPrefix } from 'utils/getBreadcrumbsIdPrefix'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { BaseTemplate } from 'templates'

export const FactoryPage: FC = () => {
  const { namespace, syntheticProject, key } = useParams()

  const [currentTags, setCurrentTags] = useState<string[]>()

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  const breadcrumbsId = `${getBreadcrumbsIdPrefix({
    instance: !!syntheticProject,
    project: !!namespace,
  })}factory-${key}`

  const sidebarId = `${getSidebarIdPrefix({
    instance: !!syntheticProject,
    project: !!namespace,
  })}factory-${key}`

  return (
    <BaseTemplate
      sidebar={
        <ManageableSidebar
          instanceName={possibleInstance}
          projectName={possibleProject}
          idToCompare={sidebarId}
          currentTags={currentTags}
        />
      }
      // withNoCluster
    >
      <NavigationContainer>
        <ManageableBreadcrumbs idToCompare={breadcrumbsId} />
      </NavigationContainer>
      <Factory setSidebarTags={setCurrentTags} key={key} />
    </BaseTemplate>
  )
}
