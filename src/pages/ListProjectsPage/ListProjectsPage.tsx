import React, { FC } from 'react'
import { Col } from 'antd'
import { ContentCard, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { ListProjects, ManageableBreadcrumbs, ManageableSidebar, RowFlexGrow, FlexCol } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { BaseTemplate } from 'templates'
import { AFTER_BREADCRUMBS_SPACE } from 'constants/blocksSizes'

type TListProjectsPageProps = {
  forcedTheme?: 'light' | 'dark'
}

export const ListProjectsPage: FC<TListProjectsPageProps> = ({ forcedTheme }) => {
  const sidebarId = `${getSidebarIdPrefix({})}projects-list`

  return (
    <BaseTemplate forcedTheme={forcedTheme}>
      <ManageableBreadcrumbs />
      <Spacer $space={AFTER_BREADCRUMBS_SPACE} $samespace />
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <RowFlexGrow wrap={false}>
          <Col span="auto">
            <ManageableSidebar idToCompare={sidebarId} />
          </Col>
          <FlexCol flex="auto">
            <ListProjects />
          </FlexCol>
        </RowFlexGrow>
      </ContentCard>
    </BaseTemplate>
  )
}
