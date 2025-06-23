import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spin, Alert, Typography } from 'antd'
import { Spacer, useApiResourceTypesByGroup, checkIfApiInstanceNamespaceScoped } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { TitleWithNoTopMargin } from 'components/atoms'
import { RootState } from 'store/store'

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
  const swagger = useSelector((state: RootState) => state.swagger.swagger)
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const { isPending, error, data } = useApiResourceTypesByGroup({
    clusterName: cluster,
    apiGroup,
    apiVersion,
  })

  const filteredResources =
    namespace && swagger
      ? data?.resources.filter(
          ({ name }) =>
            checkIfApiInstanceNamespaceScoped({ typeName: name, apiGroup, apiVersion, swagger }).isNamespaceScoped,
        )
      : data?.resources

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
