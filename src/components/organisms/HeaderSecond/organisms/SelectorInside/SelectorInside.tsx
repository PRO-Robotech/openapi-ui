import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useNavSelectorInside } from 'hooks/useNavSelectorInside'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'
import { SELECTOR_WIDTH_NAMESPACE } from 'constants/customizationApiGroupAndVersion'

type TSelectorInsideProps = {
  cluster?: string
  namespace?: string
}

export const SelectorInside: FC<TSelectorInsideProps> = ({ cluster, namespace }) => {
  const navigate = useNavigate()
  const params = useParams()

  const [selectedCluster, setSelectedCluster] = useState<string | undefined>(cluster)
  const [selectedNamespace, setSelectedNamespace] = useState<string | undefined>(namespace)

  const { namespacesInSidebar } = useNavSelectorInside(selectedCluster)

  const handleNamepsaceChange = (value?: string) => {
    if (value && value !== 'all' && params.namespace) {
      setSelectedNamespace(value)
      const pathnames = window.location.pathname.split('/')
      const newPathNames = [...pathnames.slice(0, 4), value, ...pathnames.slice(5)]
      navigate(newPathNames.join('/'))
    } else if (value && value !== 'all' && !params.namespace) {
      setSelectedNamespace(value)
      const pathnames = window.location.pathname.split('/')
      const newPathNames = [...pathnames.slice(0, 4), value, ...pathnames.slice(4)]
      navigate(newPathNames.join('/'))
    } else {
      const pathnames = window.location.pathname.split('/')
      const newPathnames = pathnames.filter((_, i) => i !== 4)
      navigate(newPathnames.join('/'))
    }
  }

  useMountEffect(() => {
    setSelectedCluster(cluster)
    setSelectedNamespace(namespace)
  }, [namespace, cluster])

  return (
    <Flex gap={18} justify="start" align="center">
      <Typography.Text>Namespace: </Typography.Text>
      <EntrySelect
        placeholder="Namespace"
        options={[{ value: 'all', label: 'All Namespaces' }, ...namespacesInSidebar]}
        value={selectedNamespace || 'all'}
        onChange={handleNamepsaceChange}
        disabled={selectedCluster === undefined || namespacesInSidebar.length === 0}
        forcedWidth={SELECTOR_WIDTH_NAMESPACE}
      />
    </Flex>
  )
}
