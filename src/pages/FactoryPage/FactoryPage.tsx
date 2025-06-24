import React, { FC } from 'react'
import { Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { ManageableBreadcrumbs, Factory } from 'components'
import { BaseTemplate } from 'templates'
import { AFTER_BREADCRUMBS_SPACE } from 'constants/blocksSizes'

type TFactoryPageProps = {
  forcedTheme?: 'light' | 'dark'
}

export const FactoryPage: FC<TFactoryPageProps> = ({ forcedTheme }) => {
  return (
    <BaseTemplate forcedTheme={forcedTheme} withNoCluster>
      <ManageableBreadcrumbs />
      <Spacer $space={AFTER_BREADCRUMBS_SPACE} $samespace />
      <Factory />
    </BaseTemplate>
  )
}
