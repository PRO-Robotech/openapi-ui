import React, { FC, ReactNode } from 'react'
import { theme } from 'antd'
import { Styled } from './styled'

export type TContentCardMiddleProps = {
  children?: ReactNode
  flexGrow?: number
  displayFlex?: boolean
  flexFlow?: string
  maxHeight?: number
}

export const ContentCardMiddle: FC<TContentCardMiddleProps> = ({
  children,
  flexGrow,
  displayFlex,
  flexFlow,
  maxHeight,
}) => {
  const { token } = theme.useToken()
  return (
    <Styled.ContentContainerMiddle
      $bgColor={token.colorBgContainer}
      $borderColor={token.colorBorder}
      $flexGrow={flexGrow}
      $displayFlex={displayFlex}
      $flexFlow={flexFlow}
      $maxHeight={maxHeight}
    >
      {children}
    </Styled.ContentContainerMiddle>
  )
}
