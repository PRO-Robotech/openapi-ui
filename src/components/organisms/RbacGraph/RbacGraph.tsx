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
import { useKinds, useK8sSmartResource } from '@prorobotech/openapi-k8s-toolkit'
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
type TNonResourceUrlItem = { url: string; verbs: string[]; roles: string[] }
type TNonResourceUrlList = {
  items: TNonResourceUrlItem[]
}
const hasWildcard = (value: string) => value.includes('*')
const toSortedOptions = (values: Set<string>) =>
  Array.from(values)
    .sort((a, b) => a.localeCompare(b))
    .map(value => ({ value, label: value }))

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
  const {
    data: nonResourceUrlsData,
    isLoading: nonResourceUrlsLoading,
    error: nonResourceUrlsError,
  } = useK8sSmartResource<TNonResourceUrlList>({
    cluster: clusterId,
    apiGroup: 'rbacgraph.incloud.io',
    apiVersion: 'v1alpha1',
    plural: 'nonresourceurls',
    isEnabled: Boolean(clusterId),
  })

  const [selectorSelection, setSelectorSelection] = useState({
    apiGroups: [] as string[],
    apiVersions: [] as string[],
    resources: [] as string[],
    verbs: [] as string[],
    nonResourceURLs: [] as string[],
  })
  const hasResourceFilters = Boolean(
    selectorSelection.apiGroups.length || selectorSelection.apiVersions.length || selectorSelection.resources.length,
  )
  const hasNonResourceFilters = Boolean(selectorSelection.nonResourceURLs.length)

  const selectorRelations = useMemo(() => {
    const kindsWithVersion =
      kindsData?.kindsWithVersion.map(kind => ({
        ...kind,
        version: {
          ...kind.version,
          verbs: (kind.version.verbs ?? []).filter(verb => !hasWildcard(verb)),
        },
      })) ?? []
    const nonResourceItems =
      nonResourceUrlsData?.items
        .filter(item => !hasWildcard(item.url))
        .map(item => ({
          ...item,
          verbs: item.verbs.filter(verb => !hasWildcard(verb)),
        })) ?? []

    const matchesResourceSelection = (
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

    const matchesNonResourceSelection = (
      item: TNonResourceUrlItem,
      selection: {
        nonResourceURLs: string[]
        verbs: string[]
      },
    ) =>
      (selection.nonResourceURLs.length === 0 || selection.nonResourceURLs.includes(item.url)) &&
      (selection.verbs.length === 0 || selection.verbs.some(verb => item.verbs.includes(verb)))

    const collectResourceOptions = (
      selection: {
        apiGroups: string[]
        apiVersions: string[]
        resources: string[]
        verbs: string[]
      },
      ignoredKey?: 'apiGroups' | 'apiVersions' | 'resources' | 'verbs',
    ) => {
      const filteredKinds = kindsWithVersion.filter(kind =>
        matchesResourceSelection(kind, {
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

    const collectNonResourceOptions = (
      selection: {
        nonResourceURLs: string[]
        verbs: string[]
      },
      ignoredKey?: 'nonResourceURLs' | 'verbs',
    ) => {
      const filteredNonResourceItems = nonResourceItems.filter(item =>
        matchesNonResourceSelection(item, {
          nonResourceURLs: ignoredKey === 'nonResourceURLs' ? [] : selection.nonResourceURLs,
          verbs: ignoredKey === 'verbs' ? [] : selection.verbs,
        }),
      )

      return {
        nonResourceURLs: new Set(filteredNonResourceItems.map(item => item.url)),
        verbs: new Set(filteredNonResourceItems.flatMap(item => item.verbs)),
      }
    }

    return {
      collectResourceOptions,
      collectNonResourceOptions,
    }
  }, [kindsData?.kindsWithVersion, nonResourceUrlsData?.items])

  const selectorConstraints = useMemo(() => {
    const resourceOptionsForGroups = selectorRelations.collectResourceOptions(selectorSelection, 'apiGroups')
    const resourceOptionsForVersions = selectorRelations.collectResourceOptions(selectorSelection, 'apiVersions')
    const resourceOptionsForResources = selectorRelations.collectResourceOptions(selectorSelection, 'resources')
    const resourceOptionsForVerbs = selectorRelations.collectResourceOptions(selectorSelection, 'verbs')
    const nonResourceOptionsForUrls = selectorRelations.collectNonResourceOptions(selectorSelection, 'nonResourceURLs')
    const nonResourceOptionsForVerbs = selectorRelations.collectNonResourceOptions(selectorSelection, 'verbs')
    const allowedVerbs = new Set<string>()

    if (hasResourceFilters || !hasNonResourceFilters) {
      resourceOptionsForVerbs.verbs.forEach(verb => allowedVerbs.add(verb))
    }

    if (hasNonResourceFilters || !hasResourceFilters) {
      nonResourceOptionsForVerbs.verbs.forEach(verb => allowedVerbs.add(verb))
    }

    return {
      allowedGroups: resourceOptionsForGroups.apiGroups,
      allowedVersions: resourceOptionsForVersions.apiVersions,
      allowedResources: resourceOptionsForResources.resources,
      allowedVerbs,
      allowedNonResourceURLs: nonResourceOptionsForUrls.nonResourceURLs,
    }
  }, [hasNonResourceFilters, hasResourceFilters, selectorRelations, selectorSelection])

  const selectorOptions = useMemo(
    () => ({
      apiGroups: Array.from(selectorConstraints.allowedGroups)
        .sort((a, b) => a.localeCompare(b))
        .map(value => ({ value, label: value || '(core)' })),
      apiVersions: toSortedOptions(selectorConstraints.allowedVersions),
      resources: toSortedOptions(selectorConstraints.allowedResources),
      verbs: toSortedOptions(selectorConstraints.allowedVerbs),
      nonResourceURLs: toSortedOptions(selectorConstraints.allowedNonResourceURLs),
    }),
    [
      selectorConstraints.allowedGroups,
      selectorConstraints.allowedNonResourceURLs,
      selectorConstraints.allowedResources,
      selectorConstraints.allowedVerbs,
      selectorConstraints.allowedVersions,
    ],
  )

  const handleSelectorChange = useCallback(
    (sel: typeof selectorSelection) => {
      const nextApiGroups = sel.apiGroups.filter(group =>
        selectorRelations.collectResourceOptions(sel, 'apiGroups').apiGroups.has(group),
      )
      const nextApiVersions = sel.apiVersions.filter(version =>
        selectorRelations
          .collectResourceOptions({ ...sel, apiGroups: nextApiGroups }, 'apiVersions')
          .apiVersions.has(version),
      )
      const nextResources = sel.resources.filter(resource =>
        selectorRelations
          .collectResourceOptions({ ...sel, apiGroups: nextApiGroups, apiVersions: nextApiVersions }, 'resources')
          .resources.has(resource),
      )
      const nextHasResourceFilters = Boolean(nextApiGroups.length || nextApiVersions.length || nextResources.length)
      const nextHasNonResourceFilters = Boolean(sel.nonResourceURLs.length)
      const allowedVerbs = new Set<string>()
      const resourceVerbs = selectorRelations.collectResourceOptions(
        { ...sel, apiGroups: nextApiGroups, apiVersions: nextApiVersions, resources: nextResources },
        'verbs',
      ).verbs
      const nonResourceVerbs = selectorRelations.collectNonResourceOptions({ ...sel }, 'verbs').verbs

      if (nextHasResourceFilters || !nextHasNonResourceFilters) {
        resourceVerbs.forEach(verb => allowedVerbs.add(verb))
      }

      if (nextHasNonResourceFilters || !nextHasResourceFilters) {
        nonResourceVerbs.forEach(verb => allowedVerbs.add(verb))
      }

      const nextVerbs = sel.verbs.filter(verb => allowedVerbs.has(verb))
      const nextNonResourceURLs = sel.nonResourceURLs.filter(nonResourceURL =>
        selectorRelations
          .collectNonResourceOptions(
            {
              nonResourceURLs: sel.nonResourceURLs,
              verbs: nextVerbs,
            },
            'nonResourceURLs',
          )
          .nonResourceURLs.has(nonResourceURL),
      )
      const nextSelection = {
        ...sel,
        apiGroups: nextApiGroups,
        apiVersions: nextApiVersions,
        resources: nextResources,
        verbs: nextVerbs,
        nonResourceURLs: nextNonResourceURLs,
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
      nonResourceURLs: selectorSelection.nonResourceURLs.filter(nonResourceURL =>
        selectorConstraints.allowedNonResourceURLs.has(nonResourceURL),
      ),
    }

    const selectionChanged =
      normalizedSelection.apiGroups.length !== selectorSelection.apiGroups.length ||
      normalizedSelection.apiVersions.length !== selectorSelection.apiVersions.length ||
      normalizedSelection.resources.length !== selectorSelection.resources.length ||
      normalizedSelection.verbs.length !== selectorSelection.verbs.length ||
      normalizedSelection.nonResourceURLs.length !== selectorSelection.nonResourceURLs.length

    if (selectionChanged) {
      handleSelectorChange(normalizedSelection)
    }
  }, [
    handleSelectorChange,
    kindsData?.kindsWithVersion,
    selectorConstraints.allowedGroups,
    selectorConstraints.allowedNonResourceURLs,
    selectorConstraints.allowedResources,
    selectorConstraints.allowedVerbs,
    selectorConstraints.allowedVersions,
    nonResourceUrlsData?.items,
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
  const nonResourceUrlsErrorMessage =
    typeof nonResourceUrlsError === 'string' ? nonResourceUrlsError : nonResourceUrlsError?.message

  return (
    <Styled.Container>
      <Card size="small" styles={{ body: { padding: 0 } }}>
        <RbacQueryForm
          value={payload}
          selectorLoading={kindsLoading || nonResourceUrlsLoading}
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

      {nonResourceUrlsError && (
        <Alert
          type="error"
          message="Error while loading non-resource URLs"
          description={nonResourceUrlsErrorMessage}
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
