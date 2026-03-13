import React, { memo } from 'react'
import { type NodeProps } from '@xyflow/react'
import { theme } from 'antd'
import { Styled } from './styled'

type TNamespaceGroupData = {
  namespace: string
}

// eslint-disable-next-line react/prop-types
export const NamespaceGroupNode: React.FC<NodeProps> = memo(({ data }) => {
  const { token } = theme.useToken()
  // eslint-disable-next-line react/prop-types
  const { namespace } = data as TNamespaceGroupData

  return (
    <Styled.GroupContainer
      style={{
        borderColor: token.colorBorderSecondary,
        background: token.colorFillQuaternary,
        ['--ns-border' as string]: token.colorBorderSecondary,
        ['--ns-bg' as string]: token.colorFillQuaternary,
        ['--ns-label' as string]: token.colorTextSecondary,
      }}
    >
      <Styled.Label style={{ color: token.colorTextSecondary }}>{namespace}</Styled.Label>
    </Styled.GroupContainer>
  )
})

NamespaceGroupNode.displayName = 'NamespaceGroupNode'
