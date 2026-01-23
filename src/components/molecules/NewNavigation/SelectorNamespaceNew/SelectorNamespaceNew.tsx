import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useNavSelectorInside } from 'hooks/useNavSelectorInside'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'
import { SELECTOR_WIDTH_NAMESPACE } from 'constants/customizationApiGroupAndVersion'

type TSelectorNamespaceNewProps = {
  cluster?: string
  namespace?: string
  disabled?: boolean
}

export const SelectorNamespaceNew: FC<TSelectorNamespaceNewProps> = ({ cluster, namespace, disabled }) => {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()

  const [selectedCluster, setSelectedCluster] = useState(cluster)
  const [selectedNamespace, setSelectedNamespace] = useState(namespace)

  const { namespacesInSidebar } = useNavSelectorInside(selectedCluster)

  const handleNamespaceChange = (value?: string) => {
    const ns = value && value !== 'all' ? value : undefined

    const parts = window.location.pathname.split('/').filter(Boolean)
    // parts looks like: [prefix..., cluster, namespace?, syntheticProject?, ...splat]
    // We must locate ":cluster" position first, since prefix length can vary.

    const { cluster } = params
    if (!cluster) return

    const clusterIdx = parts.indexOf(cluster)
    if (clusterIdx === -1) return

    const namespaceIdx = clusterIdx + 1

    // Determine whether a namespace segment currently exists.
    // If params.namespace is set, it's definitely present in the URL at namespaceIdx.
    const hasNamespace = Boolean(params.namespace)

    const nextParts = [...parts]

    if (ns) {
      // set/replace namespace
      if (hasNamespace) {
        nextParts[namespaceIdx] = ns
      } else {
        nextParts.splice(namespaceIdx, 0, ns)
      }
    } else if (hasNamespace) {
      // remove namespace (only if it exists)
      nextParts.splice(namespaceIdx, 1)
    }

    // ✅ keep current search params as-is
    navigate(`/${nextParts.join('/')}${location.search}`)
  }

  useMountEffect(() => {
    setSelectedCluster(cluster)
    setSelectedNamespace(namespace)
  }, [namespace, cluster])

  return (
    <div>
      <Flex gap={18} justify="start" align="center">
        <Typography.Text>Namespace: </Typography.Text>
        <EntrySelect
          placeholder="Namespace"
          options={[{ value: 'all', label: 'All Namespaces' }, ...namespacesInSidebar]}
          value={selectedNamespace || 'all'}
          onChange={handleNamespaceChange}
          disabled={selectedCluster === undefined || namespacesInSidebar.length === 0 || disabled}
          forcedWidth={SELECTOR_WIDTH_NAMESPACE}
        />
      </Flex>
    </div>
  )
}
