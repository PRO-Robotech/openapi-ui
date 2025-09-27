/* eslint-disable max-lines-per-function */
import React, { FC, useState, useEffect } from 'react'
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
  checkIfBuiltInInstanceNamespaceScoped,
  checkIfApiInstanceNamespaceScoped,
  useBuiltinResources,
  useApiResources,
  Spacer,
} from '@prorobotech/openapi-k8s-toolkit'
import { FlexGrow, PaddingContainer } from 'components'
import { TABLE_PROPS } from 'constants/tableProps'
import {
  HEAD_FIRST_ROW,
  HEAD_SECOND_ROW,
  FOOTER_HEIGHT,
  NAV_HEIGHT,
  CONTENT_CARD_PADDING,
  TABLE_ADD_BUTTON_HEIGHT,
} from 'constants/blocksSizes'
import { OverflowContainer } from './atoms'
import { getDataItems, getBackLinkToTable, getLinkToForm } from './utils'

type TTableApiBuiltinProps = {
  namespace?: string
  resourceType: 'builtin' | 'api'
  apiGroup?: string // api
  apiVersion?: string // api
  typeName: string
  specificName?: string
  labels?: string[]
  fields?: string[]
  limit: string | null
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
  typeName,
  specificName,
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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<false | { name: string; endpoint: string }>(false)
  const [isDeleteModalManyOpen, setIsDeleteModalManyOpen] = useState<false | { name: string; endpoint: string }[]>(
    false,
  )
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [selectedRowsData, setSelectedRowsData] = useState<{ name: string; endpoint: string }[]>([])
  const [isNamespaced, setIsNamespaced] = useState<boolean>()

  const [height, setHeight] = useState(0)

  useEffect(() => {
    const height =
      window.innerHeight -
      HEAD_FIRST_ROW -
      HEAD_SECOND_ROW -
      NAV_HEIGHT -
      CONTENT_CARD_PADDING * 2 -
      FOOTER_HEIGHT -
      TABLE_ADD_BUTTON_HEIGHT
    setHeight(height)

    const handleResize = () => {
      setHeight(height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (resourceType === 'builtin') {
      checkIfBuiltInInstanceNamespaceScoped({
        typeName,
        clusterName: cluster,
      }).then(({ isNamespaceScoped }) => {
        if (isNamespaceScoped) {
          setIsNamespaced(isNamespaceScoped)
        }
      })
    }
    if (resourceType === 'api' && apiGroup && apiVersion) {
      checkIfApiInstanceNamespaceScoped({
        apiGroup,
        apiVersion,
        typeName,
        clusterName: cluster,
      }).then(({ isNamespaceScoped }) => {
        if (isNamespaceScoped) {
          setIsNamespaced(true)
        }
      })
    }
  }, [resourceType, cluster, typeName, apiGroup, apiVersion])

  const createPermission = usePermissions({
    apiGroup: apiGroup || '',
    typeName,
    namespace: '',
    clusterName: cluster,
    verb: 'create',
    refetchInterval: false,
  })

  const updatePermission = usePermissions({
    apiGroup: apiGroup || '',
    typeName,
    namespace: '',
    clusterName: cluster,
    verb: 'update',
    refetchInterval: false,
  })

  const deletePermission = usePermissions({
    apiGroup: apiGroup || '',
    typeName,
    namespace: '',
    clusterName: cluster,
    verb: 'delete',
    refetchInterval: false,
  })

  const {
    isPending: isPendingBuiltin,
    error: errorBuiltin,
    data: dataBuiltin,
  } = useBuiltinResources({
    clusterName: cluster,
    namespace,
    typeName,
    specificName,
    labels,
    fields,
    limit,
    isEnabled: resourceType === 'builtin',
  })

  const {
    isPending: isPendingApi,
    error: errorApi,
    data: dataApi,
  } = useApiResources({
    clusterName: cluster,
    namespace,
    apiGroup: apiGroup || '',
    apiVersion: apiVersion || '',
    typeName,
    specificName,
    labels,
    fields,
    limit,
    isEnabled: resourceType === 'api' && !!apiGroup && !!apiVersion,
  })

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

  return (
    <>
      {((resourceType === 'builtin' && isPendingBuiltin) || (resourceType === 'api' && isPendingApi)) && <Spin />}
      {resourceType === 'builtin' && errorBuiltin && (
        <Alert message={`An error has occurred: ${errorBuiltin?.message} `} type="error" />
      )}
      {resourceType === 'api' && errorApi && (
        <Alert message={`An error has occurred: ${errorApi?.message} `} type="error" />
      )}
      <OverflowContainer height={height} searchMount={searchMount}>
        {!errorBuiltin &&
          !errorApi &&
          ((resourceType === 'builtin' && dataBuiltin) || (resourceType === 'api' && dataApi)) && (
            <EnrichedTableProvider
              key={resourceType === 'builtin' ? `/v1/${typeName}` : `/${apiGroup}/${apiVersion}/${typeName}`}
              customizationId={
                resourceType === 'builtin'
                  ? `${customizationIdPrefix}/v1/${typeName}`
                  : `${customizationIdPrefix}/${apiGroup}/${apiVersion}/${typeName}`
              }
              tableMappingsReplaceValues={{
                clusterName: params.clusterName,
                projectName: params.projectName,
                instanceName: params.instanceName,
                namespace: params.namespace,
                syntheticProject: params.syntheticProject,
                entryType: params.entryType,
                apiGroup: params.apiGroup,
                apiVersion: params.apiVersion,
                typeName: params.typeName,
                entryName: params.entryName,
                apiExtensionVersion: params.apiExtensionVersion,
                crdName: params.crdName,
                ...replaceValuesPartsOfUrls,
              }}
              cluster={cluster}
              theme={theme}
              baseprefix={inside ? `${baseprefix}/inside` : baseprefix}
              dataItems={getDataItems({ resourceType, dataBuiltin, dataApi, isSingle: !!specificName })}
              dataForControls={{
                cluster,
                syntheticProject: params.syntheticProject,
                pathPrefix: resourceType === 'builtin' ? 'forms/builtin' : 'forms/apis',
                typeName,
                apiVersion: resourceType === 'builtin' ? 'v1' : `${apiGroup}/${apiVersion}`,
                backlink: getBackLinkToTable({
                  resourceType,
                  cluster,
                  baseprefix,
                  namespace,
                  syntheticProject: params.syntheticProject,
                  apiGroup,
                  apiVersion,
                  typeName,
                  inside,
                  fullPath,
                  searchMount,
                }),
                deletePathPrefix:
                  resourceType === 'builtin' ? `/api/clusters/${cluster}/k8s/api` : `/api/clusters/${cluster}/k8s/apis`,
                onDeleteHandle,
                permissions: {
                  canUpdate: isNamespaced ? true : updatePermission.data?.status.allowed,
                  canDelete: isNamespaced ? true : deletePermission.data?.status.allowed,
                },
              }}
              selectData={{
                selectedRowKeys,
                onChange: (selectedRowKeys: React.Key[], selectedRowsData: { name: string; endpoint: string }[]) => {
                  setSelectedRowKeys(selectedRowKeys)
                  setSelectedRowsData(selectedRowsData)
                },
              }}
              tableProps={{ ...TABLE_PROPS, disablePagination: !searchMount }}
              // maxHeight={height - 65}
            />
          )}
        {/* {selectedRowKeys.length > 0 && (
          <MarginTopContainer $top={-40}>
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
          </MarginTopContainer>
        )} */}
      </OverflowContainer>

      {searchMount ? <Spacer $space={12} $samespace /> : <FlexGrow />}
      <PaddingContainer $padding="4px">
        <Flex justify="space-between">
          <Button
            type="primary"
            onClick={() => {
              const url = getLinkToForm({
                resourceType,
                cluster,
                baseprefix,
                namespace,
                syntheticProject: params.syntheticProject,
                apiGroup,
                apiVersion,
                typeName,
                inside,
                fullPath,
                searchMount,
              })
              navigate(url)
            }}
            loading={isNamespaced ? false : createPermission.isPending}
            disabled={isNamespaced ? false : !createPermission.data?.status.allowed}
          >
            <PlusOutlined />
            Add {kindName}
          </Button>
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
        </Flex>
      </PaddingContainer>
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
