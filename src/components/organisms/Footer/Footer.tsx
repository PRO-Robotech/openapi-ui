import React, { FC } from 'react'
import { Typography } from 'antd'
import { FOOTER_TEXT } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

export const Footer: FC = () => {
  return (
    <Styled.Container>
      <Typography.Text type="secondary">
        {FOOTER_TEXT} © {new Date().getFullYear()}
      </Typography.Text>
    </Styled.Container>
  )
}
