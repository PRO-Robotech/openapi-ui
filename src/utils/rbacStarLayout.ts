/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceX,
  forceY,
  type SimulationNodeDatum,
  type SimulationLinkDatum,
} from 'd3-force'
import type { TRbacGraph, TRbacNode, TRbacEdge } from 'localTypes/rbacGraph'
import type { TPositionMap } from './rbacForceLayout'

const NODE_W = 260
const NODE_H = 80
const HW = NODE_W / 2
const HH = NODE_H / 2

const SIM_ITERS = 1200
const CHARGE = -5000
const STRUCT_DIST = 320
const STRUCT_STR = 0.8
const AGG_DIST = 500
const AGG_STR = 0.08
const ALIGN_DIST = STRUCT_DIST * 2
const ALIGN_STR = 0.25
const AVOID_THRESHOLD = 250
const AVOID_STRENGTH = 1.8
const RECT_PAD = 18
const COMP_PAD = 60

type TSimNode = SimulationNodeDatum & { id: string }
type TTypedLink = SimulationLinkDatum<TSimNode> & { dist: number; str: number; virtual?: boolean }
type TBBox = { minX: number; minY: number; maxX: number; maxY: number; nodeIndices: number[] }

const SUBJECT_TYPES = new Set<TRbacNode['type']>(['subject'])
const BINDING_TYPES = new Set<TRbacNode['type']>(['clusterRoleBinding', 'roleBinding'])

const createEdgeAvoidForce = (realLinks: TTypedLink[], threshold: number, strength: number) => {
  let nodes: TSimNode[] = []

  const force = (alpha: number) => {
    const k = strength * Math.max(alpha, 0.04)
    realLinks.forEach(link => {
      const source = link.source as TSimNode
      const target = link.target as TSimNode
      const sx = source.x ?? 0
      const sy = source.y ?? 0
      const tx = target.x ?? 0
      const ty = target.y ?? 0
      const edgeDx = tx - sx
      const edgeDy = ty - sy
      const edgeLengthSq = edgeDx * edgeDx + edgeDy * edgeDy
      if (edgeLengthSq < 1) return

      nodes.forEach(node => {
        if (node === source || node === target) return
        const nx = node.x ?? 0
        const ny = node.y ?? 0
        const px = nx - sx
        const py = ny - sy
        const projection = (px * edgeDx + py * edgeDy) / edgeLengthSq
        if (projection < 0.08 || projection > 0.92) return

        const cx = sx + projection * edgeDx
        const cy = sy + projection * edgeDy
        const dx = nx - cx
        const dy = ny - cy
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance > threshold || distance < 0.01) return

        const factor = k * (1 - distance / threshold) * (1 - distance / threshold)
        const ux = dx / distance
        const uy = dy / distance
        node.vx = (node.vx ?? 0) + ux * factor
        node.vy = (node.vy ?? 0) + uy * factor
      })
    })
  }

  force.initialize = (_nodes: TSimNode[]) => {
    nodes = _nodes
  }

  return force
}

const createRectCollideForce = (strength: number) => {
  let nodes: TSimNode[] = []

  const force = (alpha: number) => {
    const k = strength * Math.max(alpha, 0.05)
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]
        const b = nodes[j]
        const ax = a.x ?? 0
        const ay = a.y ?? 0
        const bx = b.x ?? 0
        const by = b.y ?? 0

        const overlapX = HW + HW + RECT_PAD - Math.abs(bx - ax)
        const overlapY = HH + HH + RECT_PAD - Math.abs(by - ay)
        if (overlapX <= 0 || overlapY <= 0) continue

        if (overlapX < overlapY) {
          const sign = bx > ax ? 1 : -1
          const push = overlapX * 0.5 * k
          a.vx = (a.vx ?? 0) - sign * push
          b.vx = (b.vx ?? 0) + sign * push
        } else {
          const sign = by > ay ? 1 : -1
          const push = overlapY * 0.5 * k
          a.vy = (a.vy ?? 0) - sign * push
          b.vy = (b.vy ?? 0) + sign * push
        }
      }
    }
  }

  force.initialize = (_nodes: TSimNode[]) => {
    nodes = _nodes
  }

  return force
}

const resolveRectOverlaps = (nodes: TSimNode[]) => {
  const gap = 20
  for (let pass = 0; pass < 60; pass += 1) {
    let moved = false
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]
        const b = nodes[j]
        const ax = a.x ?? 0
        const ay = a.y ?? 0
        const bx = b.x ?? 0
        const by = b.y ?? 0

        const overlapX = HW + HW + gap - Math.abs(bx - ax)
        const overlapY = HH + HH + gap - Math.abs(by - ay)
        if (overlapX <= 0 || overlapY <= 0) continue

        moved = true
        if (overlapX < overlapY) {
          const sign = bx >= ax ? 1 : -1
          const push = overlapX / 2 + 1
          a.x = ax - sign * push
          b.x = bx + sign * push
        } else {
          const sign = by >= ay ? 1 : -1
          const push = overlapY / 2 + 1
          a.y = ay - sign * push
          b.y = by + sign * push
        }
      }
    }
    if (!moved) break
  }
}

