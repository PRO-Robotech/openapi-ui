/* eslint-disable no-nested-ternary */
/* eslint-disable max-lines-per-function */
import React, { FC, useState, useCallback, useEffect, useMemo, useRef } from 'react'
import {
  ReactFlow,
  MiniMap,
  Controls,
  useReactFlow,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  type Node,
  type Edge,
  type NodeTypes,
  type EdgeTypes,
} from '@xyflow/react'
import { TKindWithVersion, useKinds, useK8sSmartResource } from '@prorobotech/openapi-k8s-toolkit'
import '@xyflow/react/dist/style.css'
import { Alert, Button, Card, Checkbox, Collapse, Empty, Modal, Spin, Tag, Typography, theme } from 'antd'
import { FOOTER_HEIGHT } from 'constants/blocksSizes'
import type {
  TRbacRuleRef,
  TRbacQueryPayload,
  TRbacQueryResponse,
  TRbacGraphOptions,
  TRbacGraph as TGraph,
  TRbacNode,
} from 'localTypes/rbacGraph'
import { useRbacGraphQuery } from 'hooks/useRbacGraphQuery'
import { layoutRbacGraph } from 'utils/rbacForceLayout'
import { layoutRbacGraphStar } from 'utils/rbacStarLayout'
import {
  buildRbacFlowModel,
  applyFocusToModel,
  applyStarSelectionToModel,
  filterGraphByOptions,
} from 'utils/rbacFlowAdapter'
import { RbacNodeCard } from './atoms/RbacNodeCard'
import { RbacResourceLabel } from './atoms/RbacResourceLabel'
import { RbacEdge } from './atoms/RbacEdge'
import { NamespaceGroupNode } from './atoms/NamespaceGroupNode'
import { RbacQueryForm } from './molecules/RbacQueryForm'
import { RbacGraphToggles } from './molecules/RbacGraphToggles'
import { Styled } from './styled'
import { resolveResourceDisplayValue, shouldShowResolvedResourceBadge } from './utils/resourceDisplay'

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
  showRoles: true,
  showBindings: true,
  showSubjects: true,
  showAggregateEdges: true,
  onlyReachable: false,
  showPermissions: false,
  starMode: false,
  focusMode: false,
  reduceEdgeCrossings: false,
  includePods: false,
  includeWorkloads: false,
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

const EMPTY_SELECTOR_SELECTION = {
  apiGroups: [] as string[],
  apiVersions: [] as string[],
  resources: [] as string[],
  verbs: [] as string[],
  nonResourceURLs: [] as string[],
}

type TFlowModel = { nodes: Node[]; edges: Edge[] }
type TRawRuleRef = TRbacRuleRef & {
  apiGroup?: string
  resource?: string
  subresource?: string
  verb?: string
  nonResourceURL?: string
  sourceObjectUID?: string
  sourceRuleIndex?: number
  phantom?: boolean
  expandedRefs?: TRawRuleRef[]
}
type TParsedPermission = {
  id: string
  label: string
  verb: string
  target: string
  ruleKeys: string[]
  apiGroups: string[]
}

type TRoleRuleDetail = {
  key: string
  ruleRef: TRbacRuleRef
  expandedPermissionCount: number
}

type TRoleDetails = {
  node: TRbacNode
  rules: TRoleRuleDetail[]
  permissions: TParsedPermission[]
}

const ROLE_NODE_TYPES = new Set<TRbacNode['type']>(['role', 'clusterRole'])
const sortValues = (values?: string[]) => Array.from(new Set(values ?? [])).sort((a, b) => a.localeCompare(b))
const toRawRuleRef = (ruleRef: TRbacRuleRef): TRawRuleRef => ruleRef as TRawRuleRef
const normalizeResourceValue = (ruleRef: TRawRuleRef) =>
  ruleRef.resource ? `${ruleRef.resource}${ruleRef.subresource ? `/${ruleRef.subresource}` : ''}` : undefined
const mergeValues = (...collections: Array<(string | undefined)[] | undefined>) =>
  sortValues(
    collections
      .flatMap(collection => collection ?? [])
      .map(value => value?.trim())
      .filter((value): value is string => value !== undefined && value.length > 0),
  )
