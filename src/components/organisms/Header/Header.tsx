import React, { FC } from 'react'
import { theme as antdtheme, Flex } from 'antd'
import { Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { HEAD_FIRST_ROW } from 'constants/blocksSizes'
import { MF_PLUGINS_NO_CLUSTER } from 'constants/customizationApiGroupAndVersion'
import { PluginByManifest } from 'components/molecules'
import { Logo, Documentation, ThemeSelector, User } from './organisms'
import { Styled } from './styled'

export const Header: FC = () => {
  const { useToken } = antdtheme
  const { token } = useToken()

  if (Object.keys(MF_PLUGINS_NO_CLUSTER).includes('plugin-header')) {
    return <PluginByManifest manifestEntry={MF_PLUGINS_NO_CLUSTER['plugin-header']} />
  }

  return (
    <>
      <Styled.NonTransparentSticky>
        <Styled.Container $height={HEAD_FIRST_ROW} $bgColor={token.colorBgLayout}>
          <Flex justify="space-between">
            <div>
              <Logo />
            </div>
            <div>
              <Flex gap={10}>
                <Documentation key="SidebarDocumentation" />
                <ThemeSelector />
                <User key="SidebarUser" />
              </Flex>
            </div>
          </Flex>
        </Styled.Container>
      </Styled.NonTransparentSticky>
      <Spacer $space={HEAD_FIRST_ROW} $samespace />
    </>
  )
}
