import React, { FC, useState } from 'react'
import { Spin, Alert, Card, Flex, Segmented } from 'antd'
import { useBuiltinResourceSingle } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { BlackholeForm, FlexEnd } from 'components'

type TUpdateBuiltinFormProps = {
  typeName: string
  entryName: string
  namespace?: string
  backLink?: string | null
}

export const UpdateBuiltinForm: FC<TUpdateBuiltinFormProps> = ({ typeName, entryName, namespace, backLink }) => {
  const cluster = useSelector((state: RootState) => state.cluster.cluster)

  const [currentMode, setCurrentMode] = useState<string>('OpenAPI')
  const [currentModeDisabled, setCurrentModeDisabled] = useState<boolean>(false)

  const onCurrentModeChange = (value: string) => {
    setCurrentMode(value)
  }

  const onCurrentModeDisabled = () => {
    setCurrentModeDisabled(true)
  }

  const modeData = {
    current: currentMode,
    onChange: onCurrentModeChange,
    onDisabled: onCurrentModeDisabled,
  }

  const { data, isPending, error } = useBuiltinResourceSingle({
    clusterName: cluster,
    namespace,
    typeName,
    entryName,
    refetchInterval: false,
  })

  if (isPending) {
    return <Spin />
  }

  if (error) {
    return <Alert message={`An error has occurred: ${error?.message} `} type="error" />
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  // const { status: _, ...noStatusData } = data
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const { managedFields: __, ...metadata } = data.metadata

  return (
    <Card
      title={
        <Flex>
          Edit v1{data.metadata.namespace ? `/namespaces/${data.metadata.namespace}` : ''}/{typeName}/{entryName}
          <FlexEnd>
            <Segmented<string>
              options={['OpenAPI', 'Manual']}
              value={currentMode}
              onChange={value => {
                setCurrentMode(value)
              }}
              disabled={currentModeDisabled}
            />
          </FlexEnd>
        </Flex>
      }
    >
      <BlackholeForm
        data={{
          type: 'builtin',
          typeName,
          // prefillValuesSchema: { ...noStatusData, metadata },
          prefillValuesSchema: { ...data, metadata },
        }}
        backlink={backLink}
        modeData={modeData}
      />
    </Card>
  )
}
