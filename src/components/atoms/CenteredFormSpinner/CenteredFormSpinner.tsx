import React, { FC } from 'react'
import { Spin } from 'antd'
import { Styled } from './styled'

export const CenteredFormSpinner: FC = () => {
  return (
    <Styled.Container>
      <Spin />
    </Styled.Container>
  )
}
