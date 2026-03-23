import ELK from 'elkjs/lib/elk.bundled.js'
import type { ElkExtendedEdge, ElkNode } from 'elkjs/lib/elk-api'
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
  type SimulationNodeDatum,
  type SimulationLinkDatum,
} from 'd3-force'
import type { TRbacEdgeType } from 'localTypes/rbacGraph'

export type TRbacLayoutLink = {
  id: string
  source: string
  target: string
  type?: TRbacEdgeType
}

type TLayoutOptions = {
  reduceEdgeCrossings?: boolean
  useStarLayout?: boolean
}

type TNodeDatum = SimulationNodeDatum & {
  id: string
  radius: number
  charge: number
  width?: number
  height?: number
}

type TForceLink = SimulationLinkDatum<TNodeDatum> & {
  id: string
  source: string | TNodeDatum
  target: string | TNodeDatum
  type?: TRbacEdgeType
  weight?: number
  strength?: number
}

export type TPositionMap = Map<string, { x: number; y: number }>
export type TNamespaceBounds = { x: number; y: number; width: number; height: number }
export type TRoutePoint = { x: number; y: number }
export type TRbacLayoutResult = {
  positions: TPositionMap
  namespaceBounds?: Map<string, TNamespaceBounds>
  edgeRoutes?: Map<string, TRoutePoint[]>
}
type TNamespaceLayout = {
  width: number
  height: number
  positions: TPositionMap
}

const elk = new ELK()

const STRUCTURAL_EDGE_TYPES = new Set<TRbacEdgeType>(['grants', 'subjects'])

const NODE_WIDTH = 220
const NODE_HEIGHT = 80
const NODE_COLLIDE_RADIUS = Math.max(NODE_WIDTH, NODE_HEIGHT) * 0.78
const LOCAL_PADDING = 56
const GROUP_PADDING = 112
const OUTER_LINK_DISTANCE = 360
const GROUP_LABEL_ALLOWANCE = 48
const GROUP_COLLISION_MARGIN = 88
const NAMESPACE_PAD = 40
const NAMESPACE_LABEL_HEIGHT = 28
const ELK_LOCAL_LAYER_SPACING = 190
const ELK_LOCAL_NODE_SPACING = 96
const ELK_COMPOUND_LAYER_SPACING = 260
const ELK_COMPOUND_NODE_SPACING = 140
const STRUCTURAL_EDGE_WEIGHT = 1.55
const SECONDARY_EDGE_WEIGHT = 0.9

const getEndpointId = (endpoint: string | TNodeDatum) => (typeof endpoint === 'string' ? endpoint : endpoint.id)

const getLinkWeight = (link: { type?: TRbacEdgeType }) =>
  link.type && STRUCTURAL_EDGE_TYPES.has(link.type) ? STRUCTURAL_EDGE_WEIGHT : SECONDARY_EDGE_WEIGHT

const runSimulation = (
  nodes: TNodeDatum[],
  links: TForceLink[],
  options: {
    chargeStrength: (node: TNodeDatum) => number
    collideRadius: (node: TNodeDatum) => number
    linkDistance: (link: TForceLink) => number
    linkStrength: (link: TForceLink) => number
  },
): TNodeDatum[] => {
  const simulation = forceSimulation<TNodeDatum>(nodes)
    .force(
      'link',
      forceLink<TNodeDatum, TForceLink>(links)
        .id(node => node.id)
        .distance(options.linkDistance)
        .strength(options.linkStrength),
    )
    .force('charge', forceManyBody<TNodeDatum>().strength(options.chargeStrength))
    .force('collide', forceCollide<TNodeDatum>().radius(options.collideRadius))
    .force('center', forceCenter(0, 0))

  const totalTicks = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()))
  for (let i = 0; i < totalTicks; i += 1) {
    simulation.tick()
  }
  simulation.stop()

  return nodes
}

