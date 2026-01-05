import React, { FC, ReactNode } from 'react'
import { theme } from 'antd'
import { MF_PLUGINS_NO_CLUSTER } from 'constants/customizationApiGroupAndVersion'
import { PluginByManifest } from 'components/molecules'
import { Styled } from './styled'

type TSidebarProps = {
  sidebar?: ReactNode
}

export const Sidebar: FC<TSidebarProps> = ({ sidebar }) => {
  const { token } = theme.useToken()

  if (Object.keys(MF_PLUGINS_NO_CLUSTER).includes('plugin-sidebar')) {
    return <PluginByManifest manifestEntry={MF_PLUGINS_NO_CLUSTER['plugin-sidebar']} />
  }

  return (
    <Styled.BackgroundContainer $borderRadius={token.borderRadius} $borderColor={token.colorBorder}>
      {sidebar}
    </Styled.BackgroundContainer>
  )
}
