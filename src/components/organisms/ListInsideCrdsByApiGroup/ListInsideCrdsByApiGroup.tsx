import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spin, Alert, Typography } from 'antd'
import {
  Spacer,
  useApiResourceTypesByGroup,
  TApiGroupResourceTypeList,
  filterIfApiInstanceNamespaceScoped,
} from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { TitleWithNoTopMargin } from 'components/atoms'

type TListInsideCrdsByApiGroupProps = {
  namespace?: string
  apiGroup: string
  apiVersion: string
  apiExtensionVersion: string
}

export const ListInsideCrdsByApiGroup: FC<TListInsideCrdsByApiGroupProps> = ({
  namespace,
  apiGroup,
  apiVersion,
  apiExtensionVersion,
}) => {
  const navigate = useNavigate()
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)
  const [filteredResources, setFilteredResources] = useState<TApiGroupResourceTypeList['resources']>()

  const { isPending, error, data } = useApiResourceTypesByGroup({
    cluster,
    apiGroup,
    apiVersion,
  })

  useEffect(() => {
    filterIfApiInstanceNamespaceScoped({ namespace, data, apiGroup, apiVersion, cluster }).then(data =>
      setFilteredResources(data),
    )
  }, [namespace, data, apiGroup, apiVersion, cluster])

  return (
    <>
      <TitleWithNoTopMargin level={3}>CRD Groups</TitleWithNoTopMargin>
      <Spacer $space={20} $samespace />
      {isPending && <Spin />}
      {!error &&
        data &&
        filteredResources &&
        filteredResources
          .filter(({ name }) => !name.includes('/'))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name }) => {
            return (
              <div key={name}>
                <Typography.Link
                  onClick={() =>
                    navigate(
                      `${baseprefix}/inside/${cluster}${
                        namespace ? `/${namespace}` : ''
                      }/crd-table/${apiGroup}/${apiVersion}/${apiExtensionVersion}/${name}.${apiGroup}`,
                    )
                  }
                >
                  {name}
                </Typography.Link>
              </div>
            )
          })}
      {error && <Alert message={`An error has occurred: ${error?.message} `} type="error" />}
    </>
  )
}