const normalizeNodePositions = (nodes: TNodeDatum[]): TNamespaceLayout => {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  nodes.forEach(node => {
    const width = node.width ?? NODE_WIDTH
    const height = node.height ?? NODE_HEIGHT
    const left = (node.x ?? 0) - width / 2
    const top = (node.y ?? 0) - height / 2
    minX = Math.min(minX, left)
    minY = Math.min(minY, top)
    maxX = Math.max(maxX, left + width)
    maxY = Math.max(maxY, top + height)
  })

  const positions: TPositionMap = new Map()
  nodes.forEach(node => {
    const width = node.width ?? NODE_WIDTH
    const height = node.height ?? NODE_HEIGHT
    const left = (node.x ?? 0) - width / 2
    const top = (node.y ?? 0) - height / 2
    positions.set(node.id, {
      x: left - minX + LOCAL_PADDING,
      y: top - minY + LOCAL_PADDING,
    })
  })

  return {
    width: maxX - minX + LOCAL_PADDING * 2,
    height: maxY - minY + LOCAL_PADDING * 2,
    positions,
  }
}

const createForceLinks = (links: TRbacLayoutLink[]): TForceLink[] =>
  links.map(link => {
    const weight = getLinkWeight(link)
    return {
      id: link.id,
      source: link.source,
      target: link.target,
      type: link.type,
      weight,
      strength: link.type && STRUCTURAL_EDGE_TYPES.has(link.type) ? 0.54 : 0.28,
    }
  })

const createLegacyNodes = (nodeIds: string[]): TNodeDatum[] =>
  nodeIds.map(nodeId => ({
    id: nodeId,
    radius: NODE_COLLIDE_RADIUS,
    charge: -300,
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
  }))

const createElkEdge = (link: TForceLink, index: number): ElkExtendedEdge => ({
  id: link.id || `edge-${index}-${getEndpointId(link.source)}-${getEndpointId(link.target)}`,
  sources: [getEndpointId(link.source)],
  targets: [getEndpointId(link.target)],
  layoutOptions: {
    'elk.layered.priority.direction': link.type && STRUCTURAL_EDGE_TYPES.has(link.type) ? '10' : '1',
  },
})

const runElkLayout = async (graph: ElkNode): Promise<ElkNode> => elk.layout(graph)

const getNamespaceGroupId = (namespace: string) => `namespace-group:${namespace}`

const toAbsoluteRoutePoint = (point: { x: number; y: number }, offset: { x: number; y: number }): TRoutePoint => ({
  x: offset.x + point.x,
  y: offset.y + point.y,
})

const appendRoutePoint = (points: TRoutePoint[], point: TRoutePoint) => {
  const previous = points[points.length - 1]
  if (previous && previous.x === point.x && previous.y === point.y) return
  points.push(point)
}

const flattenElkEdgeRoutes = (
  node: ElkNode,
  offset = { x: 0, y: 0 },
  edgeRoutes: Map<string, TRoutePoint[]> = new Map(),
): Map<string, TRoutePoint[]> => {
  const absoluteX = offset.x + (node.x ?? 0)
  const absoluteY = offset.y + (node.y ?? 0)

  node.edges?.forEach(edge => {
    if (!edge.id || !edge.sections?.length) return

    const route: TRoutePoint[] = []
    edge.sections.forEach(section => {
      appendRoutePoint(route, toAbsoluteRoutePoint(section.startPoint, { x: absoluteX, y: absoluteY }))
      section.bendPoints?.forEach(point => {
        appendRoutePoint(route, toAbsoluteRoutePoint(point, { x: absoluteX, y: absoluteY }))
      })
      appendRoutePoint(route, toAbsoluteRoutePoint(section.endPoint, { x: absoluteX, y: absoluteY }))
    })

    if (route.length >= 2) {
      edgeRoutes.set(edge.id, route)
    }
  })

  node.children?.forEach(child => {
    flattenElkEdgeRoutes(child, { x: absoluteX, y: absoluteY }, edgeRoutes)
  })

  return edgeRoutes
}

