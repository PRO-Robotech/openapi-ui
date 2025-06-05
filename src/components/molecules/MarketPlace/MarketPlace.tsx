/* eslint-disable max-lines-per-function */
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import { usePermissions, useDirectUnknownResource, DeleteModal, Spacer } from '@prorobotech/openapi-k8s-toolkit'
import { notification, Typography, Flex, Switch, Spin, Alert } from 'antd'
import { BASE_API_GROUP, BASE_API_VERSION } from 'constants/customizationApiGroupAndVersion'
import { TMarketPlacePanelResponse, TMarketPlacePanelResource, TMarketPlacePanel } from 'localTypes/marketplace'
import { AddCard } from './atoms'
import { AddEditFormModal, MarketplaceCard, SearchTextInput } from './molecules'
import { Styled } from './styled'

export const MarketPlace: FC = () => {
  const [api, contextHolder] = notification.useNotification()

  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isAddEditOpen, setIsAddEditOpen] = useState<boolean | TMarketPlacePanelResource>(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState<{ name: string } | boolean>(false)

  const [createUpdateError, setCreateUpdateError] = useState<AxiosError | Error>()
  const [deleteError, setDeleteError] = useState<AxiosError | Error>()

  const [initialData, setInitialData] = useState<TMarketPlacePanel[]>([])
  const [filteredAndSortedData, setFilterAndSortedData] = useState<TMarketPlacePanel[]>([])
  const [uniqueTags, setUniqueTags] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const { clusterName, namespace } = useParams()

  const {
    data: marketplacePanels,
    isLoading,
    error,
  } = useDirectUnknownResource<TMarketPlacePanelResponse>({
    uri: `/api/clusters/${clusterName}/k8s/apis/${BASE_API_GROUP}/${BASE_API_VERSION}/marketplacepanels/`,
    refetchInterval: 5000,
    queryKey: ['marketplacePanels', clusterName || 'no-cluster'],
    isEnabled: clusterName !== undefined,
  })

  const createPermission = usePermissions({
    apiGroup: BASE_API_GROUP,
    typeName: 'marketplacepanels',
    namespace: '',
    clusterName: clusterName || '',
    verb: 'create',
    refetchInterval: false,
  })

  const updatePermission = usePermissions({
    apiGroup: BASE_API_GROUP,
    typeName: 'marketplacepanels',
    namespace: '',
    clusterName: clusterName || '',
    verb: 'update',
    refetchInterval: false,
  })

  const deletePermission = usePermissions({
    apiGroup: BASE_API_GROUP,
    typeName: 'marketplacepanels',
    namespace: '',
    clusterName: clusterName || '',
    verb: 'delete',
    refetchInterval: false,
  })

  const onCreateSuccess = () =>
    api.success({
      message: 'Card created',
      key: 'create-marketplace-success',
    })

  const onUpdateSuccess = () =>
    api.success({
      message: 'Card modified',
      key: 'update-marketplace-success',
    })

  useEffect(() => {
    if (marketplacePanels) {
      if (isEditMode) {
        setInitialData(marketplacePanels.items.map(({ spec }) => spec).sort())
        setUniqueTags(
          marketplacePanels.items
            .flatMap(({ spec }) => spec.tags)
            .filter((value, index, arr) => arr.indexOf(value) === index),
        )
      } else {
        setInitialData(
          marketplacePanels.items
            .map(({ spec }) => spec)
            .filter(({ hidden }) => hidden !== true)
            .sort(),
        )
        setUniqueTags(
          marketplacePanels.items
            .filter(({ spec }) => spec.hidden !== true)
            .flatMap(({ spec }) => spec.tags)
            .filter((value, index, arr) => arr.indexOf(value) === index),
        )
      }
    }
  }, [marketplacePanels, isEditMode])

  useEffect(() => {
    let newData: TMarketPlacePanel[] = []

    if (selectedTags && selectedTags.length > 0) {
      newData = initialData
        .filter(
          ({ name, description, tags }) =>
            selectedTags.some(tag => name.toLowerCase().includes(tag.toLowerCase())) ||
            selectedTags.some(tag => description.toLowerCase().includes(tag.toLowerCase())) ||
            selectedTags.some(tag => tags.some(el => el.toLowerCase().includes(tag.toLowerCase()))),
        )
        .sort()
    } else {
      newData = initialData.sort()
    }

    setFilterAndSortedData(newData)
  }, [selectedTags, initialData])

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  if (isLoading) {
    return <Spin />
  }

  if (!marketplacePanels) {
    return <div>No panels</div>
  }

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <>
      {contextHolder}
      <Flex justify="space-between">
        <div>
          <Flex gap={12} vertical>
            <div>
              <Typography.Text type="secondary">Available Products</Typography.Text>
            </div>
            <div>
              <Styled.BigValue>Marketplace</Styled.BigValue>
            </div>
          </Flex>
        </div>
        <div>
          <Flex gap={12} vertical>
            <SearchTextInput uniqueTags={uniqueTags} selectedTags={selectedTags} onSelectedTags={setSelectedTags} />
            {(createPermission.data?.status.allowed ||
              updatePermission.data?.status.allowed ||
              deletePermission.data?.status.allowed) && (
              <Flex align="center" gap={8}>
                <Switch defaultChecked checked={isEditMode} onClick={toggleEditMode} /> Edit Mode
              </Flex>
            )}
          </Flex>
        </div>
      </Flex>
      <Spacer $space={20} $samespace />
      {createUpdateError && (
        <Alert
          description={JSON.stringify(createUpdateError)}
          message="Card was not created"
          onClose={() => setCreateUpdateError(undefined)}
          type="error"
        />
      )}
      {deleteError && (
        <Alert
          description={JSON.stringify(deleteError)}
          message="Card was not deleted"
          onClose={() => setDeleteError(undefined)}
          type="error"
        />
      )}
      <Flex gap={22}>
        {clusterName &&
          namespace &&
          filteredAndSortedData.map(
            ({ name, description, icon, type, pathToNav, typeName, apiGroup, apiVersion, tags, disabled }) => (
              <MarketplaceCard
                key={name}
                description={description}
                disabled={disabled}
                icon={icon}
                isEditMode={isEditMode}
                name={name}
                clusterName={clusterName}
                namespace={namespace}
                type={type}
                pathToNav={pathToNav}
                typeName={typeName}
                apiGroup={apiGroup}
                apiVersion={apiVersion}
                tags={tags}
                onDeleteClick={() => {
                  const entry = marketplacePanels.items.find(({ spec }) => spec.name === name)
                  setIsDeleteOpen(entry ? { name: entry.metadata.name } : false)
                }}
                onEditClick={() => {
                  setIsAddEditOpen(marketplacePanels.items.find(({ spec }) => spec.name === name) || false)
                }}
              />
            ),
          )}
        {isEditMode && (
          <AddCard
            onAddClick={() => {
              setIsAddEditOpen(true)
            }}
          />
        )}
      </Flex>
      {isAddEditOpen && (
        <AddEditFormModal
          isOpen={isAddEditOpen}
          setError={setCreateUpdateError}
          setIsOpen={setIsAddEditOpen}
          onCreateSuccess={onCreateSuccess}
          onUpdateSuccess={onUpdateSuccess}
        />
      )}
      {typeof isDeleteOpen !== 'boolean' && (
        <DeleteModal
          name={isDeleteOpen.name}
          onClose={() => setIsDeleteOpen(false)}
          endpoint={`/api/clusters/${clusterName}/k8s/apis/${BASE_API_GROUP}/${BASE_API_VERSION}/marketplacepanels/${isDeleteOpen.name}`}
        />
      )}
    </>
  )
}
