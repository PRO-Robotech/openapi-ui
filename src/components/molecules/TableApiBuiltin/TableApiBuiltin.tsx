/* eslint-disable max-lines-per-function */
// import React, { FC, useState, useEffect } from 'react'
import React, { FC, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Spin, Alert, Button, Flex } from 'antd'
import { PlusOutlined, ClearOutlined, MinusOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  EnrichedTableProvider,
  usePermissions,
  DeleteModal,
  DeleteModalMany,
  useK8sSmartResource,
  Spacer,
  getLinkToForm,
  TSingleResource,
  TJSON,
  useSmartResourceParams,
  useManyK8sSmartResource,
  useResourceScope,
} from '@prorobotech/openapi-k8s-toolkit'
import {
  // FlexGrow,
  PaddingContainer,
  SelectorNamespaceNew,
  SelectorNamespaceProjectNew,
  MainContentFixedTop,
} from 'components'
import { TABLE_PROPS } from 'constants/tableProps'
import { BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'
import { MainContentFixedBottom } from 'components/atoms/MainContentFixedBottom/MainContentFixedBottom'
// import {
//   HEAD_FIRST_ROW,
//   HEAD_SECOND_ROW,
//   FOOTER_HEIGHT,
//   NAV_HEIGHT,
//   CONTENT_CARD_PADDING,
//   TABLE_ADD_BUTTON_HEIGHT,
// } from 'constants/blocksSizes'
// import { OverflowContainer } from './atoms'

type TTableApiBuiltinProps = {
  namespace?: string
  resourceType: 'builtin' | 'api'
  apiGroup?: string // api
  apiVersion: string // api
  plural: string
  labels?: string[]
  fields?: string[]
  limit?: number
  inside?: boolean
  customizationIdPrefix: string
  searchMount?: boolean
  kindName?: string
}

export const TableApiBuiltin: FC<TTableApiBuiltinProps> = ({
  namespace,
  resourceType,
  apiGroup,
  apiVersion,
  plural,
  labels,
  fields,
  limit,
  inside,
  customizationIdPrefix,
  searchMount,
  kindName,
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const possibleProject = params.syntheticProject && namespace ? params.syntheticProject : namespace
  const possibleInstance = params.syntheticProject && namespace ? namespace : undefined

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<false | { name: string; endpoint: string }>(false)
  const [isDeleteModalManyOpen, setIsDeleteModalManyOpen] = useState<false | { name: string; endpoint: string }[]>(
    false,
  )
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [selectedRowsData, setSelectedRowsData] = useState<{ name: string; endpoint: string }[]>([])

  // const [height, setHeight] = useState(0)

  // useEffect(() => {
  //   const height =
  //     window.innerHeight -
  //     HEAD_FIRST_ROW -
  //     HEAD_SECOND_ROW -
  //     NAV_HEIGHT -
  //     CONTENT_CARD_PADDING * 2 -
  //     FOOTER_HEIGHT -
  //     TABLE_ADD_BUTTON_HEIGHT
  //   setHeight(height)

  //   const handleResize = () => {
  //     setHeight(height)
  //   }

  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  const createPermission = usePermissions({
    apiGroup: apiGroup || undefined,
    plural,
    namespace: params.namespace,
    cluster,
    verb: 'create',
    refetchInterval: false,
  })

  const {
    data: dataItems,
    isLoading,
    error,
  } = useK8sSmartResource<{ items: TSingleResource[] }>({
    cluster,
    namespace,
    apiGroup,
    apiVersion: apiVersion || '',
    plural,
    labelSelector: labels ? encodeURIComponent(labels.join(',')) : undefined,
    fieldSelector: fields ? encodeURIComponent(fields.join(',')) : undefined,
    limit,
  })

  const { data: resourceScope } = useResourceScope({ plural, cluster, apiGroup, apiVersion })

  const moreResourcesParams = useSmartResourceParams({ cluster, namespace })
  const moreResources = useManyK8sSmartResource(moreResourcesParams.paramsList)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const extrasTickKey = moreResources.map(r => String((r as any)?.debugTick ?? 0)).join('|')
  const additionalReqsData = moreResourcesParams.paramsList.length > 0 ? moreResources.map(el => el?.data) : undefined
  const dataItemsWithAdditionalData = dataItems?.items?.map(el => ({
    ...el,
    ...(additionalReqsData ? { additionalReqsData } : {}),
  }))

  const onDeleteHandle = (name: string, endpoint: string) => {
    setIsDeleteModalOpen({ name, endpoint })
  }

  const clearSelected = () => {
    setSelectedRowKeys([])
    setSelectedRowsData([])
  }

  const replaceValuesPartsOfUrls = location.pathname
    .split('/')
    .reduce<Record<string, string | undefined>>((acc, value, index) => {
      acc[index.toString()] = value
      return acc
    }, {})

  const fullPath = `${location.pathname}${location.search}`

  // const providerKey =
  //   resourceType === 'builtin'
  //     ? `/v1/${plural}-${extrasTickKey}`
  //     : `/${apiGroup}/${apiVersion}/${plural}-${extrasTickKey}`
  const providerKey = resourceType === 'builtin' ? `/v1/${plural}` : `/${apiGroup}/${apiVersion}/${plural}`

  return (
    <>
      {/* <OverflowContainer height={height} searchMount={searchMount}> */}
      {!searchMount && (
        <>
          <MainContentFixedTop>
            {BASE_USE_NAMESPACE_NAV === 'true' ? (
              <SelectorNamespaceNew
                cluster={cluster}
                namespace={namespace}
                disabled={resourceScope?.isNamespaceScoped === false}
              />
            ) : (
              <SelectorNamespaceProjectNew
                cluster={cluster}
                projectName={params.projectName || possibleProject}
                instanceName={params.instanceName || possibleInstance}
              />
            )}
            <Spacer $space={16} $samespace />
          </MainContentFixedTop>
          <Spacer $space={48} $samespace />
        </>
      )}
      {error && <Alert message={`An error has occurred: ${error} `} type="error" />}
      {isLoading && !dataItems && <Spin />}
      {!error && dataItems && (
        <EnrichedTableProvider
          key={providerKey}
          customizationId={
            resourceType === 'builtin'
              ? `${customizationIdPrefix}/v1/${plural}`
              : `${customizationIdPrefix}/${apiGroup}/${apiVersion}/${plural}`
          }
          tableMappingsReplaceValues={{
            cluster: params.cluster,
            projectName: params.projectName,
            instanceName: params.instanceName,
            namespace: params.namespace,
            syntheticProject: params.syntheticProject,
            entryType: params.entryType,
            apiGroup: params.apiGroup,
            apiVersion: params.apiVersion,
            plural: params.plural,
            name: params.name,
            apiExtensionVersion: params.apiExtensionVersion,
            crdName: params.crdName,
            ...replaceValuesPartsOfUrls,
          }}
          cluster={cluster}
          namespace={namespace}
          theme={theme}
          baseprefix={inside ? `${baseprefix}/inside` : baseprefix}
          dataItems={(dataItemsWithAdditionalData as TJSON[] | undefined) || []}
          k8sResource={{
            plural,
            apiGroup,
            apiVersion,
          }}
          dataForControls={{
            cluster,
            syntheticProject: params.syntheticProject,
            plural,
            apiGroup,
            apiVersion,
          }}
          dataForControlsInternal={{
            onDeleteHandle,
          }}
          selectData={{
            selectedRowKeys,
            onChange: (selectedRowKeys: React.Key[], selectedRowsData: { name: string; endpoint: string }[]) => {
              setSelectedRowKeys(selectedRowKeys)
              setSelectedRowsData(selectedRowsData)
            },
          }}
          tableProps={{ ...TABLE_PROPS, disablePagination: !searchMount }}
        />
      )}
      {/* </OverflowContainer> */}
      {/* {searchMount ? <Spacer $space={12} $samespace /> : <FlexGrow />} */}
      <Spacer $space={12} $samespace />
      <Spacer $space={36} $samespace />
      <MainContentFixedBottom>
        <PaddingContainer $padding="4px">
          <Flex justify="space-between">
            <div>
              <Button
                type="primary"
                onClick={() => {
                  const url = getLinkToForm({
                    cluster,
                    baseprefix,
                    namespace,
                    syntheticProject: params.syntheticProject,
                    apiGroup,
                    apiVersion,
                    plural,
                    inside,
                    fullPath,
                    searchMount,
                  })
                  navigate(url)
                }}
                loading={createPermission.isPending}
                disabled={!createPermission.data?.status.allowed}
              >
                <PlusOutlined />
                Add {kindName}
              </Button>
            </div>
            <div>
              {selectedRowKeys.length > 0 && (
                <Flex gap={16}>
                  <Button type="primary" onClick={clearSelected}>
                    <ClearOutlined />
                    Clear
                  </Button>
                  <Button type="primary" onClick={() => setIsDeleteModalManyOpen(selectedRowsData)}>
                    <MinusOutlined />
                    Delete
                  </Button>
                </Flex>
              )}
            </div>
          </Flex>
        </PaddingContainer>
      </MainContentFixedBottom>
      {isDeleteModalOpen && (
        <DeleteModal
          name={isDeleteModalOpen.name}
          onClose={() => {
            setIsDeleteModalOpen(false)
            clearSelected()
          }}
          endpoint={isDeleteModalOpen.endpoint}
        />
      )}
      {isDeleteModalManyOpen !== false && (
        <DeleteModalMany
          data={isDeleteModalManyOpen}
          onClose={() => {
            setIsDeleteModalManyOpen(false)
            clearSelected()
          }}
        />
      )}
    </>
  )
}
