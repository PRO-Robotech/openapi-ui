import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
  type SimulationNodeDatum,
} from 'd3-force'

type TForceLink = { source: string; target: string; weight?: number }
type TPositionMap = Map<string, { x: number; y: number }>
type TNamespaceLayout = {
  width: number
  height: number
  positions: TPositionMap
}
type TLocalNode = SimulationNodeDatum & { id: string }
type TGlobalNode = SimulationNodeDatum & {
  id: string
  radius: number
  charge: number
}

const NODE_WIDTH = 220
const NODE_HEIGHT = 80
const NODE_COLLIDE_RADIUS = Math.max(NODE_WIDTH, NODE_HEIGHT) * 0.78
const LOCAL_LINK_DISTANCE = 170
const LOCAL_PADDING = 56
const GROUP_PADDING = 96
const OUTER_LINK_DISTANCE = 320
const GROUP_LABEL_ALLOWANCE = 48
const GROUP_COLLISION_MARGIN = 72

const runSimulation = <TNode extends SimulationNodeDatum>(
  nodes: TNode[],
  links: TForceLink[],
  options: {
    chargeStrength: number | ((node: TNode) => number)
    collideRadius: number | ((node: TNode) => number)
    linkDistance: number | ((link: TForceLink) => number)
  },
): TNode[] => {
  const simulation = forceSimulation<TNode>(nodes)
    .force(
      'link',
      forceLink<TNode, TForceLink>(links)
        .id(node => (node as TNode & { id: string }).id)
        .distance(link =>
          typeof options.linkDistance === 'function' ? options.linkDistance(link) : options.linkDistance,
        ),
    )
    .force(
      'charge',
      forceManyBody<TNode>().strength(node =>
        typeof options.chargeStrength === 'function' ? options.chargeStrength(node) : options.chargeStrength,
      ),
    )
    .force(
      'collide',
      forceCollide<TNode>().radius(node =>
        typeof options.collideRadius === 'function' ? options.collideRadius(node) : options.collideRadius,
      ),
    )
    .force('center', forceCenter(0, 0))

  const totalTicks = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()))
  for (let i = 0; i < totalTicks; i++) {
    simulation.tick()
  }
  simulation.stop()

  return nodes
}

const normalizeNodePositions = (nodes: TLocalNode[]): TNamespaceLayout => {
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
    const localNodes: TLocalNode[] = ids.map(id => ({ id }))
    const localLinks = links.filter(link => idSet.has(link.source) && idSet.has(link.target))

    runSimulation(localNodes, localLinks, {
      chargeStrength: -250,
      collideRadius: NODE_COLLIDE_RADIUS,
      linkDistance: LOCAL_LINK_DISTANCE,
    })

    namespaceLayouts.set(namespace, normalizeNodePositions(localNodes))
  })

  return { namespaceLayouts, ungroupedNodeIds }
}

const buildGlobalNodes = (
  namespaceLayouts: Map<string, TNamespaceLayout>,
  ungroupedNodeIds: string[],
): TGlobalNode[] => {
  const namespaceNodes = [...namespaceLayouts.entries()].map(([namespace, layout]) => ({
    id: `ns:${namespace}`,
    radius:
      Math.hypot(layout.width / 2, (layout.height + GROUP_LABEL_ALLOWANCE) / 2) +
      GROUP_PADDING +
      GROUP_COLLISION_MARGIN,
    charge: -2200,
  }))

  const ungroupedNodes = ungroupedNodeIds.map(id => ({
    id,
    radius: NODE_COLLIDE_RADIUS + 32,
    charge: -900,
  }))

  return [...namespaceNodes, ...ungroupedNodes]
}

const collapseEndpoint = (nodeId: string, namespaceMap: Map<string, string | undefined>): string => {
  const namespace = namespaceMap.get(nodeId)
  return namespace ? `ns:${namespace}` : nodeId
}

const buildGlobalLinks = (links: TForceLink[], namespaceMap: Map<string, string | undefined>): TForceLink[] => {
  const groupedLinks = new Map<string, TForceLink>()

  links.forEach(link => {
    const source = collapseEndpoint(link.source, namespaceMap)
    const target = collapseEndpoint(link.target, namespaceMap)
    if (source === target) return

    const [a, b] = source < target ? [source, target] : [target, source]
    const key = `${a}->${b}`
    const current = groupedLinks.get(key)

    if (current) {
      current.weight = (current.weight ?? 1) + 1
    } else {
      groupedLinks.set(key, { source, target, weight: 1 })
    }
  })

  return [...groupedLinks.values()]
}

const layoutFlatGraph = (nodeIds: string[], links: TForceLink[]): TPositionMap => {
  const nodes: TLocalNode[] = nodeIds.map(id => ({ id }))
  runSimulation(nodes, links, {
    chargeStrength: -300,
    collideRadius: NODE_COLLIDE_RADIUS,
    linkDistance: 200,
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
  links: { source: string; target: string }[],
  namespaceMap?: Map<string, string | undefined>,
): Promise<TPositionMap> => {
  const forceLinks: TForceLink[] = links.map(link => ({ source: link.source, target: link.target }))

  if (!namespaceMap) {
    return layoutFlatGraph(nodeIds, forceLinks)
  }

  const { namespaceLayouts, ungroupedNodeIds } = buildNamespaceLayouts(nodeIds, forceLinks, namespaceMap)
  if (namespaceLayouts.size === 0) {
    return layoutFlatGraph(nodeIds, forceLinks)
  }

  const globalNodes = buildGlobalNodes(namespaceLayouts, ungroupedNodeIds)
  const globalLinks = buildGlobalLinks(forceLinks, namespaceMap)

  runSimulation(globalNodes, globalLinks, {
    chargeStrength: node => node.charge,
    collideRadius: node => node.radius,
    linkDistance: link => OUTER_LINK_DISTANCE + ((link.weight ?? 1) - 1) * 36,
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
