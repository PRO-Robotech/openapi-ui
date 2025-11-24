import React, { FC, useState } from 'react'
import { Spin, Alert, Segmented } from 'antd'
import { useK8sSmartResource, TSingleResource, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { BlackholeForm } from 'components'

type TUpdateCrdsFormProps = {
  apiGroup: string
  apiVersion: string
  plural: string
  name: string
  namespace?: string
  backLink?: string | null
}

export const UpdateCrdsForm: FC<TUpdateCrdsFormProps> = ({
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

  const {
    data: dataArr,
    isLoading: isPending,
    error,
  } = useK8sSmartResource<{
    items: TSingleResource[]
  }>({
    cluster,
    namespace,
    apiGroup,
    apiVersion,
    plural,
    fieldSelector: `metadata.name=${name}`,
  })

  const data = dataArr?.items && dataArr.items.length > 0 ? dataArr.items[0] : undefined

  if (isPending) {
    return <Spin />
  }

  if (error) {
    return (
      <Alert message={`An error has occurred: ${typeof error === 'string' ? error : error?.message} `} type="error" />
    )
  }

  if (!data) {
    return <Alert message={`An error has occurred: No data `} type="error" />
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
