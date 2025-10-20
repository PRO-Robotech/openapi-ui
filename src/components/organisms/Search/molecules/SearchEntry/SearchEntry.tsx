import React, { FC, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {
  TKindWithVersion,
  kindByGvr,
  namespacedByGvr,
  getUppercase,
  hslFromString,
  Spacer,
  UpIcon,
  DownIcon,
} from '@prorobotech/openapi-k8s-toolkit'
import { theme as antdtheme, Flex, FormInstance, Button } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { TableApiBuiltin } from 'components'
import { getTableCustomizationIdPrefix } from 'utils/getTableCustomizationIdPrefix'
import { BASE_USE_NAMESPACE_NAV } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

type TSearchEntryProps = {
  resource: string
  labels?: string[]
  fields?: string[]
  form: FormInstance
  constants: {
    FIELD_NAME: string
  }
  kindsWithVersion: TKindWithVersion[]
}

export const SearchEntry: FC<TSearchEntryProps> = ({ resource, labels, fields, form, constants, kindsWithVersion }) => {
  const { namespace, syntheticProject } = useParams()
  const [searchParams] = useSearchParams()
  const { token } = antdtheme.useToken()

  const [isOpen, setIsOpen] = useState<boolean>(true)

  const theme = useSelector((state: RootState) => state.openapiTheme.theme)

  const { FIELD_NAME } = constants

  const [apiGroup, apiVersion, typeName] = resource.split('~')

  const kindName = kindByGvr(kindsWithVersion)(resource)
  const abbr = getUppercase(kindName && kindName.length ? kindName : 'Loading')
  const bgColor = kindName && kindName.length ? hslFromString(kindName, theme) : ''

  const isNamespaceResource = namespacedByGvr(kindsWithVersion)(resource)

  const tableCustomizationIdPrefix = getTableCustomizationIdPrefix({
    instance: !!syntheticProject,
    project: BASE_USE_NAMESPACE_NAV !== 'true' && !!namespace,
    namespace: !!namespace,
    search: true,
  })

  const removeKind = (value: string) => {
    const cur: string[] = form.getFieldValue(FIELD_NAME) || []
    form.setFieldsValue({ [FIELD_NAME]: cur.filter(v => v !== value) })
  }

  return (
    <Styled.Container $colorBorder={token.colorBorder} $colorText={token.colorText}>
      <Flex justify="space-between" align="center">
        <Flex gap={10}>
          <Styled.CustomTag
            key={resource}
            onClose={e => {
              e.preventDefault()
              removeKind(resource)
            }}
            closable
          >
            {kindName && kindName.length && bgColor.length && <Styled.Abbr $bgColor={bgColor}>{abbr}</Styled.Abbr>}
            {kindName}
          </Styled.CustomTag>
          <Styled.ApiGroupVersion $colorTextDescription={token.colorTextDescription}>
            {apiGroup && apiGroup.length > 0 ? `${apiGroup}/` : ''}
            {apiVersion}
          </Styled.ApiGroupVersion>
        </Flex>
        <div>
          <Button type="text" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <DownIcon size={14} /> : <UpIcon size={14} />}
          </Button>
        </div>
      </Flex>
      {isOpen && (
        <>
          <Spacer $space={12} $samespace />
          {typeName && (
            <TableApiBuiltin
              resourceType={apiGroup.length > 0 ? 'api' : 'builtin'}
              namespace={isNamespaceResource ? namespace : undefined}
              apiGroup={apiGroup.length > 0 ? apiGroup : undefined}
              apiVersion={apiVersion}
              typeName={typeName}
              labels={labels?.length ? labels : undefined}
              fields={fields?.length ? fields : undefined}
              limit={searchParams.get('limit')}
              customizationIdPrefix={tableCustomizationIdPrefix}
              searchMount
              kindName={kindName}
            />
          )}
        </>
      )}
    </Styled.Container>
  )
}
