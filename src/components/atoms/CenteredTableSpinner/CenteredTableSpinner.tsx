import React, { FC } from 'react'
import { Spin } from 'antd'
import { Styled } from './styled'

type TCenteredTableSpinnerProps = {
  searchMount?: boolean
}

export const CenteredTableSpinner: FC<TCenteredTableSpinnerProps> = ({ searchMount }) => {
  return (
    <Styled.Container $searchMount={searchMount}>
      <Spin />
    </Styled.Container>
  )
}
