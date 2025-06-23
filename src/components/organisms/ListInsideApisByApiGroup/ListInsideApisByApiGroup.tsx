import React, { FC, Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spin, Alert, Input, Typography } from 'antd'
import { Spacer, useApiResourceTypesByGroup, checkIfApiInstanceNamespaceScoped } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { TitleWithNoTopMargin } from 'components/atoms'
import { Styled } from './styled'

type TListInsideApisByApiGroupProps = {
  namespace?: string
  apiGroup: string
  apiVersion: string
}

export const ListInsideApisByApiGroup: FC<TListInsideApisByApiGroupProps> = ({ namespace, apiGroup, apiVersion }) => {
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const swagger = useSelector((state: RootState) => state.swagger.swagger)
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  const [limit, setLimit] = useState('')
  const navigate = useNavigate()

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
      <TitleWithNoTopMargin level={3}>API Groups</TitleWithNoTopMargin>
      <Spacer $space={20} $samespace />
      {isPending && <Spin />}
      {!error && data && (
        <Styled.Grid>
          {filteredResources &&
            filteredResources
              .filter(({ name }) => !name.includes('/'))
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(({ name }) => {
                return (
                  <Fragment key={name}>
                    <div>
                      <Typography.Link
                        onClick={() =>
                          navigate(
                            `${baseprefix}/inside/${cluster}${
                              namespace ? `/${namespace}` : ''
                            }/api-table/${apiGroup}/${apiVersion}/${name}`,
                          )
                        }
                      >
                        {name}
                      </Typography.Link>
                    </div>
                    <div>
                      <Input.Search
                        value={limit}
                        size="small"
                        onChange={e => setLimit(e.target.value.replace(/[^\d]/g, ''))}
                        enterButton="Go"
                        placeholder="Limit"
                        onSearch={() =>
                          navigate(
                            `${baseprefix}/inside/${cluster}${
                              namespace ? `/${namespace}` : ''
                            }/api-table/${apiGroup}/${apiVersion}/${name}${limit ? `?limit=${limit}` : ''}`,
                          )
                        }
                      />
                    </div>
                  </Fragment>
                )
              })}
        </Styled.Grid>
      )}
      {error && <Alert message={`An error has occurred: ${error?.message} `} type="error" />}
    </>
  )
}
