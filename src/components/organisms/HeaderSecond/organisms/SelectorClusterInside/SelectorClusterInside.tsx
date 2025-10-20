import React, { FC, useState } from 'react'
import { Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { useNavSelectorInside } from 'hooks/useNavSelectorInside'
import { useMountEffect } from 'hooks/useMountEffect'
import { EntrySelect } from 'components/atoms'

type TSelectorClusterInsideProps = {
  clusterName?: string
}

export const SelectorClusterInside: FC<TSelectorClusterInsideProps> = ({ clusterName }) => {
  const navigate = useNavigate()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const [selectedClusterName, setSelectedClusterName] = useState(clusterName)

  const { clustersInSidebar } = useNavSelectorInside(selectedClusterName)

  const handleClusterChange = (value?: string) => {
    if (value) {
      setSelectedClusterName(value)
      navigate(`${baseprefix}/inside/${value}/apis`)
    } else {
      navigate(`${baseprefix}/inside/`)
    }
  }

  useMountEffect(() => {
    setSelectedClusterName(clusterName)
  }, [clusterName])

  return (
    <Flex gap={18} justify="start" align="center">
      <Typography.Text>Cluster: </Typography.Text>
      <EntrySelect
        placeholder="Select Cluster"
        options={clustersInSidebar}
        value={selectedClusterName}
        onChange={handleClusterChange}
        // fullwidth
      />
    </Flex>
  )
}
