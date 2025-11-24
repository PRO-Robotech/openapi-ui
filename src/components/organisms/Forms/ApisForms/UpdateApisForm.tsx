import React, { FC, useState } from 'react'
import { Spin, Alert, Segmented } from 'antd'
import { useApiResourceSingle, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { BlackholeForm } from 'components'

type TUpdateApisFormProps = {
  apiGroup: string
  apiVersion: string
  plural: string
  name: string
  namespace?: string
  backLink?: string | null
}

export const UpdateApisForm: FC<TUpdateApisFormProps> = ({
  apiGroup,
  apiVersion,
  plural,
  name,
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

  const { data, isPending, error } = useApiResourceSingle({
    cluster,
    namespace,
    apiGroup,
    apiVersion,
    plural,
    name,
    refetchInterval: false,
  })

  if (isPending) {
    return <Spin />
  }

  if (error) {
    return <Alert message={`An error has occurred: ${error?.message} `} type="error" />
  }

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
          plural,
          prefillValuesSchema: { ...data, metadata },
        }}
        customizationId={`default-/${apiGroup}/${apiVersion}/${plural}`}
        backlink={backLink}
        modeData={modeData}
      />
    </>
  )
}
