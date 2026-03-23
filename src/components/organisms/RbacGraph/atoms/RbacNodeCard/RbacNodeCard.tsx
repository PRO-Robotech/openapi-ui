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
  filteredDim: boolean
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
export const RbacNodeCard: FC<NodeProps> = memo(({ data, selected }) => {
  const { token } = theme.useToken()
  const { label, nodeType, typeLabel, namespace, filteredDim, focusDim, focusRoot } = data as unknown as TRbacNodeData
  const borderColor = NODE_COLORS[nodeType] ?? '#475569'
  const hiddenHandleStyle = { opacity: 0, width: 8, height: 8, pointerEvents: 'none' } as const

  return (
    <Styled.Card
      $borderColor={borderColor}
      $dimmed={filteredDim || focusDim}
      $isRoot={focusRoot || selected}
      style={{ background: token.colorBgContainer }}
    >
      <Handle type="target" position={Position.Left} id="left" style={hiddenHandleStyle} />
      <Handle type="target" position={Position.Top} id="top" style={hiddenHandleStyle} />
      <Handle type="target" position={Position.Right} id="right" style={hiddenHandleStyle} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={hiddenHandleStyle} />
      <Handle type="source" position={Position.Left} id="left" style={hiddenHandleStyle} />
      <Handle type="source" position={Position.Top} id="top" style={hiddenHandleStyle} />
      <Handle type="source" position={Position.Right} id="right" style={hiddenHandleStyle} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={hiddenHandleStyle} />
      <Styled.TypeBadge $color={borderColor}>{typeLabel}</Styled.TypeBadge>
      <Styled.Title style={{ color: token.colorText }}>{label}</Styled.Title>
      {namespace && <Styled.Subtitle style={{ color: token.colorTextSecondary }}>{namespace}</Styled.Subtitle>}
    </Styled.Card>
  )
})
