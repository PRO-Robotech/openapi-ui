import React, { FC } from 'react'
import { Flex, theme } from 'antd'
import { useParams } from 'react-router-dom'
import { HEAD_FIRST_ROW, HEAD_SECOND_ROW, HEAD_BORDER_BOTTOM } from 'constants/blocksSizes'
import { Logo, Documentation, ThemeSelector, User, Selector, SelectorInside } from './organisms'
import { Styled } from './styled'

type THeaderProps = {
  inside?: boolean
}

export const Header: FC<THeaderProps> = ({ inside }) => {
  // const { projectName, instanceName, clusterName, entryType, namespace, syntheticProject } = useParams()
  const { projectName, instanceName, clusterName, namespace, syntheticProject } = useParams()
  const { token } = theme.useToken()

  const possibleProject = syntheticProject && namespace ? syntheticProject : namespace
  const possibleInstance = syntheticProject && namespace ? namespace : undefined

  return (
    <>
      <Styled.PaddingContainer $height={HEAD_FIRST_ROW}>
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
      </Styled.PaddingContainer>
      <Styled.BackgroundContainer
        $bgColor={token.colorFillSecondary}
        $borderColor={token.colorBorder}
        $borderSize={HEAD_BORDER_BOTTOM}
      >
        <Styled.PaddingContainer $height={HEAD_SECOND_ROW}>
          {inside ? (
            <SelectorInside clusterName={clusterName} namespace={namespace} />
          ) : (
            <Selector
              clusterName={clusterName}
              projectName={projectName || possibleProject}
              instanceName={instanceName || possibleInstance}
            />
          )}
        </Styled.PaddingContainer>
      </Styled.BackgroundContainer>
    </>
  )
}