const normalizeRuleRef = (ruleRef: TRawRuleRef): TRbacRuleRef => ({
  apiGroups: mergeValues(ruleRef.apiGroups, ruleRef.apiGroup !== undefined ? [ruleRef.apiGroup] : undefined),
  resources: mergeValues(
    ruleRef.resources,
    normalizeResourceValue(ruleRef) ? [normalizeResourceValue(ruleRef)] : undefined,
  ),
  verbs: mergeValues(ruleRef.verbs, ruleRef.verb !== undefined ? [ruleRef.verb] : undefined),
  resourceNames: sortValues(ruleRef.resourceNames),
  nonResourceURLs: mergeValues(
    ruleRef.nonResourceURLs,
    ruleRef.nonResourceURL !== undefined ? [ruleRef.nonResourceURL] : undefined,
  ),
})
const mergeRuleRefs = (left: TRbacRuleRef, right: TRbacRuleRef): TRbacRuleRef => ({
  apiGroups: mergeValues(left.apiGroups, right.apiGroups),
  resources: mergeValues(left.resources, right.resources),
  verbs: mergeValues(left.verbs, right.verbs),
  resourceNames: mergeValues(left.resourceNames, right.resourceNames),
  nonResourceURLs: mergeValues(left.nonResourceURLs, right.nonResourceURLs),
})
const serializeRuleRef = (ruleRef: TRbacRuleRef) => JSON.stringify(normalizeRuleRef(ruleRef))
const formatJoinedValues = (values?: string[], empty = '*') => {
  const normalized = sortValues(values)
  return normalized.length > 0 ? normalized.join(', ') : empty
}
const formatRuleTarget = (ruleRef: TRbacRuleRef) => {
  const resources = formatJoinedValues(ruleRef.resources)
  const nonResourceURLs = formatJoinedValues(ruleRef.nonResourceURLs)
  return sortValues(ruleRef.nonResourceURLs).length > 0 ? nonResourceURLs : resources
}
const formatRuleVerb = (ruleRef: TRbacRuleRef) => formatJoinedValues(ruleRef.verbs)
const formatApiGroups = (ruleRef: TRbacRuleRef) => {
  const apiGroups = sortValues(ruleRef.apiGroups).map(value => value || '<core>')
  return apiGroups.length > 0 ? apiGroups.join(', ') : '<all>'
}
const hasWildcardValue = (values?: string[]) => (values ?? []).some(value => value.includes('*'))
const hasConcreteResourceValues = (values?: string[]) =>
  sortValues(values).some(value => value.trim().length > 0 && !value.includes('*') && !value.includes('/'))
const parsePermissionLabel = (label: string) => {
  const match = label.match(/^([A-Z*]+)\s+(.+)$/)

  if (!match) {
    return { verb: '*', target: label }
  }

  return { verb: match[1], target: match[2] }
}
const getNormalizedApiGroups = (ruleRefs?: TRbacRuleRef[]) =>
  Array.from(
    new Set(
      (ruleRefs ?? [])
        .flatMap(ruleRef => ruleRef.apiGroups ?? [])
        .map(group => group.trim())
        .filter(group => group.length > 0 && group !== '*'),
    ),
  )
const getSourceRuleKey = (ruleRef: TRawRuleRef) =>
  ruleRef.sourceObjectUID || ruleRef.sourceRuleIndex !== undefined
    ? `${ruleRef.sourceObjectUID ?? 'unknown'}:${ruleRef.sourceRuleIndex ?? 0}`
    : serializeRuleRef(ruleRef)
const getPermissionRefs = (ruleRef: TRawRuleRef): TRawRuleRef[] => {
  if ((ruleRef.expandedRefs?.length ?? 0) > 0) {
    return ruleRef.expandedRefs!.map(expandedRef => ({
      ...expandedRef,
      sourceObjectUID: ruleRef.sourceObjectUID,
      sourceRuleIndex: ruleRef.sourceRuleIndex,
    }))
  }

  if (
    ruleRef.resource !== undefined ||
    ruleRef.nonResourceURL !== undefined ||
    ruleRef.verb !== undefined ||
    ruleRef.apiGroup !== undefined
  ) {
    return [ruleRef]
  }

  return []
}
const serializePermissionRef = (ruleRef: TRawRuleRef) =>
  JSON.stringify({
    apiGroup: ruleRef.apiGroup ?? '',
    resource: normalizeResourceValue(ruleRef) ?? '',
    nonResourceURL: ruleRef.nonResourceURL ?? '',
    verb: ruleRef.verb ?? '',
    phantom: Boolean(ruleRef.phantom),
  })
