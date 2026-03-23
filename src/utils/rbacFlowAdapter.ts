import type { Node, Edge } from '@xyflow/react'
import type { TRbacGraph, TRbacEdgeType, TRbacGraphOptions, TRbacNodeType } from 'localTypes/rbacGraph'
import type { TRbacLayoutResult, TRoutePoint } from 'utils/rbacForceLayout'

const EDGE_COLORS: Record<string, string> = {
  grants: '#64748b',
  subjects: '#64748b',
  aggregates: '#c084fc',
  'aggregates-source': '#c084fc',
  'aggregates-target': '#c084fc',
  'permissions-role': '#2563eb',
  'permissions-binding': '#2563eb',
  runsAs: '#0ea5a4',
  ownedBy: '#334155',
}

const DASHED_EDGES = new Set<TRbacEdgeType>(['aggregates', 'aggregates-source', 'aggregates-target'])

const NODE_TYPE_LABELS: Record<TRbacNodeType, string> = {
  role: 'Role',
  clusterRole: 'ClusterRole',
  roleBinding: 'RoleBinding',
  clusterRoleBinding: 'ClusterRoleBinding',
  aggregationRelation: 'Aggregation',
  permission: 'Permission',
  pod: 'Pod',
  podOverflow: 'Pods (overflow)',
  workload: 'Workload',
  workloadOverflow: 'Workloads (overflow)',
  subject: 'Subject',
}

const isStructuralEdge = (type: TRbacEdgeType) => type === 'grants' || type === 'subjects'
const HORIZONTAL_ROUTE_RATIO = 1.15

type TRbacFlowEdgeData = {
  edgeType: TRbacEdgeType
  explain?: string
  route?: TRoutePoint[]
}

type TFilterState = {
  hiddenNodeIds: Set<string>
  hiddenEdgeIds: Set<string>
}

export const collectFilteredGraphState = (graph: TRbacGraph, options: TRbacGraphOptions): TFilterState => {
  const hiddenNodeIds = new Set<string>()
  const hiddenEdgeIds = new Set<string>()

  if (!options.showRoles) {
    graph.nodes.forEach(node => {
      if (node.type === 'role' || node.type === 'clusterRole') {
        hiddenNodeIds.add(node.id)
      }
    })
  }

  if (!options.showBindings) {
    graph.nodes.forEach(node => {
      if (node.type === 'roleBinding' || node.type === 'clusterRoleBinding') {
        hiddenNodeIds.add(node.id)
      }
    })
  }

  if (!options.showSubjects) {
    const subjectNodeIds = new Set<string>()

    graph.nodes.forEach(node => {
      if (node.type === 'subject') {
        subjectNodeIds.add(node.id)
      }
    })

    graph.edges.forEach(edge => {
      if (edge.type === 'subjects') {
        subjectNodeIds.add(edge.to)
      }
    })

    subjectNodeIds.forEach(nodeId => hiddenNodeIds.add(nodeId))
  }

  if (!options.includePods) {
    graph.nodes.forEach(node => {
      if (node.type === 'pod' || node.type === 'podOverflow') {
        hiddenNodeIds.add(node.id)
      }
    })
  }

  if (!options.includeWorkloads) {
    graph.nodes.forEach(node => {
      if (node.type === 'workload' || node.type === 'workloadOverflow') {
        hiddenNodeIds.add(node.id)
      }
    })
  }

  if (!options.showPermissions) {
    graph.nodes.forEach(node => {
      if (node.type === 'permission') {
        hiddenNodeIds.add(node.id)
      }
    })
  }

  graph.edges.forEach(edge => {
    if (!options.showAggregateEdges && DASHED_EDGES.has(edge.type)) {
      hiddenEdgeIds.add(edge.id)
    }

    if (!options.showPermissions && (edge.type === 'permissions-role' || edge.type === 'permissions-binding')) {
      hiddenEdgeIds.add(edge.id)
    }

    if (hiddenNodeIds.has(edge.from) || hiddenNodeIds.has(edge.to)) {
      hiddenEdgeIds.add(edge.id)
    }
  })

  if (options.onlyReachable) {
    const structuralNodeIds = new Set<string>()
    graph.edges.forEach(edge => {
      if (!hiddenEdgeIds.has(edge.id) && isStructuralEdge(edge.type)) {
        structuralNodeIds.add(edge.from)
        structuralNodeIds.add(edge.to)
      }
    })

    graph.nodes.forEach(node => {
      if (!structuralNodeIds.has(node.id)) {
        hiddenNodeIds.add(node.id)
      }
    })

    graph.edges.forEach(edge => {
      if (!structuralNodeIds.has(edge.from) || !structuralNodeIds.has(edge.to)) {
        hiddenEdgeIds.add(edge.id)
      }
    })
  }

  return { hiddenNodeIds, hiddenEdgeIds }
}

