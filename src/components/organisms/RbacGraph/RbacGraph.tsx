/* eslint-disable max-lines-per-function */
import React, { FC, useState, useCallback, useEffect, useMemo } from 'react'
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
import { useKinds } from '@prorobotech/openapi-k8s-toolkit'
import '@xyflow/react/dist/style.css'
import { Spin, Card, Alert } from 'antd'
import type {
  TRbacQueryPayload,
  TRbacQueryResponse,
  TRbacGraphOptions,
  TRbacGraph as TGraph,
} from 'localTypes/rbacGraph'
import { useRbacGraphQuery } from 'hooks/useRbacGraphQuery'
import { layoutRbacGraph } from 'utils/rbacForceLayout'
import { buildRbacFlowModel, applyFocusToModel } from 'utils/rbacFlowAdapter'
import { RbacNodeCard } from './atoms/RbacNodeCard'
import { RbacEdge } from './atoms/RbacEdge'
import { NamespaceGroupNode } from './atoms/NamespaceGroupNode'
import { RbacQueryForm } from './molecules/RbacQueryForm'
import { RbacGraphToggles } from './molecules/RbacGraphToggles'
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

const NON_RESOURCE_URL_OPTIONS = [
  '/',
  '/api',
  '/api/*',
  '/apis',
  '/apis/*',
  '/healthz',
  '/healthz/*',
  '/livez',
  '/livez/*',
  '/readyz',
  '/readyz/*',
  '/metrics',
  '/metrics/*',
  '/openapi',
  '/openapi/*',
  '/openapi/v2',
  '/openapi/v3',
  '/openapi/v3/*',
  '/version',
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
  const {
    data: kindsData,
    isLoading: kindsLoading,
    error: kindsError,
  } = useKinds({
    cluster: clusterId,
    isEnabled: Boolean(clusterId),
  })

  const [selectorSelection, setSelectorSelection] = useState({
    apiGroups: [] as string[],
    apiVersions: [] as string[],
    resources: [] as string[],
    verbs: [] as string[],
    nonResourceURLs: [] as string[],
  })

  const selectorRelations = useMemo(() => {
    const kindsWithVersion = kindsData?.kindsWithVersion ?? []

    const matchesSelection = (
      kind: (typeof kindsWithVersion)[number],
      selection: {
        apiGroups: string[]
        apiVersions: string[]
        resources: string[]
        verbs: string[]
      },
    ) =>
      (selection.apiGroups.length === 0 || selection.apiGroups.includes(kind.group)) &&
      (selection.apiVersions.length === 0 || selection.apiVersions.includes(kind.version.version)) &&
      (selection.resources.length === 0 || selection.resources.includes(kind.version.resource)) &&
      (selection.verbs.length === 0 || selection.verbs.some(verb => kind.version.verbs?.includes(verb)))

    const collectOptions = (
      selection: {
        apiGroups: string[]
        apiVersions: string[]
        resources: string[]
        verbs: string[]
      },
      ignoredKey?: 'apiGroups' | 'apiVersions' | 'resources' | 'verbs',
    ) => {
      const filteredKinds = kindsWithVersion.filter(kind =>
        matchesSelection(kind, {
          apiGroups: ignoredKey === 'apiGroups' ? [] : selection.apiGroups,
          apiVersions: ignoredKey === 'apiVersions' ? [] : selection.apiVersions,
          resources: ignoredKey === 'resources' ? [] : selection.resources,
          verbs: ignoredKey === 'verbs' ? [] : selection.verbs,
        }),
      )

      return {
        apiGroups: new Set(filteredKinds.map(kind => kind.group)),
        apiVersions: new Set(filteredKinds.map(kind => kind.version.version)),
        resources: new Set(filteredKinds.map(kind => kind.version.resource)),
        verbs: new Set(filteredKinds.flatMap(kind => kind.version.verbs ?? [])),
      }
    }

    return {
      matchesSelection,
      collectOptions,
    }
  }, [kindsData?.kindsWithVersion])

  const selectorConstraints = useMemo(() => {
    const allowedGroups = selectorRelations.collectOptions(selectorSelection, 'apiGroups').apiGroups
    const allowedVersions = selectorRelations.collectOptions(selectorSelection, 'apiVersions').apiVersions
    const allowedResources = selectorRelations.collectOptions(selectorSelection, 'resources').resources
    const allowedVerbs = selectorRelations.collectOptions(selectorSelection, 'verbs').verbs

    return {
      allowedGroups,
      allowedVersions,
      allowedResources,
      allowedVerbs,
    }
  }, [selectorRelations, selectorSelection])

  const selectorOptions = useMemo(
    () => ({
      apiGroups: Array.from(selectorConstraints.allowedGroups)
        .sort((a, b) => a.localeCompare(b))
        .map(value => ({ value, label: value || '(core)' })),
      apiVersions: Array.from(selectorConstraints.allowedVersions)
        .sort((a, b) => a.localeCompare(b))
        .map(value => ({ value, label: value })),
      resources: Array.from(selectorConstraints.allowedResources)
        .sort((a, b) => a.localeCompare(b))
        .map(value => ({ value, label: value })),
      verbs: Array.from(selectorConstraints.allowedVerbs)
        .sort((a, b) => a.localeCompare(b))
        .map(value => ({ value, label: value })),
      nonResourceURLs: NON_RESOURCE_URL_OPTIONS.map(value => ({ value, label: value })),
    }),
    [
      selectorConstraints.allowedGroups,
      selectorConstraints.allowedResources,
      selectorConstraints.allowedVerbs,
      selectorConstraints.allowedVersions,
    ],
  )

  const handleSelectorChange = useCallback(
    (sel: typeof selectorSelection) => {
      const nextApiGroups = sel.apiGroups.filter(group =>
        selectorRelations.collectOptions(sel, 'apiGroups').apiGroups.has(group),
      )
      const nextApiVersions = sel.apiVersions.filter(version =>
        selectorRelations.collectOptions({ ...sel, apiGroups: nextApiGroups }, 'apiVersions').apiVersions.has(version),
      )
      const nextResources = sel.resources.filter(resource =>
        selectorRelations
          .collectOptions({ ...sel, apiGroups: nextApiGroups, apiVersions: nextApiVersions }, 'resources')
          .resources.has(resource),
      )
      const nextVerbs = sel.verbs.filter(verb =>
        selectorRelations
          .collectOptions(
            { ...sel, apiGroups: nextApiGroups, apiVersions: nextApiVersions, resources: nextResources },
            'verbs',
          )
          .verbs.has(verb),
      )
      const nextSelection = {
        ...sel,
        apiGroups: nextApiGroups,
        apiVersions: nextApiVersions,
        resources: nextResources,
        verbs: nextVerbs,
      }

      setSelectorSelection(nextSelection)
      setPayload(prev => ({
        spec: {
          ...prev.spec,
          selector: {
            ...prev.spec.selector,
            verbs: nextSelection.verbs,
            apiGroups: nextSelection.apiGroups,
            resources: nextSelection.resources,
            nonResourceURLs: nextSelection.nonResourceURLs,
          },
        },
      }))
    },
    [selectorRelations],
  )

  useEffect(() => {
    if (!kindsData?.kindsWithVersion) return

    const normalizedSelection = {
      ...selectorSelection,
      apiGroups: selectorSelection.apiGroups.filter(group => selectorConstraints.allowedGroups.has(group)),
      apiVersions: selectorSelection.apiVersions.filter(version => selectorConstraints.allowedVersions.has(version)),
      resources: selectorSelection.resources.filter(resource => selectorConstraints.allowedResources.has(resource)),
      verbs: selectorSelection.verbs.filter(verb => selectorConstraints.allowedVerbs.has(verb)),
    }

    const selectionChanged =
      normalizedSelection.apiGroups.length !== selectorSelection.apiGroups.length ||
      normalizedSelection.apiVersions.length !== selectorSelection.apiVersions.length ||
      normalizedSelection.resources.length !== selectorSelection.resources.length ||
      normalizedSelection.verbs.length !== selectorSelection.verbs.length

    if (selectionChanged) {
      handleSelectorChange(normalizedSelection)
    }
  }, [
    handleSelectorChange,
    kindsData?.kindsWithVersion,
    selectorConstraints.allowedGroups,
    selectorConstraints.allowedResources,
    selectorConstraints.allowedVerbs,
    selectorConstraints.allowedVersions,
    selectorSelection,
  ])

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
        <RbacQueryForm
          value={payload}
          selectorLoading={kindsLoading}
          selectorOptions={selectorOptions}
          selectedApiVersions={selectorSelection.apiVersions}
          onSelectorChange={patch => handleSelectorChange({ ...selectorSelection, ...patch })}
          onChange={setPayload}
          onSubmit={handleSubmit}
          loading={queryMutation.isPending}
        />
      </Card>

      {kindsError && (
        <Alert
          type="error"
          message="Error while loading Kubernetes kinds"
          description={kindsError.message}
          style={{ marginTop: 8 }}
        />
      )}

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
