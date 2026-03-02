import React, { FC, useState } from 'react'
import { Flex } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { useNavSelectorClusters } from 'hooks/useNavSelectorClusters'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'
import { BASE_NAVIGATE_FROM_CLUSTERLIST, CURRENT_CLUSTER } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

type TSelectorClusterNewProps = {
  cluster?: string
}

export const SelectorClusterNew: FC<TSelectorClusterNewProps> = ({ cluster }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)
  const pathnameParts = pathname.split('/').filter(Boolean)
  const isClusterListPage =
    pathnameParts[pathnameParts.length - 1] === 'clusters' && pathnameParts[pathnameParts.length - 2] !== 'inside'
  const hasCurrentCluster = Boolean(CURRENT_CLUSTER && CURRENT_CLUSTER.length > 0)
  const resolvedCluster = cluster || (isClusterListPage && hasCurrentCluster ? CURRENT_CLUSTER : undefined)

  const [selectedCluster, setSelectedCluster] = useState(resolvedCluster)

  const { clustersInSidebar } = useNavSelectorClusters()

  useMountEffect(() => {
    setSelectedCluster(resolvedCluster)
  }, [resolvedCluster])

  if (isClusterListPage && (!hasCurrentCluster || clustersInSidebar.length === 0)) {
    return null
  }

  const handleClusterChange = (value?: string) => {
    if (value) {
      setSelectedCluster(value)
      navigate(BASE_NAVIGATE_FROM_CLUSTERLIST.replace('~recordValue~', value))
    } else {
      navigate(`${baseprefix}/clusters/`)
    }
  }

  return (
    <Flex justify="start" align="center">
      <Styled.Container>
        <EntrySelect
          placeholder="Select Cluster"
          options={clustersInSidebar}
          value={selectedCluster}
          onChange={handleClusterChange}
          fullwidth
        />
      </Styled.Container>
    </Flex>
  )
}
