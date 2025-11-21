import React, { FC, useState } from 'react'
import { Segmented } from 'antd'
import { Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { BlackholeForm } from 'components'

type TCreateBuiltinFormProps = {
  namespace?: string
  plural: string
  backLink?: string | null
}

export const CreateBuiltinForm: FC<TCreateBuiltinFormProps> = ({ namespace, plural, backLink }) => {
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
          type: 'builtin',
          plural,
          prefillValueNamespaceOnly: namespace,
        }}
        customizationId={`default-/v1/${plural}`}
        isCreate
        backlink={backLink}
        modeData={modeData}
      />
    </>
  )
}
