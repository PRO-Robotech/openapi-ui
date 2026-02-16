import React, { FC, useState } from 'react'
import { Flex } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { useNavSelectorClusters } from 'hooks/useNavSelectorClusters'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'
import { BASE_NAVIGATE_FROM_CLUSTERLIST } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

type TSelectorClusterNewProps = {
  cluster?: string
}

export const SelectorClusterNew: FC<TSelectorClusterNewProps> = ({ cluster }) => {
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