export const filterGraphByOptions = (graph: TRbacGraph, options: TRbacGraphOptions): TRbacGraph => {
  const { hiddenNodeIds, hiddenEdgeIds } = collectFilteredGraphState(graph, options)

  return {
    nodes: graph.nodes.filter(node => !hiddenNodeIds.has(node.id)),
    edges: graph.edges.filter(edge => !hiddenEdgeIds.has(edge.id)),
  }
}

const getForcedHandlesForEdge = (edgeType: TRbacEdgeType): { sourceHandle?: string; targetHandle?: string } | null => {
  if (edgeType === 'ownedBy') {
    return { sourceHandle: 'right', targetHandle: 'left' }
  }

  return null
}

const pickEdgeHandles = (
  sourcePosition: { x: number; y: number },
  targetPosition: { x: number; y: number },
): { sourceHandle?: string; targetHandle?: string } => {
  const deltaX = targetPosition.x - sourcePosition.x
  const deltaY = targetPosition.y - sourcePosition.y

  if (deltaX >= 0 && Math.abs(deltaX) >= Math.abs(deltaY) * HORIZONTAL_ROUTE_RATIO) {
    return { sourceHandle: 'right', targetHandle: 'left' }
  }

  return { sourceHandle: 'bottom', targetHandle: 'top' }
}

const inferSourceHandle = (route?: TRoutePoint[]): string | undefined => {
  if (!route || route.length < 2) return undefined

  const [start, next] = route
  const deltaX = next.x - start.x
  const deltaY = next.y - start.y

  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    return deltaX >= 0 ? 'right' : 'left'
  }

  return deltaY >= 0 ? 'bottom' : 'top'
}

const inferTargetHandle = (route?: TRoutePoint[]): string | undefined => {
  if (!route || route.length < 2) return undefined

  const end = route[route.length - 1]
  const previous = route[route.length - 2]
  const deltaX = end.x - previous.x
  const deltaY = end.y - previous.y

  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    return deltaX >= 0 ? 'left' : 'right'
  }

  return deltaY >= 0 ? 'top' : 'bottom'
}

const bfs = (startId: string, adjacency: Map<string, Set<string>>): Set<string> => {
  const visited = new Set<string>()
  const queue = [startId]
  visited.add(startId)
  while (queue.length > 0) {
    const current = queue.shift()!
    const neighbors = adjacency.get(current)
    if (neighbors) {
      neighbors.forEach(n => {
        if (!visited.has(n)) {
          visited.add(n)
          queue.push(n)
        }
      })
    }
  }
  return visited
}