const flattenElkLayout = (
  node: ElkNode,
  namespaceIds: Map<string, string>,
  offset = { x: 0, y: 0 },
  positions: TPositionMap = new Map(),
  namespaceBounds: Map<string, TNamespaceBounds> = new Map(),
  edgeRoutes: Map<string, TRoutePoint[]> = new Map(),
): TRbacLayoutResult => {
  const absoluteX = offset.x + (node.x ?? 0)
  const absoluteY = offset.y + (node.y ?? 0)
  const namespace = namespaceIds.get(node.id)

  if (namespace) {
    namespaceBounds.set(namespace, {
      x: absoluteX,
      y: absoluteY,
      width: node.width ?? 0,
      height: node.height ?? 0,
    })
  } else if (node.id !== 'root' && !(node.children?.length ?? 0)) {
    positions.set(node.id, { x: absoluteX, y: absoluteY })
  }

  node.children?.forEach(child => {
    flattenElkLayout(child, namespaceIds, { x: absoluteX, y: absoluteY }, positions, namespaceBounds, edgeRoutes)
  })

  if (node.id === 'root') {
    flattenElkEdgeRoutes(node, offset, edgeRoutes)
  }

  return { positions, namespaceBounds, edgeRoutes }
}

const buildNamespaceBuckets = (
  nodeIds: string[],
  namespaceMap: Map<string, string | undefined>,
): { namespaceBuckets: Map<string, string[]>; ungroupedNodeIds: string[] } => {
  const namespaceBuckets = new Map<string, string[]>()
  const ungroupedNodeIds: string[] = []

  nodeIds.forEach(nodeId => {
    const namespace = namespaceMap.get(nodeId)
    if (namespace) {
      const bucket = namespaceBuckets.get(namespace) ?? []
      bucket.push(nodeId)
      namespaceBuckets.set(namespace, bucket)
    } else {
      ungroupedNodeIds.push(nodeId)
    }
  })

  return { namespaceBuckets, ungroupedNodeIds }
}

const buildCompoundLayout = async (
  nodeIds: string[],
  links: TForceLink[],
  namespaceMap: Map<string, string | undefined>,
): Promise<TRbacLayoutResult> => {
  const { namespaceBuckets, ungroupedNodeIds } = buildNamespaceBuckets(nodeIds, namespaceMap)
  const namespaceIds = new Map<string, string>()
  const nodeParents = new Map<string, string>()
  const namespaceGroups = new Map<string, ElkNode>()

  const rootEdges: ElkExtendedEdge[] = []
  const rootChildren: ElkNode[] = ungroupedNodeIds.map(nodeId => {
    nodeParents.set(nodeId, 'root')
    return {
      id: nodeId,
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    }
  })

  ;[...namespaceBuckets.entries()].forEach(([namespace, ids]) => {
    const groupId = getNamespaceGroupId(namespace)
    namespaceIds.set(groupId, namespace)

    const groupNode: ElkNode = {
      id: groupId,
      layoutOptions: {
        'elk.algorithm': 'layered',
        'elk.direction': 'RIGHT',
        'elk.edgeRouting': 'ORTHOGONAL',
        'elk.spacing.nodeNode': String(ELK_LOCAL_NODE_SPACING),
        'elk.spacing.edgeNode': String(NAMESPACE_PAD / 2),
        'elk.layered.spacing.nodeNodeBetweenLayers': String(ELK_LOCAL_LAYER_SPACING),
        'elk.padding': `[left=${NAMESPACE_PAD}, top=${
          NAMESPACE_PAD + NAMESPACE_LABEL_HEIGHT
        }, right=${NAMESPACE_PAD}, bottom=${NAMESPACE_PAD}]`,
      },
      children: ids.map(nodeId => {
        nodeParents.set(nodeId, groupId)
        return {
          id: nodeId,
          width: NODE_WIDTH,
          height: NODE_HEIGHT,
        }
      }),
      edges: [],
    }

    namespaceGroups.set(groupId, groupNode)
    rootChildren.push(groupNode)
  })

  links.forEach((link, index) => {
    const edge = createElkEdge(link, index)
    const sourceParent = nodeParents.get(getEndpointId(link.source)) ?? 'root'
    const targetParent = nodeParents.get(getEndpointId(link.target)) ?? 'root'

    if (sourceParent !== 'root' && sourceParent === targetParent) {
      const groupNode = namespaceGroups.get(sourceParent)
      groupNode?.edges?.push(edge)
      return
    }

    rootEdges.push(edge)
  })

  const graph: ElkNode = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
      'elk.edgeRouting': 'ORTHOGONAL',
      'elk.hierarchyHandling': 'INCLUDE_CHILDREN',
      'elk.layered.nodePlacement.strategy': 'NETWORK_SIMPLEX',
      'elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP',
      'elk.layered.considerModelOrder.strategy': 'NODES_AND_EDGES',
      'elk.spacing.nodeNode': String(ELK_COMPOUND_NODE_SPACING),
      'elk.spacing.edgeNode': String(NAMESPACE_PAD / 2),
      'elk.layered.spacing.nodeNodeBetweenLayers': String(ELK_COMPOUND_LAYER_SPACING),
      'elk.padding': '[left=0, top=0, right=0, bottom=0]',
    },
    children: rootChildren,
    edges: rootEdges,
  }

  const result = await runElkLayout(graph)
  return flattenElkLayout(result, namespaceIds)
}

