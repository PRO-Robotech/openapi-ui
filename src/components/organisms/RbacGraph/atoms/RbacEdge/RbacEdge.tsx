import React, { FC, memo } from 'react'
import { getBezierPath, type EdgeProps } from '@xyflow/react'
import type { TRoutePoint } from 'utils/rbacForceLayout'

type TRbacEdgeData = {
  route?: TRoutePoint[]
}

const CORNER_RADIUS = 10

const appendPoint = (points: TRoutePoint[], point: TRoutePoint) => {
  const previous = points[points.length - 1]
  if (previous && previous.x === point.x && previous.y === point.y) return
  points.push(point)
}

const getAnchoredRoute = (route: TRoutePoint[], source: TRoutePoint, target: TRoutePoint): TRoutePoint[] => {
  const anchoredPoints: TRoutePoint[] = []
  appendPoint(anchoredPoints, source)
  route.forEach(point => appendPoint(anchoredPoints, point))
  appendPoint(anchoredPoints, target)

  if (anchoredPoints.length === 2) {
    return anchoredPoints
  }

  return anchoredPoints.filter((point, index, points) => {
    if (index === 0 || index === points.length - 1) return true

    const previous = points[index - 1]
    const next = points[index + 1]
    const sameX = previous.x === point.x && point.x === next.x
    const sameY = previous.y === point.y && point.y === next.y

    return !sameX && !sameY
  })
}

const getDistance = (start: TRoutePoint, end: TRoutePoint) => Math.hypot(end.x - start.x, end.y - start.y)

const getRoundedPath = (points: TRoutePoint[]) => {
  if (points.length < 2) return ''

  let path = `M ${points[0].x},${points[0].y}`

  for (let i = 1; i < points.length; i += 1) {
    const current = points[i]
    const previous = points[i - 1]
    const next = points[i + 1]

    if (!next) {
      path += ` L ${current.x},${current.y}`
    } else {
      const incomingLength = getDistance(previous, current)
      const outgoingLength = getDistance(current, next)

      if (incomingLength === 0 || outgoingLength === 0) {
        path += ` L ${current.x},${current.y}`
      } else {
        const radius = Math.min(CORNER_RADIUS, incomingLength / 2, outgoingLength / 2)
        const entryX = current.x - ((current.x - previous.x) / incomingLength) * radius
        const entryY = current.y - ((current.y - previous.y) / incomingLength) * radius
        const exitX = current.x + ((next.x - current.x) / outgoingLength) * radius
        const exitY = current.y + ((next.y - current.y) / outgoingLength) * radius

        path += ` L ${entryX},${entryY} Q ${current.x},${current.y} ${exitX},${exitY}`
      }
    }
  }

  return path
}

/* eslint-disable react/prop-types */
export const RbacEdge: FC<EdgeProps> = memo(props => {
  const route = (props.data as TRbacEdgeData | undefined)?.route
  const anchoredRoute =
    route && route.length >= 2
      ? getAnchoredRoute(route, { x: props.sourceX, y: props.sourceY }, { x: props.targetX, y: props.targetY })
      : undefined
  const routedPath = anchoredRoute && anchoredRoute.length >= 2 ? getRoundedPath(anchoredRoute) : ''
  const pathStyle = {
    ...props.style,
    strokeDasharray: props.animated ? props.style?.strokeDasharray || '8 6' : props.style?.strokeDasharray,
  }
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
      d={routedPath || edgePath}
      style={pathStyle}
      markerEnd={props.markerEnd}
    >
      {props.animated && (
        <animate attributeName="stroke-dashoffset" from="14" to="0" dur="0.7s" repeatCount="indefinite" />
      )}
    </path>
  )
})
/* eslint-enable react/prop-types */