export const buildRbacFlowModel = (
  graph: TRbacGraph,
  layout: TRbacLayoutResult,
  options: TRbacGraphOptions,
): { nodes: Node[]; edges: Edge[] } => {
  const { positions, namespaceBounds } = layout
  const filteredNodes = [...graph.nodes]
  const filteredEdges = [...graph.edges]

  const flowNodes: Node[] = filteredNodes.map(node => {
    const pos = positions.get(node.id) ?? { x: 0, y: 0 }
    return {
      id: node.id,
      type: 'rbacCard',
      position: pos,
      zIndex: 5,
      data: {
        label: node.name,
        nodeType: node.type,
        typeLabel: NODE_TYPE_LABELS[node.type] ?? node.type,
        namespace: node.namespace,
        aggregated: node.aggregated,
        matchedRuleRefs: node.matchedRuleRefs,
        ruleCount: node.matchedRuleRefs?.length ?? 0,
        filteredDim: false,
        focusDim: false,
        focusRoot: false,
      },
    }
  })

  const NS_PAD = 40
  const NS_LABEL_H = 28
  const NS_NODE_W = 220
  const NS_NODE_H = 80

  if (!options.starMode) {
    const nsBuckets = new Map<string, Node[]>()
    filteredNodes.forEach(n => {
      if (n.namespace) {
        const bucket = nsBuckets.get(n.namespace) ?? []
        bucket.push(flowNodes.find(fn => fn.id === n.id)!)
        nsBuckets.set(n.namespace, bucket)
      }
    })

    nsBuckets.forEach((groupNodes, ns) => {
      const providedBounds = namespaceBounds?.get(ns)
      let minX = providedBounds?.x ?? Infinity
      let minY = providedBounds?.y ?? Infinity
      let maxX = providedBounds ? providedBounds.x + providedBounds.width : -Infinity
      let maxY = providedBounds ? providedBounds.y + providedBounds.height : -Infinity

      if (!providedBounds) {
        groupNodes.forEach(n => {
          minX = Math.min(minX, n.position.x)
          minY = Math.min(minY, n.position.y)
          maxX = Math.max(maxX, n.position.x + NS_NODE_W)
          maxY = Math.max(maxY, n.position.y + NS_NODE_H)
        })
      }

      flowNodes.push({
        id: `ns-group-${ns}`,
        type: 'namespaceGroup',
        position: providedBounds ? { x: minX, y: minY } : { x: minX - NS_PAD, y: minY - NS_PAD - NS_LABEL_H },
        style: providedBounds
          ? { width: providedBounds.width, height: providedBounds.height }
          : { width: maxX - minX + 2 * NS_PAD, height: maxY - minY + 2 * NS_PAD + NS_LABEL_H },
        data: { namespace: ns },
        zIndex: -1,
        selectable: false,
        draggable: false,
      })
    })
  }

  const flowNodePositions = new Map(flowNodes.map(node => [node.id, node.position]))

  const flowEdges: Edge[] = filteredEdges.map(edge => {
    const route = layout.edgeRoutes?.get(edge.id)
    const forcedHandles = getForcedHandlesForEdge(edge.type)
    const fallbackHandles = pickEdgeHandles(
      flowNodePositions.get(edge.from) ?? { x: 0, y: 0 },
      flowNodePositions.get(edge.to) ?? { x: 0, y: 0 },
    )

    return {
      id: edge.id,
      source: edge.from,
      target: edge.to,
      sourceHandle: forcedHandles?.sourceHandle ?? inferSourceHandle(route) ?? fallbackHandles.sourceHandle,
      targetHandle: forcedHandles?.targetHandle ?? inferTargetHandle(route) ?? fallbackHandles.targetHandle,
      type: 'rbacEdge',
      data: {
        edgeType: edge.type,
        explain: edge.explain,
        route,
      } as TRbacFlowEdgeData,
      style: {
        stroke: EDGE_COLORS[edge.type] ?? '#475569',
        strokeWidth:
          edge.type === 'aggregates' || edge.type === 'aggregates-source' || edge.type === 'aggregates-target'
            ? 2
            : 1.5,
        opacity: 1,
        strokeDasharray: DASHED_EDGES.has(edge.type) ? '6 3' : undefined,
      },
      animated: false,
    }
  })

  return { nodes: flowNodes, edges: flowEdges }
}

