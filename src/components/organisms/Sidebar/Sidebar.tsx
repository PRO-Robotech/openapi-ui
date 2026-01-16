import React, { FC, ReactNode } from 'react'
import { theme } from 'antd'
import { useParams } from 'react-router-dom'
import { MF_PLUGINS_NO_CLUSTER, BASE_USE_NEW_NAVIGATION } from 'constants/customizationApiGroupAndVersion'
import { PluginByManifest, SelectorClusterNew } from 'components/molecules'
import { Styled } from './styled'

type TSidebarProps = {
  sidebar?: ReactNode
}

export const Sidebar: FC<TSidebarProps> = ({ sidebar }) => {
  const { token } = theme.useToken()

  const { cluster } = useParams()

  if (Object.keys(MF_PLUGINS_NO_CLUSTER).includes('plugin-sidebar')) {
    return <PluginByManifest manifestEntry={MF_PLUGINS_NO_CLUSTER['plugin-sidebar']} />
  }

  return (
    <Styled.BackgroundContainer $borderRadius={token.borderRadius} $borderColor={token.colorBorder}>
      {BASE_USE_NEW_NAVIGATION === 'true' && <SelectorClusterNew cluster={cluster} />}
      {sidebar}
    </Styled.BackgroundContainer>
  )
}
