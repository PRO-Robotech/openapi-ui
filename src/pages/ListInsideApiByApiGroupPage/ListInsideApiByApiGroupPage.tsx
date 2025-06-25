import React, { FC } from 'react'
import { Col } from 'antd'
import { ContentCard, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useParams } from 'react-router-dom'
import { ListInsideApisByApiGroup, ManageableBreadcrumbs, ManageableSidebar, RowFlexGrow, FlexCol } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { BaseTemplate } from 'templates'
import { AFTER_BREADCRUMBS_SPACE } from 'constants/blocksSizes'

type TListInsideApiByApiGroupPageProps = {
  forcedTheme?: 'light' | 'dark'
  inside?: boolean
}

export const ListInsideApiByApiGroupPage: FC<TListInsideApiByApiGroupPageProps> = ({ forcedTheme, inside }) => {
  const { namespace, apiGroup, apiVersion } = useParams()

  const sidebarId = `${getSidebarIdPrefix({ namespace: !!namespace, inside })}api-by-api`

  return (
    <BaseTemplate forcedTheme={forcedTheme} inside={inside}>
      <ManageableBreadcrumbs inside />
      <Spacer $space={AFTER_BREADCRUMBS_SPACE} $samespace />{' '}
      <ContentCard flexGrow={1} displayFlex flexFlow="column">
        <RowFlexGrow wrap={false}>
          <Col span="auto">
            <ManageableSidebar idToCompare={sidebarId} />
          </Col>
          <FlexCol flex="auto">
            {apiGroup && apiVersion && (
              <ListInsideApisByApiGroup namespace={namespace} apiGroup={apiGroup} apiVersion={apiVersion} />
            )}
          </FlexCol>
        </RowFlexGrow>
      </ContentCard>
    </BaseTemplate>
  )
}
