import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
  forceX,
  forceY,
  type SimulationNodeDatum,
  type SimulationLinkDatum,
} from 'd3-force'
import type { TRbacEdgeType } from 'localTypes/rbacGraph'

export type TRbacLayoutLink = {
  source: string
  target: string
  type?: TRbacEdgeType
}
type TLayoutOptions = {
  reduceEdgeCrossings?: boolean
}

type TNodeDatum = SimulationNodeDatum & {
  id: string
  radius: number
  charge: number
  preferredX: number
  preferredY: number
  xForce: number
  yForce: number
}

type TForceLink = SimulationLinkDatum<TNodeDatum> & {
  source: string | TNodeDatum
  target: string | TNodeDatum
  type?: TRbacEdgeType
  weight?: number
  strength?: number
}

type TPositionMap = Map<string, { x: number; y: number }>
type TNamespaceLayout = {
  width: number
  height: number
  positions: TPositionMap
}
type TGraphModel = {
  preferredLayer: Map<string, number>
  nodeDegree: Map<string, number>
  namespaceLayer: Map<string, number>
  namespaceOrder: string[]
}

const STRUCTURAL_EDGE_TYPES = new Set<TRbacEdgeType>(['grants', 'subjects'])

const NODE_WIDTH = 220
const NODE_HEIGHT = 80
const NODE_COLLIDE_RADIUS = Math.max(NODE_WIDTH, NODE_HEIGHT) * 0.78
const BASE_LINK_DISTANCE = 210
const LOCAL_LINK_DISTANCE = 180
const LOCAL_PADDING = 56
const GROUP_PADDING = 112
const OUTER_LINK_DISTANCE = 360
const GROUP_LABEL_ALLOWANCE = 48
const GROUP_COLLISION_MARGIN = 88
const LAYER_SPACING = 260
const LOCAL_LAYER_SPACING = 210
const ROW_SPACING = 140
const LOCAL_ROW_SPACING = 116
const DIRECTIONAL_BIAS_STRENGTH = 0.14
const HUB_REPULSION_FACTOR = 28
const STRUCTURAL_EDGE_WEIGHT = 1.55
const SECONDARY_EDGE_WEIGHT = 0.9
const GLOBAL_X_FORCE = 0.22
const GLOBAL_Y_FORCE = 0.08
const LOCAL_X_FORCE = 0.3
const LOCAL_Y_FORCE = 0.1
const ORDERING_PASSES = 10

const getEndpointId = (endpoint: string | TNodeDatum) => (typeof endpoint === 'string' ? endpoint : endpoint.id)

const getLinkWeight = (link: { type?: TRbacEdgeType }) =>
  link.type && STRUCTURAL_EDGE_TYPES.has(link.type) ? STRUCTURAL_EDGE_WEIGHT : SECONDARY_EDGE_WEIGHT

const createEmptyScoreMap = (nodeIds: string[]) => new Map(nodeIds.map(nodeId => [nodeId, 0]))

const orderIdsByNeighborhood = (
  nodeIds: string[],
  links: TForceLink[],
  preferredLayer: Map<string, number>,
): Map<string, number> => {
  const positions = new Map(nodeIds.map((nodeId, index) => [nodeId, index]))

  for (let pass = 0; pass < ORDERING_PASSES; pass++) {
    const nextOrder = [...nodeIds].sort((leftId, rightId) => {
      const leftNeighbors = links
        .filter(link => getEndpointId(link.source) === leftId || getEndpointId(link.target) === leftId)
        .map(link => {
          const peerId = getEndpointId(link.source) === leftId ? getEndpointId(link.target) : getEndpointId(link.source)
          return (positions.get(peerId) ?? 0) + (preferredLayer.get(peerId) ?? 0) * 0.35
        })
      const rightNeighbors = links
        .filter(link => getEndpointId(link.source) === rightId || getEndpointId(link.target) === rightId)
        .map(link => {
          const peerId =
            getEndpointId(link.source) === rightId ? getEndpointId(link.target) : getEndpointId(link.source)
          return (positions.get(peerId) ?? 0) + (preferredLayer.get(peerId) ?? 0) * 0.35
        })

      const leftMean =
        leftNeighbors.length > 0
          ? leftNeighbors.reduce((sum, value) => sum + value, 0) / leftNeighbors.length
          : positions.get(leftId) ?? 0
      const rightMean =
        rightNeighbors.length > 0
          ? rightNeighbors.reduce((sum, value) => sum + value, 0) / rightNeighbors.length
          : positions.get(rightId) ?? 0

      if (leftMean === rightMean) {
        return (preferredLayer.get(leftId) ?? 0) - (preferredLayer.get(rightId) ?? 0)
      }

      return leftMean - rightMean
    })

    nextOrder.forEach((nodeId, index) => positions.set(nodeId, index))
  }

  return positions
}

