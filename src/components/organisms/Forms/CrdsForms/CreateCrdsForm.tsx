import React, { FC, useState } from 'react'
import { Segmented } from 'antd'
import { Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { BlackholeForm } from 'components'

type TCreateCrdsFormProps = {
  namespace?: string
  apiGroup: string
  apiVersion: string
  plural: string
  backLink?: string | null
}

export const CreateCrdsForm: FC<TCreateCrdsFormProps> = ({ namespace, apiGroup, apiVersion, plural, backLink }) => {
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
          plural,
          prefillValueNamespaceOnly: namespace,
        }}
        customizationId={`default-/${apiGroup}/${apiVersion}/${plural}`}
        isCreate
        backlink={backLink}
        modeData={modeData}
      />
    </>
  )
}
