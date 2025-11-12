import React, { FC } from 'react'
import { RedirectProjectList } from 'components'
import { BaseTemplate } from 'templates'

export const RedirectProjectsPage: FC = () => {
  return (
    <BaseTemplate>
      <RedirectProjectList />
    </BaseTemplate>
  )
}