const buildParsedPermission = (ruleRef: TRawRuleRef, ruleKeys: string[]): TParsedPermission => {
  const target = ruleRef.nonResourceURL ?? normalizeResourceValue(ruleRef) ?? '*'
  const verb = (ruleRef.verb ?? '*').toUpperCase()

  return {
    id: `${serializePermissionRef(ruleRef)}:${ruleKeys.join('|') || 'all'}`,
    label: `${verb} ${target}`,
    verb,
    target,
    ruleKeys,
    apiGroups: ruleRef.apiGroup && ruleRef.apiGroup !== '*' ? [ruleRef.apiGroup] : [],
  }
}

const decorateFlowModelWithResourceLabels = (model: TFlowModel, kindsWithVersion: TKindWithVersion[]): TFlowModel => ({
  nodes: model.nodes.map(node => {
    if (node.type !== 'rbacCard') return node

    const data = node.data as {
      label: string
      nodeType?: TRbacNode['type']
      typeLabel: string
    }

    if (data.nodeType === 'permission') {
      const { verb, target } = parsePermissionLabel(data.label)
      const titleValue = resolveResourceDisplayValue({ kindsWithVersion, value: target })

      return {
        ...node,
        data: {
          ...data,
          titlePrefix: verb,
          titleValue,
          titleShowsBadge: shouldShowResolvedResourceBadge(target),
        },
      }
    }

    return {
      ...node,
      data: {
        ...data,
        titlePrefix: undefined,
        titleValue: data.label,
        badgeValue: data.typeLabel,
        titleShowsBadge: true,
      },
    }
  }),
  edges: model.edges,
})
const collectRoleDetails = (graph: TGraph | null, nodeId: string | null): TRoleDetails | null => {
  if (!graph || !nodeId) return null

  const node = graph.nodes.find(item => item.id === nodeId)
  if (!node || !ROLE_NODE_TYPES.has(node.type)) return null

  const nodeById = new Map(graph.nodes.map(item => [item.id, item]))
  const ruleMap = new Map<string, TRoleRuleDetail>()
  const permissionMap = new Map<string, TParsedPermission>()

  ;(node.matchedRuleRefs ?? []).map(toRawRuleRef).forEach(rawRuleRef => {
    const key = getSourceRuleKey(rawRuleRef)
    const normalizedRuleRef = normalizeRuleRef(rawRuleRef)
    const currentRule = ruleMap.get(key)

    ruleMap.set(key, {
      key,
      ruleRef: currentRule ? mergeRuleRefs(currentRule.ruleRef, normalizedRuleRef) : normalizedRuleRef,
      expandedPermissionCount: currentRule?.expandedPermissionCount ?? 0,
    })

    getPermissionRefs(rawRuleRef).forEach(permissionRef => {
      const permission = buildParsedPermission(permissionRef, [key])
      if (!permissionMap.has(permission.id)) {
        permissionMap.set(permission.id, permission)
      }
    })
  })

  graph.edges.forEach(edge => {
    if (edge.type !== 'permissions-role' || edge.from !== node.id) return

    const permissionNode = nodeById.get(edge.to)
    if (!permissionNode) return

    const rawRuleRefs = (edge.ruleRefs ?? []).map(toRawRuleRef)
    const normalizedRuleRefs = rawRuleRefs.map(normalizeRuleRef)
    const ruleKeys = rawRuleRefs.map(getSourceRuleKey)
    const { verb, target } = parsePermissionLabel(permissionNode.name)

    normalizedRuleRefs.forEach((ruleRef, index) => {
      const key = ruleKeys[index]
      const currentRule = ruleMap.get(key)
      ruleMap.set(key, {
        key,
        ruleRef: currentRule ? mergeRuleRefs(currentRule.ruleRef, ruleRef) : ruleRef,
        expandedPermissionCount: currentRule?.expandedPermissionCount ?? 0,
      })
    })

    const permissionKey = `${permissionNode.id}:${ruleKeys.join('|') || 'all'}`
    if (!permissionMap.has(permissionKey)) {
      permissionMap.set(permissionKey, {
        id: permissionKey,
        label: permissionNode.name,
        verb,
        target,
        ruleKeys,
        apiGroups: getNormalizedApiGroups(normalizedRuleRefs),
      })
    }
  })

  permissionMap.forEach(permission => {
    const targets = permission.ruleKeys.length > 0 ? permission.ruleKeys : Array.from(ruleMap.keys())
    targets.forEach(ruleKey => {
      const rule = ruleMap.get(ruleKey)
      if (rule) {
        rule.expandedPermissionCount += 1
      }
    })
  })

  return {
    node,
    rules: Array.from(ruleMap.values()).sort((left, right) =>
      formatRuleVerb(left.ruleRef)
        .concat(formatRuleTarget(left.ruleRef))
        .localeCompare(formatRuleVerb(right.ruleRef).concat(formatRuleTarget(right.ruleRef))),
    ),
    permissions: Array.from(permissionMap.values()).sort(
      (left, right) => left.target.localeCompare(right.target) || left.verb.localeCompare(right.verb),
    ),
  }
}

