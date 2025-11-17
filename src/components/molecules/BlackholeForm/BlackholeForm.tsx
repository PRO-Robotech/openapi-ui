import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BlackholeFormProvider, TJSON } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import {
  HEAD_FIRST_ROW,
  HEAD_SECOND_ROW,
  FOOTER_HEIGHT,
  NAV_HEIGHT,
  CONTENT_CARD_PADDING,
  BLACKHOLE_FORM_VIEW_SWITCH_HEIGHT,
  BLACKHOLE_FORM_SUBMIT_ROW_HEIGHT,
} from 'constants/blocksSizes'

type TBlackholeFormProps = {
  data:
    | {
        type: 'builtin'
        typeName: string
        prefillValuesSchema?: TJSON
        prefillValueNamespaceOnly?: string
      }
    | {
        type: 'apis'
        apiGroup: string
        apiVersion: string
        typeName: string
        prefillValuesSchema?: TJSON
        prefillValueNamespaceOnly?: string
      }
  customizationId: string
  isCreate?: boolean
  backlink?: string | null
  modeData?: {
    current: string
    onChange: (value: string) => void
    onDisabled: () => void
  }
}

export const BlackholeForm: FC<TBlackholeFormProps> = ({ data, customizationId, isCreate, backlink, modeData }) => {
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const params = useParams()

  const [height, setHeight] = useState(0)

  useEffect(() => {
    const height =
      window.innerHeight -
      HEAD_FIRST_ROW -
      HEAD_SECOND_ROW -
      NAV_HEIGHT -
      CONTENT_CARD_PADDING * 2 -
      FOOTER_HEIGHT -
      BLACKHOLE_FORM_VIEW_SWITCH_HEIGHT -
      BLACKHOLE_FORM_SUBMIT_ROW_HEIGHT -
      1
    setHeight(height)

    const handleResize = () => {
      setHeight(height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const urlParams = {
    clusterName: params.clusterName,
    namespace: params.namespace,
    syntheticProject: params.syntheticProject,
    entryName: params.entryName,
  }

  const urlParamsForPermissions = {
    apiGroup: params.apiGroup,
    typeName: params.typeName,
  }

  return (
    <BlackholeFormProvider
      theme={theme}
      cluster={cluster}
      urlParams={urlParams}
      urlParamsForPermissions={urlParamsForPermissions}
      data={data}
      customizationId={customizationId}
      isCreate={isCreate}
      backlink={backlink}
      modeData={modeData}
      designNewLayout
      designNewLayoutHeight={height}
    />
  )
}
