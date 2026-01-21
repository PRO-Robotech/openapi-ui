import React, { FC } from 'react'
import { Typography, theme as antdtheme } from 'antd'
import { FOOTER_TEXT } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

export const Footer: FC = () => {
  const { token } = antdtheme.useToken()

  return (
    <Styled.NonTransparentSticky>
      <Styled.Container $colorBgLayout={token.colorBgLayout}>
        <Typography.Text type="secondary">
          {FOOTER_TEXT} © {new Date().getFullYear()}
        </Typography.Text>
      </Styled.Container>
    </Styled.NonTransparentSticky>
  )
}
