import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { useNavSelectorInside } from 'hooks/useNavSelectorInside'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'
import { SELECTOR_WIDTH_CLUSTER } from 'constants/customizationApiGroupAndVersion'

type TSelectorClusterInsideProps = {
  cluster?: string
}

export const SelectorClusterInside: FC<TSelectorClusterInsideProps> = ({ cluster }) => {
  const navigate = useNavigate()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const [selectedCluster, setSelectedCluster] = useState(cluster)

  const { clustersInSidebar } = useNavSelectorInside(selectedCluster)

  const handleClusterChange = (value?: string) => {
    if (value) {
      setSelectedCluster(value)
      navigate(`${baseprefix}/inside/${value}/apis`)
    } else {
      navigate(`${baseprefix}/inside/`)
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
