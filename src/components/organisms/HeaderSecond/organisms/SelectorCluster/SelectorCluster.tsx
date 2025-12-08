import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { useNavSelectorClusters } from 'hooks/useNavSelectorClusters'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'
import { BASE_NAVIGATE_FROM_CLUSTERLIST, SELECTOR_WIDTH_CLUSTER } from 'constants/customizationApiGroupAndVersion'

type TSelectorClusterProps = {
  cluster?: string
}

export const SelectorCluster: FC<TSelectorClusterProps> = ({ cluster }) => {
  const navigate = useNavigate()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const [selectedCluster, setSelectedCluster] = useState(cluster)

  const { clustersInSidebar } = useNavSelectorClusters()

  const handleClusterChange = (value?: string) => {
    if (value) {
      setSelectedCluster(value)
      navigate(BASE_NAVIGATE_FROM_CLUSTERLIST.replace('~recordValue~', value))
    } else {
      navigate(`${baseprefix}/clusters/`)
    }
  }

  useMountEffect(() => {
    setSelectedCluster(cluster)
  }, [cluster])

  return (
    <Flex gap={18} justify="start" align="center">
      <Typography.Text>Cluster: </Typography.Text>
      <EntrySelect
        placeholder="Select Cluster"
        options={clustersInSidebar}
        value={selectedCluster}
        onChange={handleClusterChange}
        forcedWidth={SELECTOR_WIDTH_CLUSTER}
      />
    </Flex>
  )
}