export const applyFocusToModel = (
  baseNodes: Node[],
  baseEdges: Edge[],
  focusNodeId: string | null,
  focusModeEnabled: boolean,
): { nodes: Node[]; edges: Edge[] } => {
  if (!focusModeEnabled || !focusNodeId || !baseNodes.some(n => n.id === focusNodeId)) {
    return {
      nodes: baseNodes.map(n => ({ ...n, data: { ...n.data, focusDim: false, focusRoot: false } })),
      edges: baseEdges.map(e => ({ ...e, style: { ...e.style, opacity: 1 }, animated: false })),
    }
  }

  const outAdj = new Map<string, Set<string>>()
  const inAdj = new Map<string, Set<string>>()
  const edgeIdsByPair = new Map<string, string>()

  baseEdges.forEach(e => {
    if (!outAdj.has(e.source)) outAdj.set(e.source, new Set())
    outAdj.get(e.source)!.add(e.target)
    if (!inAdj.has(e.target)) inAdj.set(e.target, new Set())
    inAdj.get(e.target)!.add(e.source)
    edgeIdsByPair.set(`${e.source}->${e.target}`, e.id)
  })

  const downstream = bfs(focusNodeId, outAdj)
  const upstream = bfs(focusNodeId, inAdj)
  const activeNodes = new Set([...downstream, ...upstream])

  const activeEdges = new Set<string>()
  baseEdges.forEach(e => {
    if ((downstream.has(e.source) && downstream.has(e.target)) || (upstream.has(e.source) && upstream.has(e.target))) {
      activeEdges.add(e.id)
    }
  })

  return {
    nodes: baseNodes.map(n => ({
      ...n,
      data: {
        ...n.data,
        focusDim: n.type === 'namespaceGroup' ? false : !activeNodes.has(n.id),
        focusRoot: n.id === focusNodeId,
      },
    })),
    edges: baseEdges.map(e => {
      const active = activeEdges.has(e.id)
      const baseWidth = (e.style?.strokeWidth as number) ?? 1.5
      return {
        ...e,
        animated: active,
        style: {
          ...e.style,
          opacity: active ? 1 : 0.08,
          strokeWidth: active ? baseWidth : Math.max(1, baseWidth - 0.6),
        },
        zIndex: active ? 10 : 1,
      }
    }),
  }
}

export const applyStarSelectionToModel = (
  baseNodes: Node[],
  baseEdges: Edge[],
  selectedNodeId: string | null,
): { nodes: Node[]; edges: Edge[] } => {
  if (!selectedNodeId || !baseNodes.some(node => node.id === selectedNodeId)) {
    return {
      nodes: baseNodes.map(node => ({ ...node, data: { ...node.data, focusDim: false, focusRoot: false } })),
      edges: baseEdges.map(edge => ({
        ...edge,
        style: {
          ...edge.style,
          opacity:
            (edge.data as TRbacFlowEdgeData | undefined)?.edgeType === 'aggregates' ||
            (edge.data as TRbacFlowEdgeData | undefined)?.edgeType === 'aggregates-source' ||
            (edge.data as TRbacFlowEdgeData | undefined)?.edgeType === 'aggregates-target'
              ? 0.8
              : 0.55,
          strokeWidth:
            (edge.data as TRbacFlowEdgeData | undefined)?.edgeType === 'aggregates' ||
            (edge.data as TRbacFlowEdgeData | undefined)?.edgeType === 'aggregates-source' ||
            (edge.data as TRbacFlowEdgeData | undefined)?.edgeType === 'aggregates-target'
              ? 2
              : 1.5,
        },
        animated: false,
      })),
    }
  }

  const activeNodes = new Set([selectedNodeId])
  const activeEdges = new Set<string>()
  baseEdges.forEach(edge => {
    if (edge.source === selectedNodeId || edge.target === selectedNodeId) {
      activeEdges.add(edge.id)
      activeNodes.add(edge.source)
      activeNodes.add(edge.target)
    }
  })

  return {
    nodes: baseNodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        focusDim: node.type === 'namespaceGroup' ? false : !activeNodes.has(node.id),
        focusRoot: node.id === selectedNodeId,
      },
    })),
    edges: baseEdges.map(edge => {
      const active = activeEdges.has(edge.id)
      return {
        ...edge,
        style: {
          ...edge.style,
          opacity: active ? 0.95 : 0.04,
          strokeWidth: active ? 2.2 : 1,
        },
      }
    }),
  }
}
