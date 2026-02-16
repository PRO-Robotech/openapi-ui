/* eslint-disable react/prop-types */
import React, { PropsWithChildren, forwardRef } from 'react'
import { theme, ConfigProvider } from 'antd'
import { Styled } from './styled'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type TMainContentFixedTopProps = PropsWithChildren<{}>

export const MainContentFixedTop = forwardRef<HTMLDivElement, TMainContentFixedTopProps>(({ children }, ref) => {
  const { token } = theme.useToken()
  return (
    <Styled.Container $bgColor={token.colorBgContainer} ref={ref}>
      <ConfigProvider theme={{ token: { zIndexPopupBase: 1056 } }}>{children}</ConfigProvider>
    </Styled.Container>
  )
})
