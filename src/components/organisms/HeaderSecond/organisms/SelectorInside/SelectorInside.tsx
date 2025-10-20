import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useNavSelectorInside } from 'hooks/useNavSelectorInside'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'

type TSelectorInsideProps = {
  clusterName?: string
  namespace?: string
}

export const SelectorInside: FC<TSelectorInsideProps> = ({ clusterName, namespace }) => {
  const navigate = useNavigate()
  const params = useParams()

  const [selectedClusterName, setSelectedClusterName] = useState<string | undefined>(clusterName)
  const [selectedNamespace, setSelectedNamespace] = useState<string | undefined>(namespace)

  // const { namespacesInSidebar, clustersInSidebar } = useNavSelectorInside(selectedClusterName)
  const { namespacesInSidebar } = useNavSelectorInside(selectedClusterName)

  // const handleClusterChange = (value: string) => {
  //   setSelectedClusterName(value)
  //   navigate(`${baseprefix}/inside/${value}/apis`)
  // }

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
    setSelectedClusterName(clusterName)
    setSelectedNamespace(namespace)
  }, [namespace, clusterName])

  return (
    <Flex gap={18} justify="start" align="center">
      {/* <EntrySelect
        placeholder="Cluster"
        options={clustersInSidebar}
        value={selectedClusterName}
        onChange={handleClusterChange}
      /> */}
      <Typography.Text>Namespace: </Typography.Text>
      <EntrySelect
        placeholder="Namespace"
        options={[{ value: 'all', label: 'All Namespaces' }, ...namespacesInSidebar]}
        value={selectedNamespace || 'all'}
        onChange={handleNamepsaceChange}
        disabled={selectedClusterName === undefined || namespacesInSidebar.length === 0}
      />
    </Flex>
  )
}
