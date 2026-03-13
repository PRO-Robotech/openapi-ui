/* eslint-disable max-lines-per-function */
import React, { FC, useState, useCallback, useEffect } from 'react'
import {
  ReactFlow,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  type Node,
  type Edge,
  type NodeTypes,
  type EdgeTypes,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Spin, Card, Divider } from 'antd'
import type {
  TRbacQueryPayload,
  TRbacQueryResponse,
  TRbacGraphOptions,
  TRbacGraph as TGraph,
} from 'localTypes/rbacGraph'
import { useRbacGraphQuery, useRbacSelectorDiscover } from 'hooks/useRbacGraphQuery'
import { layoutRbacGraph } from 'utils/rbacForceLayout'
import { buildRbacFlowModel, applyFocusToModel } from 'utils/rbacFlowAdapter'
import { RbacNodeCard } from './atoms/RbacNodeCard'
import { RbacEdge } from './atoms/RbacEdge'
import { NamespaceGroupNode } from './atoms/NamespaceGroupNode'
import { RbacQueryForm } from './molecules/RbacQueryForm'
import { RbacGraphToggles } from './molecules/RbacGraphToggles'
import { RbacSelectorBuilder } from './molecules/RbacSelectorBuilder'
import { Styled } from './styled'

const nodeTypes: NodeTypes = { rbacCard: RbacNodeCard, namespaceGroup: NamespaceGroupNode }
const edgeTypes: EdgeTypes = { rbacEdge: RbacEdge }

const LEGEND = [
  { label: 'Grants', color: '#0f766e' },
  { label: 'Subjects', color: '#475569' },
  { label: 'Aggregates', color: '#c2410c', dashed: true },
  { label: 'Permissions', color: '#2563eb' },
  { label: 'Runs As', color: '#0ea5a4' },
  { label: 'Owned By', color: '#334155' },
]

const DEFAULT_PAYLOAD: TRbacQueryPayload = {
  spec: {
    selector: { apiGroups: [], resources: [], verbs: [], resourceNames: [], nonResourceURLs: [] },
    matchMode: 'any',
    includeRuleMetadata: true,
    includePods: false,
    includeWorkloads: false,
    podPhaseMode: 'active',
    maxPodsPerSubject: 20,
    maxWorkloadsPerPod: 10,
  },
}

const DEFAULT_OPTIONS: TRbacGraphOptions = {
  showAggregateEdges: true,
  onlyReachable: false,
  showPermissions: false,
  focusMode: false,
  includePods: false,
  includeWorkloads: false,
  runtimeView: 'access',
}

type TRbacGraphProps = { clusterId: string }

const RbacGraphInner: FC<TRbacGraphProps> = ({ clusterId }) => {
  const [payload, setPayload] = useState<TRbacQueryPayload>(DEFAULT_PAYLOAD)
  const [options, setOptions] = useState<TRbacGraphOptions>(DEFAULT_OPTIONS)
  const [focusNodeId, setFocusNodeId] = useState<string | null>(null)
  const [graphData, setGraphData] = useState<TGraph | null>(null)
  const [stats, setStats] = useState<TRbacQueryResponse['stats']>()
  const [layouting, setLayouting] = useState(false)

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])

  const queryMutation = useRbacGraphQuery()
  const discoverMutation = useRbacSelectorDiscover(clusterId)

  const [selectorSelection, setSelectorSelection] = useState({
    verbs: [] as string[],
    apiGroups: [] as string[],
    resources: [] as string[],
    nonResourceURLs: [] as string[],
  })

  const handleSelectorChange = useCallback((sel: typeof selectorSelection) => {
    setSelectorSelection(sel)
    setPayload(prev => ({
      spec: {
        ...prev.spec,
        selector: {
          ...prev.spec.selector,
          verbs: sel.verbs,
          apiGroups: sel.apiGroups,
          resources: sel.resources,
          nonResourceURLs: sel.nonResourceURLs,
        },
      },
    }))
  }, [])

  const handleSubmit = useCallback(() => {
    queryMutation.mutate(payload, {
      onSuccess: (data: TRbacQueryResponse) => {
        setGraphData(data.graph)
        setStats(data.stats)
        setFocusNodeId(null)
      },
    })
  }, [payload, queryMutation])

  useEffect(() => {
    if (!graphData) return
    setLayouting(true)
    const links = graphData.edges.map(e => ({ source: e.from, target: e.to }))
    const nodeIds = graphData.nodes.map(n => n.id)
    const namespaceMap = new Map(graphData.nodes.map(node => [node.id, node.namespace]))
    layoutRbacGraph(nodeIds, links, namespaceMap).then(positions => {
      const model = buildRbacFlowModel(graphData, positions, options)
      const focused = applyFocusToModel(model.nodes, model.edges, focusNodeId, options.focusMode)
      setNodes(focused.nodes)
      setEdges(focused.edges)
      setLayouting(false)
    })
  }, [graphData, options, focusNodeId, setNodes, setEdges])

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: { id: string }) => {
      if (node.id.startsWith('ns-group-')) return
      if (options.focusMode) {
        setFocusNodeId(prev => (prev === node.id ? null : node.id))
      }
    },
    [options.focusMode],
  )

  const isLoading = queryMutation.isPending || layouting

  return (
    <Styled.Container>
      <Card size="small" styles={{ body: { padding: 0 } }}>
        <RbacSelectorBuilder
          discovered={discoverMutation.data}
          onDiscover={() => discoverMutation.mutate()}
          discoverLoading={discoverMutation.isPending}
          selected={selectorSelection}
          onSelectionChange={handleSelectorChange}
        />
        <Divider style={{ margin: 0 }} />
        <RbacQueryForm
          value={payload}
          onChange={setPayload}
          onSubmit={handleSubmit}
          loading={queryMutation.isPending}
        />
      </Card>

      <Card size="small" styles={{ body: { padding: 0 } }} style={{ marginTop: 8 }}>
        <RbacGraphToggles value={options} onChange={setOptions} />
      </Card>

      {stats && (
        <Styled.StatsBar>
          <span>Roles: {stats.matchedRoles}</span>
          <span>Bindings: {stats.matchedBindings}</span>
          <span>Subjects: {stats.matchedSubjects}</span>
        </Styled.StatsBar>
      )}

      <Styled.LegendRow>
        {LEGEND.map(l => (
          <Styled.LegendItem key={l.label}>
            <Styled.LegendSwatch $color={l.color} $dashed={l.dashed} />
            {l.label}
          </Styled.LegendItem>
        ))}
      </Styled.LegendRow>

      {isLoading ? (
        <Styled.SpinContainer>
          <Spin tip="Computing layout..." />
        </Styled.SpinContainer>
      ) : (
        <Styled.CanvasWrapper>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodeClick={handleNodeClick}
            fitView
            minZoom={0.05}
            proOptions={{ hideAttribution: true }}
          >
            <MiniMap />
            <Controls />
          </ReactFlow>
        </Styled.CanvasWrapper>
      )}
    </Styled.Container>
  )
}

export const RbacGraph: FC<TRbacGraphProps> = props => (
  <ReactFlowProvider>
    <RbacGraphInner {...props} />
  </ReactFlowProvider>
)