const collapseEndpoint = (nodeId: string, namespaceMap: Map<string, string | undefined>): string => {
  const namespace = namespaceMap.get(nodeId)
  return namespace ? `ns:${namespace}` : nodeId
}

const buildGlobalLinks = (links: TForceLink[], namespaceMap: Map<string, string | undefined>): TForceLink[] => {
  const groupedLinks = new Map<string, TForceLink>()

  links.forEach(link => {
    const sourceId = collapseEndpoint(getEndpointId(link.source), namespaceMap)
    const targetId = collapseEndpoint(getEndpointId(link.target), namespaceMap)
    if (sourceId === targetId) return

    const key = `${sourceId}->${targetId}`
    const current = groupedLinks.get(key)

    if (current) {
      current.weight = (current.weight ?? 1) + (link.weight ?? 1)
      current.strength = (current.strength ?? 0.3) + (link.strength ?? 0.1) * 0.25
    } else {
      groupedLinks.set(key, {
        id: key,
        source: sourceId,
        target: targetId,
        type: link.type,
        weight: link.weight ?? 1,
        strength: link.strength ?? 0.3,
      })
    }
  })

  return [...groupedLinks.values()]
}

const layoutFlatGraphLegacy = (nodeIds: string[], links: TForceLink[]): TPositionMap => {
  const nodes = createLegacyNodes(nodeIds)

  runSimulation(nodes, links, {
    chargeStrength: node => node.charge,
    collideRadius: node => node.radius,
    linkDistance: () => 200,
    linkStrength: () => 0.32,
  })

  const positions: TPositionMap = new Map()
  nodes.forEach(node => {
    positions.set(node.id, {
      x: (node.x ?? 0) - NODE_WIDTH / 2,
      y: (node.y ?? 0) - NODE_HEIGHT / 2,
    })
  })

  return positions
}

const buildNamespaceLayoutsLegacy = (
  nodeIds: string[],
  links: TForceLink[],
  namespaceMap: Map<string, string | undefined>,
): {
  namespaceLayouts: Map<string, TNamespaceLayout>
  ungroupedNodeIds: string[]
} => {
  const { namespaceBuckets, ungroupedNodeIds } = buildNamespaceBuckets(nodeIds, namespaceMap)
  const namespaceLayouts = new Map<string, TNamespaceLayout>()

  namespaceBuckets.forEach((ids, namespace) => {
    const idSet = new Set(ids)
    const localNodes = createLegacyNodes(ids)
    const localLinks = links.filter(
      link => idSet.has(getEndpointId(link.source)) && idSet.has(getEndpointId(link.target)),
    )

    runSimulation(localNodes, localLinks, {
      chargeStrength: node => node.charge,
      collideRadius: node => node.radius,
      linkDistance: () => 170,
      linkStrength: () => 0.32,
    })

    namespaceLayouts.set(namespace, normalizeNodePositions(localNodes))
  })

  return { namespaceLayouts, ungroupedNodeIds }
}

