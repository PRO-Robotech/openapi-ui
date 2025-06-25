import React, { FC } from 'react'
import { Col } from 'antd'
import { ContentCard, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useParams } from 'react-router-dom'
import { ListInsideAllResources, ManageableBreadcrumbs, ManageableSidebar, RowFlexGrow, FlexCol } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { BaseTemplate } from 'templates'
import { AFTER_BREADCRUMBS_SPACE } from 'constants/blocksSizes'

type TListInsideApiPageProps = {
  forcedTheme?: 'light' | 'dark'
  inside?: boolean
}

export const ListInsideApiPage: FC<TListInsideApiPageProps> = ({ forcedTheme, inside }) => {
  const { namespace } = useParams()

  const sidebarId = `${getSidebarIdPrefix({ namespace: !!namespace, inside })}apis`

  return (
    <BaseTemplate forcedTheme={forcedTheme} inside={inside}>
      <ManageableBreadcrumbs inside />
      <Spacer $space={AFTER_BREADCRUMBS_SPACE} $samespace />
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <RowFlexGrow wrap={false}>
          <Col span="auto">
            <ManageableSidebar idToCompare={sidebarId} />
          </Col>
          <FlexCol flex="auto">
            <ListInsideAllResources namespace={namespace} />
          </FlexCol>
        </RowFlexGrow>
      </ContentCard>
    </BaseTemplate>
  )
}