const findStructuralComponents = (nodes: TSimNode[], edges: TRbacEdge[]): number[][] => {
  const idToIndex = new Map<string, number>()
  nodes.forEach((node, index) => idToIndex.set(node.id, index))

  const adjacency = new Map<number, Set<number>>()
  for (let i = 0; i < nodes.length; i += 1) adjacency.set(i, new Set())

  edges.forEach(edge => {
    if (edge.type === 'aggregates' || edge.type === 'aggregates-source' || edge.type === 'aggregates-target') return
    const a = idToIndex.get(edge.from)
    const b = idToIndex.get(edge.to)
    if (a === undefined || b === undefined) return
    adjacency.get(a)?.add(b)
    adjacency.get(b)?.add(a)
  })

  const visited = new Set<number>()
  const components: number[][] = []

  for (let i = 0; i < nodes.length; i += 1) {
    if (visited.has(i)) continue
    const queue = [i]
    const component: number[] = []
    while (queue.length > 0) {
      const current = queue.pop()!
      if (visited.has(current)) continue
      visited.add(current)
      component.push(current)
      adjacency.get(current)?.forEach(neighbor => {
        if (!visited.has(neighbor)) queue.push(neighbor)
      })
    }
    components.push(component)
  }

  return components
}

const createCenterSubjectsForce = (simNodes: TSimNode[], nodeMap: Map<string, TRbacNode>, edges: TRbacEdge[]) => {
  let nodes: TSimNode[] = []
  const components = findStructuralComponents(simNodes, edges)

  const force = (alpha: number) => {
    const k = alpha * 0.07
    components.forEach(component => {
      if (component.length <= 1) return

      let cx = 0
      let cy = 0
      component.forEach(index => {
        cx += nodes[index].x ?? 0
        cy += nodes[index].y ?? 0
      })
      cx /= component.length
      cy /= component.length

      component.forEach(index => {
        const node = nodeMap.get(simNodes[index].id)
        if (!node) return

        let pull = -k * 0.3
        if (SUBJECT_TYPES.has(node.type)) {
          pull = k
        } else if (BINDING_TYPES.has(node.type)) {
          pull = k * 0.15
        }

        nodes[index].vx = (nodes[index].vx ?? 0) + (cx - (nodes[index].x ?? 0)) * pull
        nodes[index].vy = (nodes[index].vy ?? 0) + (cy - (nodes[index].y ?? 0)) * pull
      })
    })
  }

  force.initialize = (_nodes: TSimNode[]) => {
    nodes = _nodes
  }

  return force
}

const computeBBox = (nodes: TSimNode[], indices: number[]): TBBox => {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  indices.forEach(index => {
    const x = nodes[index].x ?? 0
    const y = nodes[index].y ?? 0
    minX = Math.min(minX, x - HW)
    minY = Math.min(minY, y - HH)
    maxX = Math.max(maxX, x + HW)
    maxY = Math.max(maxY, y + HH)
  })

  return { minX, minY, maxX, maxY, nodeIndices: indices }
}

const boxesOverlap = (a: TBBox, b: TBBox) =>
  a.minX - COMP_PAD < b.maxX && a.maxX + COMP_PAD > b.minX && a.minY - COMP_PAD < b.maxY && a.maxY + COMP_PAD > b.minY

const separateComponents = (nodes: TSimNode[], edges: TRbacEdge[]) => {
  const components = findStructuralComponents(nodes, edges)
  if (components.length <= 1) return

  for (let pass = 0; pass < 50; pass += 1) {
    const boxes = components.map(component => computeBBox(nodes, component))
    let moved = false

    for (let i = 0; i < boxes.length; i += 1) {
      for (let j = i + 1; j < boxes.length; j += 1) {
        if (!boxesOverlap(boxes[i], boxes[j])) continue
        moved = true

        const a = boxes[i]
        const b = boxes[j]
        const acx = (a.minX + a.maxX) / 2
        const acy = (a.minY + a.maxY) / 2
        const bcx = (b.minX + b.maxX) / 2
        const bcy = (b.minY + b.maxY) / 2

        let dx = bcx - acx
        let dy = bcy - acy
        const distance = Math.sqrt(dx * dx + dy * dy) || 1
        dx /= distance
        dy /= distance

        const overlapX = (a.maxX - a.minX + (b.maxX - b.minX)) / 2 + COMP_PAD - Math.abs(bcx - acx)
        const overlapY = (a.maxY - a.minY + (b.maxY - b.minY)) / 2 + COMP_PAD - Math.abs(bcy - acy)
        const push = Math.min(overlapX, overlapY) / 2 + 10

        const smaller = a.nodeIndices.length <= b.nodeIndices.length ? a : b
        const sign = a.nodeIndices.length <= b.nodeIndices.length ? -1 : 1
        smaller.nodeIndices.forEach(index => {
          nodes[index].x = (nodes[index].x ?? 0) + sign * dx * push
          nodes[index].y = (nodes[index].y ?? 0) + sign * dy * push
        })
      }
    }

    if (!moved) break
  }
}