const buildGraphModel = (
  nodeIds: string[],
  links: TForceLink[],
  namespaceMap: Map<string, string | undefined>,
): TGraphModel => {
  const incoming = new Map<string, number[]>()
  const outgoing = new Map<string, number[]>()
  const nodeDegree = new Map<string, number>()
  const layerScores = createEmptyScoreMap(nodeIds)

  nodeIds.forEach(nodeId => {
    incoming.set(nodeId, [])
    outgoing.set(nodeId, [])
    nodeDegree.set(nodeId, 0)
  })

  links.forEach(link => {
    const sourceId = getEndpointId(link.source)
    const targetId = getEndpointId(link.target)
    const weight = getLinkWeight(link)

    outgoing.get(sourceId)?.push(weight)
    incoming.get(targetId)?.push(weight)
    nodeDegree.set(sourceId, (nodeDegree.get(sourceId) ?? 0) + 1)
    nodeDegree.set(targetId, (nodeDegree.get(targetId) ?? 0) + 1)
  })

  for (let pass = 0; pass < ORDERING_PASSES; pass++) {
    const nextScores = new Map<string, number>()

    nodeIds.forEach(nodeId => {
      const incomingSignals = links
        .filter(link => getEndpointId(link.target) === nodeId)
        .map(link => (layerScores.get(getEndpointId(link.source)) ?? 0) + getLinkWeight(link))
      const outgoingSignals = links
        .filter(link => getEndpointId(link.source) === nodeId)
        .map(link => (layerScores.get(getEndpointId(link.target)) ?? 0) - getLinkWeight(link))
      const signals = [...incomingSignals, ...outgoingSignals]

      if (signals.length === 0) {
        nextScores.set(nodeId, 0)
        return
      }

      const averageSignal = signals.reduce((sum, value) => sum + value, 0) / signals.length
      const balance = (outgoing.get(nodeId)?.length ?? 0) - (incoming.get(nodeId)?.length ?? 0)
      nextScores.set(nodeId, averageSignal + balance * DIRECTIONAL_BIAS_STRENGTH)
    })

    layerScores.clear()
    nextScores.forEach((value, key) => {
      layerScores.set(key, value)
    })
  }

  const allScores = [...layerScores.values()]
  const minScore = Math.min(...allScores, 0)
  const maxScore = Math.max(...allScores, 0)
  const scoreRange = Math.max(1, maxScore - minScore)
  const preferredLayer = new Map<string, number>()

  nodeIds.forEach(nodeId => {
    const score = layerScores.get(nodeId) ?? 0
    preferredLayer.set(nodeId, ((score - minScore) / scoreRange - 0.5) * 2)
  })

  const namespaceScores = new Map<string, { total: number; count: number; connectivity: number }>()
  const namespaceConnectivity = new Map<string, number>()

  nodeIds.forEach(nodeId => {
    const namespace = namespaceMap.get(nodeId)
    if (!namespace) return

    const current = namespaceScores.get(namespace) ?? { total: 0, count: 0, connectivity: 0 }
    current.total += preferredLayer.get(nodeId) ?? 0
    current.count += 1
    current.connectivity += nodeDegree.get(nodeId) ?? 0
    namespaceScores.set(namespace, current)
  })

  links.forEach(link => {
    const sourceNs = namespaceMap.get(getEndpointId(link.source))
    const targetNs = namespaceMap.get(getEndpointId(link.target))

    if (!sourceNs || !targetNs || sourceNs === targetNs) return

    namespaceConnectivity.set(sourceNs, (namespaceConnectivity.get(sourceNs) ?? 0) + getLinkWeight(link))
    namespaceConnectivity.set(targetNs, (namespaceConnectivity.get(targetNs) ?? 0) + getLinkWeight(link))
  })

  const namespaceOrder = [...namespaceScores.keys()].sort((leftNs, rightNs) => {
    const leftScore = namespaceScores.get(leftNs)
    const rightScore = namespaceScores.get(rightNs)
    const leftLayer = (leftScore?.total ?? 0) / Math.max(1, leftScore?.count ?? 1)
    const rightLayer = (rightScore?.total ?? 0) / Math.max(1, rightScore?.count ?? 1)

    if (leftLayer !== rightLayer) {
      return leftLayer - rightLayer
    }

    return (namespaceConnectivity.get(rightNs) ?? 0) - (namespaceConnectivity.get(leftNs) ?? 0)
  })

  const namespaceLayer = new Map<string, number>()
  namespaceOrder.forEach(namespace => {
    const score = namespaceScores.get(namespace)
    namespaceLayer.set(namespace, (score?.total ?? 0) / Math.max(1, score?.count ?? 1))
  })

  return { preferredLayer, nodeDegree, namespaceLayer, namespaceOrder }
}

