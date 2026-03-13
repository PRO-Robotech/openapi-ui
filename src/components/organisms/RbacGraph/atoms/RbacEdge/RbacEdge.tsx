import React, { FC, memo } from 'react'
import { getBezierPath, type EdgeProps } from '@xyflow/react'

/* eslint-disable react/prop-types */
export const RbacEdge: FC<EdgeProps> = memo(props => {
  const [edgePath] = getBezierPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
    sourcePosition: props.sourcePosition,
    targetPosition: props.targetPosition,
  })

  return (
    <path
      id={props.id}
      className="react-flow__edge-path"
      d={edgePath}
      style={props.style}
      markerEnd={props.markerEnd}
    />
  )
})
/* eslint-enable react/prop-types */