const RbacGraphInner: FC<TRbacGraphProps> = ({ clusterId }) => {
  const { token } = theme.useToken()
  const { fitView } = useReactFlow()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const chromeRef = useRef<HTMLDivElement | null>(null)
  const [payload, setPayload] = useState<TRbacQueryPayload>(DEFAULT_PAYLOAD)
  const [options, setOptions] = useState<TRbacGraphOptions>(DEFAULT_OPTIONS)
  const shouldFitViewAfterLayoutRef = useRef(false)
  const shouldFitViewAfterStarSwitchRef = useRef(false)
  const [focusNodeId, setFocusNodeId] = useState<string | null>(null)
  const [starSelectedNodeId, setStarSelectedNodeId] = useState<string | null>(null)
  const [graphData, setGraphData] = useState<TGraph | null>(null)
  const [stats, setStats] = useState<TRbacQueryResponse['stats']>()
  const [layouting, setLayouting] = useState(false)
  const [canvasHeight, setCanvasHeight] = useState(320)
  const [baseModel, setBaseModel] = useState<TFlowModel | null>(null)
  const [detailsNodeId, setDetailsNodeId] = useState<string | null>(null)
  const [selectedRuleKeys, setSelectedRuleKeys] = useState<string[]>([])

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])
  const roleDetails = useMemo(() => collectRoleDetails(graphData, detailsNodeId), [detailsNodeId, graphData])
  const selectedRuleKeySet = useMemo(() => new Set(selectedRuleKeys), [selectedRuleKeys])
  const filteredPermissions = useMemo(() => {
    if (!roleDetails) return []
    if (selectedRuleKeySet.size === 0) return []

    return roleDetails.permissions.filter(
      permission =>
        permission.ruleKeys.length === 0 || permission.ruleKeys.some(ruleKey => selectedRuleKeySet.has(ruleKey)),
    )
  }, [roleDetails, selectedRuleKeySet])
  const groupedPermissions = useMemo(() => {
    const groups = new Map<string, TParsedPermission[]>()

    filteredPermissions.forEach(permission => {
      const bucket = groups.get(permission.target) ?? []
      bucket.push(permission)
      groups.set(permission.target, bucket)
    })

    return Array.from(groups.entries())
      .sort((left, right) => left[0].localeCompare(right[0]))
      .map(([target, permissions]) => ({
        target,
        permissions: permissions.sort((left, right) => left.verb.localeCompare(right.verb)),
      }))
  }, [filteredPermissions])
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
  const kindsWithVersion = useMemo(() => kindsData?.kindsWithVersion ?? [], [kindsData?.kindsWithVersion])
  const renderResolvedResourceLabel = useCallback(
    (
      value: string,
      options?: {
        apiGroups?: string[]
        badgeId?: string
        textClassName?: string
      },
    ) => {
      const displayValue = resolveResourceDisplayValue({
        apiGroups: options?.apiGroups,
        kindsWithVersion,
        value,
      })

      return (
        <RbacResourceLabel
          badgeId={options?.badgeId ?? `rbac-resource-${displayValue}`}
          value={displayValue}
          showBadge={shouldShowResolvedResourceBadge(value)}
          textClassName={options?.textClassName}
        />
      )
    },
    [kindsWithVersion],
  )

  const [selectorSelection, setSelectorSelection] = useState(EMPTY_SELECTOR_SELECTION)
  const hasResourceFilters = Boolean(
    selectorSelection.apiGroups.length || selectorSelection.apiVersions.length || selectorSelection.resources.length,
  )
  const hasNonResourceFilters = Boolean(selectorSelection.nonResourceURLs.length)
  const {
    includePods,
    includeWorkloads,
    onlyReachable,
    starMode,
    reduceEdgeCrossings,
    showAggregateEdges,
    showPermissions,
    focusMode,
  } = options
  const viewMode = starMode ? 'star' : reduceEdgeCrossings ? 'default-reduced' : 'default'
  const previousViewModeRef = useRef(viewMode)

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

  useEffect(() => {
    if (!roleDetails) {
      setSelectedRuleKeys([])
      return
    }

    setSelectedRuleKeys(roleDetails.rules.map(rule => rule.key))
  }, [roleDetails])

  const handleSubmit = useCallback(() => {
    queryMutation.mutate(payload, {
      onSuccess: (data: TRbacQueryResponse) => {
        setGraphData(data.graph)
        setStats(data.stats)
        setFocusNodeId(null)
        setStarSelectedNodeId(null)
        setDetailsNodeId(null)
      },
    })
  }, [payload, queryMutation])

  const handleReset = useCallback(() => {
    setPayload(DEFAULT_PAYLOAD)
    setOptions(DEFAULT_OPTIONS)
    setSelectorSelection(EMPTY_SELECTOR_SELECTION)
    setFocusNodeId(null)
    setStarSelectedNodeId(null)
    setBaseModel(null)
    setGraphData(null)
    setStats(undefined)
    setDetailsNodeId(null)
    setSelectedRuleKeys([])
    setNodes([])
    setEdges([])
  }, [setEdges, setNodes])

  useEffect(() => {
    if (previousViewModeRef.current !== viewMode) {
      const switchedToStar = viewMode === 'star'
      previousViewModeRef.current = viewMode
      shouldFitViewAfterLayoutRef.current = Boolean(graphData)
      shouldFitViewAfterStarSwitchRef.current = switchedToStar && Boolean(graphData)
    }
  }, [graphData, viewMode])

  useEffect(() => {
    if (!graphData) return

    setLayouting(true)
    const applyLayout = async () => {
      try {
        const effectiveOptions: TRbacGraphOptions = {
          showRoles: options.showRoles,
          showBindings: options.showBindings,
          showSubjects: options.showSubjects,
          includePods,
          includeWorkloads,
          onlyReachable,
          starMode,
          focusMode,
          reduceEdgeCrossings,
          showAggregateEdges,
          showPermissions,
        }
        const effectiveGraph = filterGraphByOptions(graphData, effectiveOptions)
        const layout = starMode
          ? { positions: layoutRbacGraphStar(effectiveGraph) }
          : await layoutRbacGraph(
              effectiveGraph.nodes.map(node => node.id),
              effectiveGraph.edges.map(edge => ({ id: edge.id, source: edge.from, target: edge.to, type: edge.type })),
              new Map(effectiveGraph.nodes.map(node => [node.id, node.namespace])),
              {
                reduceEdgeCrossings,
              },
            )
        const model = buildRbacFlowModel(effectiveGraph, layout, effectiveOptions)
        setBaseModel(decorateFlowModelWithResourceLabels(model, kindsWithVersion))
      } finally {
        setLayouting(false)
      }
    }

    applyLayout()
  }, [
    graphData,
    focusMode,
    includePods,
    includeWorkloads,
    onlyReachable,
    options.showBindings,
    options.showRoles,
    options.showSubjects,
    starMode,
    reduceEdgeCrossings,
    showAggregateEdges,
    showPermissions,
    kindsWithVersion,
  ])

  useEffect(() => {
    if (!baseModel) {
      setNodes([])
      setEdges([])
      return
    }

    if (starMode) {
      const selected = applyStarSelectionToModel(baseModel.nodes, baseModel.edges, starSelectedNodeId)
      setNodes(selected.nodes)
      setEdges(selected.edges)
      return
    }

    const focused = applyFocusToModel(baseModel.nodes, baseModel.edges, focusNodeId, focusMode)
    setNodes(focused.nodes)
    setEdges(focused.edges)
  }, [baseModel, focusMode, focusNodeId, setEdges, setNodes, starMode, starSelectedNodeId])

  useEffect(() => {
    if (!shouldFitViewAfterLayoutRef.current || layouting || nodes.length === 0) return

    shouldFitViewAfterLayoutRef.current = false
    window.requestAnimationFrame(() => {
      // eslint-disable-next-line no-void
      void fitView({ padding: 0.16 })
    })
  }, [fitView, layouting, nodes])

  useEffect(() => {
    if (!shouldFitViewAfterStarSwitchRef.current || layouting || nodes.length === 0 || !starMode) return

    shouldFitViewAfterStarSwitchRef.current = false
    window.requestAnimationFrame(() => {
      // eslint-disable-next-line no-void
      void fitView({ padding: 0.24, duration: 250 })
    })
  }, [fitView, layouting, nodes, starMode])

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: { id: string; data?: { nodeType?: TRbacNode['type'] } }) => {
      if (node.id.startsWith('ns-group-')) return
      if (node.data?.nodeType && ROLE_NODE_TYPES.has(node.data.nodeType)) {
        setDetailsNodeId(node.id)
      }
      if (starMode) {
        setStarSelectedNodeId(prev => (prev === node.id ? null : node.id))
        return
      }
      if (focusMode) {
        setFocusNodeId(prev => (prev === node.id ? null : node.id))
      }
    },
    [focusMode, starMode],
  )
  const handlePaneClick = useCallback(() => {
    if (starMode) {
      setStarSelectedNodeId(null)
    }
  }, [starMode])

  const isLoading = queryMutation.isPending || layouting
  const nonResourceUrlsErrorMessage =
    typeof nonResourceUrlsError === 'string' ? nonResourceUrlsError : nonResourceUrlsError?.message
  const roleDetailsTitle = roleDetails
    ? `${roleDetails.node.type === 'clusterRole' ? 'clusterRole' : 'role'}: ${roleDetails.node.name}`
    : ''

  useEffect(() => {
    const updateCanvasHeight = () => {
      const containerRect = containerRef.current?.getBoundingClientRect()
      const chromeHeight = chromeRef.current?.getBoundingClientRect().height ?? 0

      if (!containerRect) return

      const viewportHeight = window.innerHeight
      const nextHeight = Math.max(
        320,
        Math.floor(viewportHeight - containerRect.top - chromeHeight - FOOTER_HEIGHT - 16),
      )

      setCanvasHeight(prev => (prev === nextHeight ? prev : nextHeight))
    }

    updateCanvasHeight()

    const resizeObserver = new ResizeObserver(() => updateCanvasHeight())
    if (containerRef.current) resizeObserver.observe(containerRef.current)
    if (chromeRef.current) resizeObserver.observe(chromeRef.current)

    window.addEventListener('resize', updateCanvasHeight)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateCanvasHeight)
    }
  }, [graphData, stats, kindsError, nonResourceUrlsError, isLoading])

  return (
    <Styled.Container ref={containerRef}>
      <Styled.Chrome ref={chromeRef}>
        <Card size="small" styles={{ body: { padding: 0 } }}>
          <RbacQueryForm
            value={payload}
            selectorLoading={kindsLoading || nonResourceUrlsLoading}
            selectorOptions={selectorOptions}
            selectedApiVersions={selectorSelection.apiVersions}
            onSelectorChange={patch => handleSelectorChange({ ...selectorSelection, ...patch })}
            onChange={setPayload}
            onSubmit={handleSubmit}
            onReset={handleReset}
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
      </Styled.Chrome>

      {isLoading ? (
        <Styled.SpinContainer>
          <Spin tip="Computing layout..." />
        </Styled.SpinContainer>
      ) : !graphData ? (
        <Styled.EmptyState>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Configure selectors and run a query to visualize the RBAC graph."
          />
        </Styled.EmptyState>
      ) : (
        <Styled.CanvasWrapper
          $height={canvasHeight}
          $colorBgContainer={token.colorBgContainer}
          $colorBgElevated={token.colorBgElevated}
          $colorBorder={token.colorBorder}
          $colorFillSecondary={token.colorFillSecondary}
          $colorPrimary={token.colorPrimary}
          $colorText={token.colorText}
          $colorTextSecondary={token.colorTextSecondary}
          $borderRadius={token.borderRadius}
          $boxShadowSecondary={token.boxShadowSecondary}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodeClick={handleNodeClick}
            onPaneClick={handlePaneClick}
            nodesDraggable={false}
            fitView
            fitViewOptions={{ padding: 0.16 }}
            minZoom={0.05}
            proOptions={{ hideAttribution: true }}
          >
            <MiniMap
              bgColor={token.colorBgContainer}
              maskColor={token.colorFillSecondary}
              nodeColor={token.colorTextSecondary}
            />
            <Controls />
          </ReactFlow>
        </Styled.CanvasWrapper>
      )}
      <Modal
        open={Boolean(roleDetails)}
        title={roleDetailsTitle}
        onCancel={() => setDetailsNodeId(null)}
        footer={null}
        width={1400}
        centered
        destroyOnHidden
      >
        {roleDetails && (
          <Styled.DetailsLayout
            $colorBgElevated={token.colorBgElevated}
            $colorBgContainer={token.colorBgContainer}
            $colorBorder={token.colorBorder}
            $colorBorderSecondary={token.colorBorderSecondary}
            $colorFillAlter={token.colorFillAlter}
            $colorPrimary={token.colorPrimary}
            $colorPrimaryBg={token.colorPrimaryBg}
            $colorPrimaryBorder={token.colorPrimaryBorder}
            $colorPrimaryText={token.colorPrimaryText}
            $colorText={token.colorText}
            $colorTextSecondary={token.colorTextSecondary}
            $boxShadowSecondary={token.boxShadowSecondary}
            $borderRadius={token.borderRadius}
          >
            <Styled.DetailsSection>
              <Styled.DetailsSectionHeader>
                <Styled.DetailsSectionTitle>Original Rules</Styled.DetailsSectionTitle>
              </Styled.DetailsSectionHeader>
              <Styled.DetailsToolbar>
                <Styled.DetailsToolbarActions>
                  <Button size="small" onClick={() => setSelectedRuleKeys(roleDetails.rules.map(rule => rule.key))}>
                    Select All
                  </Button>
                  <Button size="small" onClick={() => setSelectedRuleKeys([])}>
                    Deselect All
                  </Button>
                </Styled.DetailsToolbarActions>
                <Styled.DetailsToolbarMeta>{roleDetails.rules.length} rules</Styled.DetailsToolbarMeta>
              </Styled.DetailsToolbar>

              {roleDetails.rules.length === 0 ? (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No rule metadata available for this role." />
              ) : (
                <Styled.RuleList>
                  {roleDetails.rules.map(rule => {
                    const checked = selectedRuleKeySet.has(rule.key)

                    return (
                      <Styled.RuleCard
                        key={rule.key}
                        type="button"
                        $selected={checked}
                        onClick={() =>
                          setSelectedRuleKeys(prev =>
                            prev.includes(rule.key) ? prev.filter(key => key !== rule.key) : [...prev, rule.key],
                          )
                        }
                      >
                        <Styled.RuleCardHeader>
                          <Checkbox checked={checked} style={{ pointerEvents: 'none' }} />
                          <Styled.RuleCardBody>
                            <Styled.RuleHeadline>
                              <Styled.RuleVerb>{formatRuleVerb(rule.ruleRef)}</Styled.RuleVerb>
                              <Styled.RuleTarget>
                                {sortValues(rule.ruleRef.nonResourceURLs).length > 0 ||
                                !hasConcreteResourceValues(rule.ruleRef.resources) ? (
                                  formatRuleTarget(rule.ruleRef)
                                ) : (
                                  <Styled.RuleTargetList>
                                    {sortValues(rule.ruleRef.resources).map(resource =>
                                      resource.includes('*') || resource.includes('/') ? (
                                        <span key={`${rule.key}-${resource}`}>{resource}</span>
                                      ) : (
                                        renderResolvedResourceLabel(resource, {
                                          apiGroups: rule.ruleRef.apiGroups,
                                          badgeId: `${rule.key}-${resource}`,
                                        })
                                      ),
                                    )}
                                  </Styled.RuleTargetList>
                                )}
                              </Styled.RuleTarget>
                            </Styled.RuleHeadline>
                            <Styled.RuleMeta>{rule.expandedPermissionCount} expanded permissions</Styled.RuleMeta>
                            <Styled.RuleTagRow>
                              {hasWildcardValue(rule.ruleRef.resources) && <Tag color="gold">* resource</Tag>}
                              {hasWildcardValue(rule.ruleRef.verbs) && <Tag color="gold">* verb</Tag>}
                              {sortValues(rule.ruleRef.nonResourceURLs).length > 0 && (
                                <Tag color="blue">non-resource</Tag>
                              )}
                              <Tag>{`apiGroup: ${formatApiGroups(rule.ruleRef)}`}</Tag>
                              {sortValues(rule.ruleRef.resourceNames).length > 0 && (
                                <Tag>{`resourceNames: ${formatJoinedValues(rule.ruleRef.resourceNames)}`}</Tag>
                              )}
                            </Styled.RuleTagRow>
                          </Styled.RuleCardBody>
                        </Styled.RuleCardHeader>
                      </Styled.RuleCard>
                    )
                  })}
                </Styled.RuleList>
              )}
            </Styled.DetailsSection>

            <Styled.DetailsSection>
              <Styled.DetailsSectionHeader>
                <Styled.DetailsSectionTitle>Expanded Permissions</Styled.DetailsSectionTitle>
              </Styled.DetailsSectionHeader>
              <Styled.PermissionPanel>
                <Styled.PermissionHeader>
                  <Typography.Text strong style={{ color: token.colorText }}>
                    {roleDetailsTitle}
                  </Typography.Text>
                  <Tag color="blue">Expanded: resource</Tag>
                  <Tag>{`${filteredPermissions.length} permissions`}</Tag>
                </Styled.PermissionHeader>

                {groupedPermissions.length === 0 ? (
                  <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={
                      selectedRuleKeys.length === 0
                        ? 'Select at least one rule to inspect expanded permissions.'
                        : 'No expanded permissions matched the selected rules.'
                    }
                  />
                ) : (
                  <Collapse
                    ghost
                    defaultActiveKey={groupedPermissions.map(group => group.target)}
                    items={groupedPermissions.map(group => ({
                      key: group.target,
                      label: (
                        <Styled.RuleTargetList>
                          {renderResolvedResourceLabel(group.target, {
                            apiGroups: group.permissions.flatMap(permission => permission.apiGroups),
                            badgeId: `group-${group.target}`,
                          })}
                          <span>{`(${group.permissions.length})`}</span>
                        </Styled.RuleTargetList>
                      ),
                      children: (
                        <Styled.PermissionPillRow>
                          {group.permissions.map(permission => (
                            <Styled.PermissionPill key={permission.id}>
                              <Styled.PermissionVerb>{permission.verb}</Styled.PermissionVerb>
                            </Styled.PermissionPill>
                          ))}
                        </Styled.PermissionPillRow>
                      ),
                    }))}
                  />
                )}
              </Styled.PermissionPanel>
            </Styled.DetailsSection>
          </Styled.DetailsLayout>
        )}
      </Modal>
    </Styled.Container>
  )
}

export const RbacGraph: FC<TRbacGraphProps> = props => (
  <ReactFlowProvider>
    <RbacGraphInner {...props} />
  </ReactFlowProvider>
)
