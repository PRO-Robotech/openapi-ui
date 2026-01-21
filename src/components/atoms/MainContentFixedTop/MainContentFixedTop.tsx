import React, { FC, PropsWithChildren } from 'react'
import { theme } from 'antd'
import { Styled } from './styled'

export const MainContentFixedTop: FC<PropsWithChildren> = ({ children }) => {
  const { token } = theme.useToken()
  return <Styled.Container $bgColor={token.colorBgContainer}>{children}</Styled.Container>
}
