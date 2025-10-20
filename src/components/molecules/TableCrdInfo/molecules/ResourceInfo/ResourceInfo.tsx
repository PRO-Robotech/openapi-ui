/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Spin, Alert, Button, Flex } from 'antd'
import { PlusOutlined, ClearOutlined, MinusOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import {
  EnrichedTableProvider,
  DeleteModal,
  DeleteModalMany,
  TAdditionalPrinterColumns,
  useCrdResources,
} from '@prorobotech/openapi-k8s-toolkit'
import { FlexGrow, OverflowMaxHeightContainer, PaddingContainer } from 'components'
import { TABLE_PROPS } from 'constants/tableProps'
import {
  HEAD_FIRST_ROW,
  HEAD_SECOND_ROW,
  FOOTER_HEIGHT,
  NAV_HEIGHT,
  CONTENT_CARD_PADDING,
  TABLE_ADD_BUTTON_HEIGHT,
} from 'constants/blocksSizes'

type TResourceInfoProps = {
  clusterName: string
  namespace?: string
  crdName: string
  crdPluralName: string
  apiGroup: string
  apiVersion: string
  apiExtensionVersion: string
  crdAdditionalPrinterColumns?: TAdditionalPrinterColumns
  permissions: {
    canCreate?: boolean
    canUpdate?: boolean
    canDelete?: boolean
  }
  inside?: boolean
  customizationIdPrefix: string
}

export const ResourceInfo: FC<TResourceInfoProps> = ({
  clusterName,
  namespace,
  crdName,
  crdPluralName,
  apiGroup,
  apiVersion,
  apiExtensionVersion,
  crdAdditionalPrinterColumns,
  permissions,
  inside,
  customizationIdPrefix,
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

  const { isPending, error, data } = useCrdResources({
    clusterName,
    namespace,
    apiGroup,
    apiVersion,
    crdName: crdPluralName,
  })

  let resourceSchema = {}

  if (data && data.items.length > 0) {
    if (
      data.items[0] &&
      typeof data.items[0] === 'object' &&
      !Array.isArray(data.items[0]) &&
      data.items[0] !== null &&
      !Array.isArray(data.items[0].spec) &&
      data.items[0].spec !== null
    ) {
      resourceSchema = data.items[0].spec
    }
  }

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

  return <div>Most likely deprecated</div>

  // return (
  //   <>
  //     {isPending && <Spin />}
  //     {error && <Alert message={`An error has occurred: ${error?.message} `} type="error" />}
  //     <OverflowMaxHeightContainer $maxHeight={height}>
  //       {!error && data && (
  //         <EnrichedTableProvider
  //           key={`/${apiGroup}/${apiVersion}/${crdPluralName}`}
  //           customizationId={`${customizationIdPrefix}/${apiGroup}/${apiVersion}/${crdPluralName}`}
  //           tableMappingsReplaceValues={{
  //             clusterName: params.clusterName,
  //             projectName: params.projectName,
  //             instanceName: params.instanceName,
  //             namespace: params.namespace,
  //             syntheticProject: params.syntheticProject,
  //             entryType: params.entryType,
  //             apiGroup: params.apiGroup,
  //             apiVersion: params.apiVersion,
  //             typeName: params.typeName,
  //             entryName: params.entryName,
  //             apiExtensionVersion: params.apiExtensionVersion,
  //             crdName: params.crdName,
  //             ...replaceValuesPartsOfUrls,
  //           }}
  //           forceDefaultAdditionalPrinterColumns={crdAdditionalPrinterColumns}
  //           cluster={cluster}
  //           theme={theme}
  //           baseprefix={inside ? `${baseprefix}/inside` : baseprefix}
  //           dataItems={data.items}
  //           resourceSchema={resourceSchema}
  //           dataForControls={{
  //             cluster,
  //             syntheticProject: params.syntheticProject,
  //             pathPrefix: 'forms/crds',
  //             typeName: crdPluralName,
  //             apiVersion: `${apiGroup}/${apiVersion}`,
  //             backlink: `${baseprefix}${inside ? '/inside' : ''}/${cluster}${namespace ? `/${namespace}` : ''}${
  //               params.syntheticProject ? `/${params.syntheticProject}` : ''
  //             }/crd-table/${apiGroup}/${apiVersion}/${apiExtensionVersion}/${crdName}`,
  //             deletePathPrefix: `/api/clusters/${clusterName}/k8s/apis`,
  //             onDeleteHandle,
  //             permissions: {
  //               canUpdate: permissions.canUpdate,
  //               canDelete: permissions.canDelete,
  //             },
  //           }}
  //           selectData={{
  //             selectedRowKeys,
  //             onChange: (selectedRowKeys: React.Key[], selectedRowsData: { name: string; endpoint: string }[]) => {
  //               setSelectedRowKeys(selectedRowKeys)
  //               setSelectedRowsData(selectedRowsData)
  //             },
  //           }}
  //           tableProps={{ ...TABLE_PROPS, disablePagination: true }}
  //           // maxHeight={height - 65}
  //         />
  //       )}
  //       {/* {selectedRowKeys.length > 0 && (
  //         <MarginTopContainer $top={-40}>
  //           <Flex gap={16}>
  //             <Button type="primary" onClick={clearSelected}>
  //               <ClearOutlined />
  //               Clear
  //             </Button>
  //             <Button type="primary" onClick={() => setIsDeleteModalManyOpen(selectedRowsData)}>
  //               <MinusOutlined />
  //               Delete
  //             </Button>
  //           </Flex>
  //         </MarginTopContainer>
  //       )} */}
  //     </OverflowMaxHeightContainer>
  //     <FlexGrow />
  //     <PaddingContainer $padding="4px">
  //       <Flex justify="space-between">
  //         <Button
  //           type="primary"
  //           onClick={() =>
  //             navigate(
  //               `${baseprefix}${inside ? '/inside' : ''}/${cluster}${namespace ? `/${namespace}` : ''}${
  //                 params.syntheticProject ? `/${params.syntheticProject}` : ''
  //               }/forms/crds/${apiGroup}/${apiVersion}/${crdPluralName}?backlink=${baseprefix}${
  //                 inside ? '/inside' : ''
  //               }/${cluster}${namespace ? `/${namespace}` : ''}${
  //                 params.syntheticProject ? `/${params.syntheticProject}` : ''
  //               }/crd-table/${apiGroup}/${apiVersion}/${apiExtensionVersion}/${crdName}`,
  //             )
  //           }
  //           loading={permissions.canCreate === undefined}
  //           disabled={permissions.canCreate === false}
  //         >
  //           <PlusOutlined />
  //           Add
  //         </Button>
  //         {selectedRowKeys.length > 0 && (
  //           <Flex gap={16}>
  //             <Button type="primary" onClick={clearSelected}>
  //               <ClearOutlined />
  //               Clear
  //             </Button>
  //             <Button type="primary" onClick={() => setIsDeleteModalManyOpen(selectedRowsData)}>
  //               <MinusOutlined />
  //               Delete
  //             </Button>
  //           </Flex>
  //         )}
  //       </Flex>
  //     </PaddingContainer>
  //     {isDeleteModalOpen && (
  //       <DeleteModal
  //         name={isDeleteModalOpen.name}
  //         onClose={() => {
  //           setIsDeleteModalOpen(false)
  //           clearSelected()
  //         }}
  //         endpoint={isDeleteModalOpen.endpoint}
  //       />
  //     )}
  //     {isDeleteModalManyOpen !== false && (
  //       <DeleteModalMany
  //         data={isDeleteModalManyOpen}
  //         onClose={() => {
  //           setIsDeleteModalManyOpen(false)
  //           clearSelected()
  //         }}
  //       />
  //     )}
  //   </>
  // )
}
