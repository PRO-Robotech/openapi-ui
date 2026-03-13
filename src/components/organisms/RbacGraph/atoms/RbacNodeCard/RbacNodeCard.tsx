import React, { FC, memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'
import { theme } from 'antd'
import type { TRbacNodeType } from 'localTypes/rbacGraph'
import { Styled } from './styled'

type TRbacNodeData = {
  label: string
  nodeType: TRbacNodeType
  typeLabel: string
  namespace?: string
  aggregated?: boolean
  focusDim: boolean
  focusRoot: boolean
}

const NODE_COLORS: Record<TRbacNodeType, string> = {
  role: '#0f766e',
  clusterRole: '#0f766e',
  roleBinding: '#6366f1',
  clusterRoleBinding: '#6366f1',
  aggregationRelation: '#c2410c',
  permission: '#2563eb',
  pod: '#0ea5a4',
  podOverflow: '#0ea5a4',
  workload: '#7c3aed',
  workloadOverflow: '#7c3aed',
  subject: '#475569',
}

// eslint-disable-next-line react/prop-types
export const RbacNodeCard: FC<NodeProps> = memo(({ data }) => {
  const { token } = theme.useToken()
  const { label, nodeType, typeLabel, namespace, focusDim, focusRoot } = data as unknown as TRbacNodeData
  const borderColor = NODE_COLORS[nodeType] ?? '#475569'

  return (
    <Styled.Card
      $borderColor={borderColor}
      $dimmed={focusDim}
      $isRoot={focusRoot}
      style={{ background: token.colorBgContainer }}
    >
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Top} id="top" />
      <Styled.TypeBadge $color={borderColor}>{typeLabel}</Styled.TypeBadge>
      <Styled.Title style={{ color: token.colorText }}>{label}</Styled.Title>
      {namespace && <Styled.Subtitle style={{ color: token.colorTextSecondary }}>{namespace}</Styled.Subtitle>}
      <Handle type="source" position={Position.Right} />
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </Styled.Card>
  )
})