const resolveFinalNodeOverlaps = (nodes: TSimNode[]) => {
  const gap = 20

  for (let pass = 0; pass < 80; pass += 1) {
    let moved = false
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i]
        const b = nodes[j]
        const ax = a.x ?? 0
        const ay = a.y ?? 0
        const bx = b.x ?? 0
        const by = b.y ?? 0
        const overlapX = HW + HW + gap - Math.abs(bx - ax)
        const overlapY = HH + HH + gap - Math.abs(by - ay)
        if (overlapX <= 0 || overlapY <= 0) continue

        moved = true
        if (overlapX < overlapY) {
          const sign = bx >= ax ? 1 : -1
          const push = overlapX + 2
          a.x = ax - sign * push * 0.5
          b.x = bx + sign * push * 0.5
        } else {
          const sign = by >= ay ? 1 : -1
          const push = overlapY + 2
          a.y = ay - sign * push * 0.5
          b.y = by + sign * push * 0.5
        }
      }
    }
    if (!moved) break
  }
}

export const layoutRbacGraphStar = (graph: TRbacGraph): TPositionMap => {
  const nodeMap = new Map(graph.nodes.map(node => [node.id, node] as const))
  const simNodes: TSimNode[] = graph.nodes.map(node => ({
    id: node.id,
    x: (Math.random() - 0.5) * 500,
    y: (Math.random() - 0.5) * 500,
  }))
  const idToIndex = new Map(simNodes.map((node, index) => [node.id, index] as const))

  const realLinks: TTypedLink[] = []
  graph.edges.forEach(edge => {
    const sourceIndex = idToIndex.get(edge.from)
    const targetIndex = idToIndex.get(edge.to)
    if (sourceIndex === undefined || targetIndex === undefined) return
    const isAggregate =
      edge.type === 'aggregates' || edge.type === 'aggregates-source' || edge.type === 'aggregates-target'
    realLinks.push({
      source: sourceIndex,
      target: targetIndex,
      dist: isAggregate ? AGG_DIST : STRUCT_DIST,
      str: isAggregate ? AGG_STR : STRUCT_STR,
    })
  })

  const bindingToRole = new Map<string, string>()
  const bindingToSubject = new Map<string, string>()
  graph.edges.forEach(edge => {
    if (edge.type === 'grants') bindingToRole.set(edge.to, edge.from)
    if (edge.type === 'subjects') bindingToSubject.set(edge.from, edge.to)
  })

  const virtualLinks: TTypedLink[] = []
  bindingToRole.forEach((roleId, bindingId) => {
    const subjectId = bindingToSubject.get(bindingId)
    if (!subjectId) return
    const roleIndex = idToIndex.get(roleId)
    const subjectIndex = idToIndex.get(subjectId)
    if (roleIndex === undefined || subjectIndex === undefined) return
    virtualLinks.push({
      source: roleIndex,
      target: subjectIndex,
      dist: ALIGN_DIST,
      str: ALIGN_STR,
      virtual: true,
    })
  })

  const seenVirtual = new Set<string>()
  const dedupVirtual = virtualLinks.filter(link => {
    const key = `${link.source}-${link.target}`
    if (seenVirtual.has(key)) return false
    seenVirtual.add(key)
    return true
  })

  const simulation = forceSimulation<TSimNode>(simNodes)
    .force(
      'link',
      forceLink<TSimNode, TTypedLink>([...realLinks, ...dedupVirtual])
        .distance(link => link.dist)
        .strength(link => link.str),
    )
    .force('charge', forceManyBody<TSimNode>().strength(CHARGE).distanceMax(2500))
    .force('rectCollide', createRectCollideForce(1) as never)
    .force('center', forceCenter(0, 0).strength(0.015))
    .force('x', forceX<TSimNode>(0).strength(0.004))
    .force('y', forceY<TSimNode>(0).strength(0.004))
    .force('edgeAvoid', createEdgeAvoidForce(realLinks, AVOID_THRESHOLD, AVOID_STRENGTH) as never)
    .force('centerSubjects', createCenterSubjectsForce(simNodes, nodeMap, graph.edges) as never)

  simulation.stop()
  for (let i = 0; i < SIM_ITERS; i += 1) simulation.tick()

  separateComponents(simNodes, graph.edges)
  resolveRectOverlaps(simNodes)
  resolveFinalNodeOverlaps(simNodes)

  return new Map(simNodes.map(node => [node.id, { x: (node.x ?? 0) - HW, y: (node.y ?? 0) - HH }] as const))
}
