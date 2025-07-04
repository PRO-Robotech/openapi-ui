import React, { FC, useState } from 'react'
import { Spin, Alert, Segmented } from 'antd'
import { useCrdResourceSingle, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { BlackholeForm } from 'components'

type TUpdateCrdsFormProps = {
  apiGroup: string
  apiVersion: string
  typeName: string
  entryName: string
  namespace?: string
  backLink?: string | null
}

export const UpdateCrdsForm: FC<TUpdateCrdsFormProps> = ({
  apiGroup,
  apiVersion,
  typeName,
  entryName,
  namespace,
  backLink,
}) => {
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

  const { data, isPending, error } = useCrdResourceSingle({
    clusterName: cluster,
    namespace,
    apiGroup,
    apiVersion,
    crdName: typeName,
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
    <>
      <Segmented<string>
        options={['OpenAPI', 'Manual']}
        value={currentMode}
        onChange={value => {
          setCurrentMode(value)
        }}
        disabled={currentModeDisabled}
      />
      <Spacer $space={10} $samespace />
      <BlackholeForm
        data={{
          type: 'apis',
          apiGroup,
          apiVersion,
          typeName,
          // prefillValuesSchema: { ...noStatusData, metadata },
          prefillValuesSchema: { ...data, metadata },
        }}
        customizationId={`default-/${apiGroup}/${apiVersion}/${typeName}`}
        backlink={backLink}
        modeData={modeData}
      />
    </>
  )
}