const buildGlobalNodesLegacy = (
  namespaceLayouts: Map<string, TNamespaceLayout>,
  ungroupedNodeIds: string[],
): TNodeDatum[] => {
  const namespaceNodes = [...namespaceLayouts.entries()].map(([namespace, layout]) => ({
    id: `ns:${namespace}`,
    radius:
      Math.hypot(layout.width / 2, (layout.height + GROUP_LABEL_ALLOWANCE) / 2) +
      GROUP_PADDING +
      GROUP_COLLISION_MARGIN,
    charge: -2200,
    width: layout.width + GROUP_PADDING * 2,
    height: layout.height + GROUP_PADDING * 2 + GROUP_LABEL_ALLOWANCE,
  }))

  const ungroupedNodes = ungroupedNodeIds.map(nodeId => ({
    id: nodeId,
    radius: NODE_COLLIDE_RADIUS + 32,
    charge: -900,
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
  }))

  return [...namespaceNodes, ...ungroupedNodes]
}

const layoutRbacGraphLegacy = (
  nodeIds: string[],
  forceLinks: TForceLink[],
  namespaceMap?: Map<string, string | undefined>,
): TRbacLayoutResult => {
  if (!namespaceMap) {
    return { positions: layoutFlatGraphLegacy(nodeIds, forceLinks) }
  }

  const { namespaceLayouts, ungroupedNodeIds } = buildNamespaceLayoutsLegacy(nodeIds, forceLinks, namespaceMap)
  if (namespaceLayouts.size === 0) {
    return { positions: layoutFlatGraphLegacy(nodeIds, forceLinks) }
  }

  const globalNodes = buildGlobalNodesLegacy(namespaceLayouts, ungroupedNodeIds)
  const globalLinks = buildGlobalLinks(forceLinks, namespaceMap)

  runSimulation(globalNodes, globalLinks, {
    chargeStrength: node => node.charge,
    collideRadius: node => node.radius,
    linkDistance: link => OUTER_LINK_DISTANCE + ((link.weight ?? 1) - 1) * 36,
    linkStrength: () => 0.24,
  })

  const positions: TPositionMap = new Map()

  globalNodes.forEach(node => {
    if (!node.id.startsWith('ns:')) {
      positions.set(node.id, {
        x: (node.x ?? 0) - NODE_WIDTH / 2,
        y: (node.y ?? 0) - NODE_HEIGHT / 2,
      })
    }
  })

  namespaceLayouts.forEach((layout, namespace) => {
    const groupNode = globalNodes.find(node => node.id === `ns:${namespace}`)
    const groupCenterX = groupNode?.x ?? 0
    const groupCenterY = groupNode?.y ?? 0
    const groupOriginX = groupCenterX - layout.width / 2
    const groupOriginY = groupCenterY - layout.height / 2

    layout.positions.forEach((position, nodeId) => {
      positions.set(nodeId, {
        x: groupOriginX + position.x,
        y: groupOriginY + position.y,
      })
    })
  })

  return { positions }
}

export const layoutRbacGraph = async (
  nodeIds: string[],
  links: TRbacLayoutLink[],
  namespaceMap?: Map<string, string | undefined>,
  options: TLayoutOptions = {},
): Promise<TRbacLayoutResult> => {
  const effectiveNamespaceMap = namespaceMap ?? new Map<string, string | undefined>()
  const forceLinks = createForceLinks(links)

  if (options.useStarLayout) {
    return { positions: layoutFlatGraphLegacy(nodeIds, forceLinks) }
  }

  if (!options.reduceEdgeCrossings) {
    return layoutRbacGraphLegacy(nodeIds, forceLinks, namespaceMap)
  }

  try {
    return await buildCompoundLayout(nodeIds, forceLinks, effectiveNamespaceMap)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('RBAC compound layout failed, falling back to legacy layout', error)
    return layoutRbacGraphLegacy(nodeIds, forceLinks, namespaceMap)
  }
}
