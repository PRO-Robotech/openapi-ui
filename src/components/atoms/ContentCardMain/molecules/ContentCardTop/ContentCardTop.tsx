import React, { FC } from 'react'
import { theme } from 'antd'
import { Styled } from './styled'

type TContentCardTop = {
  fixedOffest?: number
}

export const ContentCardTop: FC<TContentCardTop> = ({ fixedOffest }) => {
  const { token } = theme.useToken()
  return (
    <Styled.NonTransparentSticky $fixedOffest={fixedOffest}>
      <Styled.BackgroundContainer $bgColor={token.colorBgLayout}>
        <Styled.ContentContainerTop $bgColor={token.colorBgContainer} $borderColor={token.colorBorder} />
      </Styled.BackgroundContainer>
    </Styled.NonTransparentSticky>
  )
}
