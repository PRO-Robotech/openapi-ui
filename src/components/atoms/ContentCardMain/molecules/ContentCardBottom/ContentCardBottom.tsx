import React, { FC } from 'react'
import { theme } from 'antd'
import { Styled } from './styled'

type TContentCardBottomProps = {
  fixedOffest?: number
}

export const ContentCardBottom: FC<TContentCardBottomProps> = ({ fixedOffest }) => {
  const { token } = theme.useToken()
  return (
    <Styled.NonTransparentSticky $fixedOffest={fixedOffest}>
      <Styled.BackgroundContainer $bgColor={token.colorBgLayout}>
        <Styled.ContentContainerBottom $bgColor={token.colorBgContainer} $borderColor={token.colorBorder} />
      </Styled.BackgroundContainer>
    </Styled.NonTransparentSticky>
  )
}
