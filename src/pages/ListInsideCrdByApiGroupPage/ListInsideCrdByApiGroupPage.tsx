import React, { FC } from 'react'
import { Col } from 'antd'
import { ContentCard, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useParams } from 'react-router-dom'
import { ListInsideCrdsByApiGroup, ManageableBreadcrumbs, ManageableSidebar, RowFlexGrow, FlexCol } from 'components'
import { getSidebarIdPrefix } from 'utils/getSidebarIdPrefix'
import { BaseTemplate } from 'templates'
import { AFTER_BREADCRUMBS_SPACE } from 'constants/blocksSizes'

type TListInsideCrdByApiGroupPageProps = {
  forcedTheme?: 'light' | 'dark'
  inside?: boolean
}

export const ListInsideCrdByApiGroupPage: FC<TListInsideCrdByApiGroupPageProps> = ({ forcedTheme, inside }) => {
  const { namespace, apiGroup, apiVersion, apiExtensionVersion } = useParams()

  const sidebarId = `${getSidebarIdPrefix({ namespace: !!namespace, inside })}crd-by-api`

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
            {apiGroup && apiVersion && apiExtensionVersion && (
              <ListInsideCrdsByApiGroup
                namespace={namespace}
                apiGroup={apiGroup}
                apiVersion={apiVersion}
                apiExtensionVersion={apiExtensionVersion}
              />
            )}
          </FlexCol>
        </RowFlexGrow>
      </ContentCard>
    </BaseTemplate>
  )
}
