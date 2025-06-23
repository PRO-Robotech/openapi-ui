import React, { FC, useState } from 'react'
import { Segmented } from 'antd'
import { Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { BlackholeForm } from 'components'

type TCreateApisFormProps = {
  namespace?: string
  apiGroup: string
  apiVersion: string
  typeName: string
  backLink?: string | null
}

export const CreateApisForm: FC<TCreateApisFormProps> = ({ namespace, apiGroup, apiVersion, typeName, backLink }) => {
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
          prefillValueNamespaceOnly: namespace,
        }}
        isCreate
        backlink={backLink}
        modeData={modeData}
      />
    </>
  )
}