const runSimulation = (
  nodes: TNodeDatum[],
  links: TForceLink[],
  options: {
    center?: { x: number; y: number }
    chargeStrength: (node: TNodeDatum) => number
    collideRadius: (node: TNodeDatum) => number
    linkDistance: (link: TForceLink) => number
    linkStrength: (link: TForceLink) => number
    xTarget?: (node: TNodeDatum) => number
    yTarget?: (node: TNodeDatum) => number
    xStrength?: (node: TNodeDatum) => number
    yStrength?: (node: TNodeDatum) => number
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
    .force('center', forceCenter(options.center?.x ?? 0, options.center?.y ?? 0))

  if (options.xTarget) {
    simulation.force(
      'x',
      forceX<TNodeDatum>(node => options.xTarget?.(node) ?? 0).strength(node => options.xStrength?.(node) ?? 0),
    )
  }

  if (options.yTarget) {
    simulation.force(
      'y',
      forceY<TNodeDatum>(node => options.yTarget?.(node) ?? 0).strength(node => options.yStrength?.(node) ?? 0),
    )
  }

  const totalTicks = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()))
  for (let i = 0; i < totalTicks; i++) {
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
    const left = (node.x ?? 0) - NODE_WIDTH / 2
    const top = (node.y ?? 0) - NODE_HEIGHT / 2
    minX = Math.min(minX, left)
    minY = Math.min(minY, top)
    maxX = Math.max(maxX, left + NODE_WIDTH)
    maxY = Math.max(maxY, top + NODE_HEIGHT)
  })

  const positions: TPositionMap = new Map()
  nodes.forEach(node => {
    const left = (node.x ?? 0) - NODE_WIDTH / 2
    const top = (node.y ?? 0) - NODE_HEIGHT / 2
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

const buildNamespaceLayouts = (
  nodeIds: string[],
  links: TForceLink[],
  namespaceMap: Map<string, string | undefined>,
  graphModel: TGraphModel,
): {
  namespaceLayouts: Map<string, TNamespaceLayout>
  ungroupedNodeIds: string[]
} => {
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

  const namespaceLayouts = new Map<string, TNamespaceLayout>()

  namespaceBuckets.forEach((ids, namespace) => {
    const idSet = new Set(ids)
    const localLinks = links.filter(
      link => idSet.has(getEndpointId(link.source)) && idSet.has(getEndpointId(link.target)),
    )
    const localOrder = orderIdsByNeighborhood(ids, localLinks, graphModel.preferredLayer)
    const localNodes: TNodeDatum[] = ids.map(nodeId => {
      const degree = graphModel.nodeDegree.get(nodeId) ?? 0

      return {
        id: nodeId,
        radius: NODE_COLLIDE_RADIUS + degree * 2,
        charge: -250 - degree * HUB_REPULSION_FACTOR,
        preferredX: (graphModel.preferredLayer.get(nodeId) ?? 0) * LOCAL_LAYER_SPACING,
        preferredY: (localOrder.get(nodeId) ?? 0) * LOCAL_ROW_SPACING,
        xForce: LOCAL_X_FORCE,
        yForce: LOCAL_Y_FORCE,
        x: (graphModel.preferredLayer.get(nodeId) ?? 0) * LOCAL_LAYER_SPACING,
        y: (localOrder.get(nodeId) ?? 0) * LOCAL_ROW_SPACING,
      }
    })

    runSimulation(localNodes, localLinks, {
      chargeStrength: node => node.charge,
      collideRadius: node => node.radius,
      linkDistance: link => LOCAL_LINK_DISTANCE + ((link.weight ?? 1) - 1) * 28,
      linkStrength: link => link.strength ?? 0.38,
      xTarget: node => node.preferredX,
      yTarget: node => node.preferredY,
      xStrength: node => node.xForce,
      yStrength: node => node.yForce,
    })

    namespaceLayouts.set(namespace, normalizeNodePositions(localNodes))
  })

  return { namespaceLayouts, ungroupedNodeIds }
}

const buildGlobalNodes = (
  namespaceLayouts: Map<string, TNamespaceLayout>,
  ungroupedNodeIds: string[],
  graphModel: TGraphModel,
): TNodeDatum[] => {
  const namespaceNodes = [...namespaceLayouts.entries()].map(([namespace, layout]) => {
    const orderIndex = Math.max(0, graphModel.namespaceOrder.indexOf(namespace))

    return {
      id: `ns:${namespace}`,
      radius:
        Math.hypot(layout.width / 2, (layout.height + GROUP_LABEL_ALLOWANCE) / 2) +
        GROUP_PADDING +
        GROUP_COLLISION_MARGIN,
      charge: -2400,
      preferredX: (graphModel.namespaceLayer.get(namespace) ?? 0) * LAYER_SPACING,
      preferredY: orderIndex * ROW_SPACING * 1.4,
      xForce: GLOBAL_X_FORCE,
      yForce: GLOBAL_Y_FORCE,
      x: (graphModel.namespaceLayer.get(namespace) ?? 0) * LAYER_SPACING,
      y: orderIndex * ROW_SPACING * 1.4,
    }
  })

  const ungroupedOrder = new Map(
    [...ungroupedNodeIds]
      .sort(
        (leftId, rightId) =>
          (graphModel.preferredLayer.get(leftId) ?? 0) - (graphModel.preferredLayer.get(rightId) ?? 0),
      )
      .map((nodeId, index) => [nodeId, index] as const),
  )
  const ungroupedNodes = ungroupedNodeIds.map(nodeId => {
    const degree = graphModel.nodeDegree.get(nodeId) ?? 0

    return {
      id: nodeId,
      radius: NODE_COLLIDE_RADIUS + 32 + degree * 2,
      charge: -950 - degree * HUB_REPULSION_FACTOR,
      preferredX: (graphModel.preferredLayer.get(nodeId) ?? 0) * LAYER_SPACING,
      preferredY: (ungroupedOrder.get(nodeId) ?? 0) * ROW_SPACING,
      xForce: GLOBAL_X_FORCE,
      yForce: GLOBAL_Y_FORCE,
      x: (graphModel.preferredLayer.get(nodeId) ?? 0) * LAYER_SPACING,
      y: (ungroupedOrder.get(nodeId) ?? 0) * ROW_SPACING,
    }
  })

  return [...namespaceNodes, ...ungroupedNodes]
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

const createForceLinks = (links: TRbacLayoutLink[]): TForceLink[] =>
  links.map(link => {
    const weight = getLinkWeight(link)
    return {
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
    preferredX: 0,
    preferredY: 0,
    xForce: 0,
    yForce: 0,
  }))

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
    preferredX: 0,
    preferredY: 0,
    xForce: 0,
    yForce: 0,
  }))

  const ungroupedNodes = ungroupedNodeIds.map(nodeId => ({
    id: nodeId,
    radius: NODE_COLLIDE_RADIUS + 32,
    charge: -900,
    preferredX: 0,
    preferredY: 0,
    xForce: 0,
    yForce: 0,
  }))

  return [...namespaceNodes, ...ungroupedNodes]
}

const layoutRbacGraphLegacy = (
  nodeIds: string[],
  forceLinks: TForceLink[],
  namespaceMap?: Map<string, string | undefined>,
): TPositionMap => {
  if (!namespaceMap) {
    return layoutFlatGraphLegacy(nodeIds, forceLinks)
  }

  const { namespaceLayouts, ungroupedNodeIds } = buildNamespaceLayoutsLegacy(nodeIds, forceLinks, namespaceMap)
  if (namespaceLayouts.size === 0) {
    return layoutFlatGraphLegacy(nodeIds, forceLinks)
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

  return positions
}

const layoutFlatGraph = (nodeIds: string[], links: TForceLink[], graphModel: TGraphModel): TPositionMap => {
  const order = orderIdsByNeighborhood(nodeIds, links, graphModel.preferredLayer)
  const nodes: TNodeDatum[] = nodeIds.map(nodeId => {
    const degree = graphModel.nodeDegree.get(nodeId) ?? 0

    return {
      id: nodeId,
      radius: NODE_COLLIDE_RADIUS + degree * 2,
      charge: -320 - degree * HUB_REPULSION_FACTOR,
      preferredX: (graphModel.preferredLayer.get(nodeId) ?? 0) * LAYER_SPACING,
      preferredY: (order.get(nodeId) ?? 0) * ROW_SPACING,
      xForce: GLOBAL_X_FORCE,
      yForce: GLOBAL_Y_FORCE,
      x: (graphModel.preferredLayer.get(nodeId) ?? 0) * LAYER_SPACING,
      y: (order.get(nodeId) ?? 0) * ROW_SPACING,
    }
  })

  runSimulation(nodes, links, {
    chargeStrength: node => node.charge,
    collideRadius: node => node.radius,
    linkDistance: link => BASE_LINK_DISTANCE + ((link.weight ?? 1) - 1) * 34,
    linkStrength: link => link.strength ?? 0.32,
    xTarget: node => node.preferredX,
    yTarget: node => node.preferredY,
    xStrength: node => node.xForce,
    yStrength: node => node.yForce,
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

export const layoutRbacGraph = async (
  nodeIds: string[],
  links: TRbacLayoutLink[],
  namespaceMap?: Map<string, string | undefined>,
  options: TLayoutOptions = {},
): Promise<TPositionMap> => {
  const effectiveNamespaceMap = namespaceMap ?? new Map<string, string | undefined>()
  const forceLinks = createForceLinks(links)

  if (!options.reduceEdgeCrossings) {
    return layoutRbacGraphLegacy(nodeIds, forceLinks, namespaceMap)
  }

  const graphModel = buildGraphModel(nodeIds, forceLinks, effectiveNamespaceMap)

  if (!namespaceMap) {
    return layoutFlatGraph(nodeIds, forceLinks, graphModel)
  }

  const { namespaceLayouts, ungroupedNodeIds } = buildNamespaceLayouts(nodeIds, forceLinks, namespaceMap, graphModel)

  if (namespaceLayouts.size === 0) {
    return layoutFlatGraph(nodeIds, forceLinks, graphModel)
  }

  const globalNodes = buildGlobalNodes(namespaceLayouts, ungroupedNodeIds, graphModel)
  const globalLinks = buildGlobalLinks(forceLinks, namespaceMap)

  runSimulation(globalNodes, globalLinks, {
    chargeStrength: node => node.charge,
    collideRadius: node => node.radius,
    linkDistance: link => OUTER_LINK_DISTANCE + ((link.weight ?? 1) - 1) * 42,
    linkStrength: link => Math.min(0.6, link.strength ?? 0.24),
    xTarget: node => node.preferredX,
    yTarget: node => node.preferredY,
    xStrength: node => node.xForce,
    yStrength: node => node.yForce,
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

  return positions
}
