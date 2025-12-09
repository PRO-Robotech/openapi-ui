/* eslint-disable max-lines-per-function */
import React, { FC, Fragment, useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Search as PackageSearch, Spacer, useKinds, LookingGlassIcon } from '@prorobotech/openapi-k8s-toolkit'
import { ConfigProvider, theme as antdtheme, Form, Spin, Alert } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { HEAD_FIRST_ROW, HEAD_SECOND_ROW, FOOTER_HEIGHT, NAV_HEIGHT, CONTENT_CARD_PADDING } from 'constants/blocksSizes'
import {
  FIELD_NAME,
  FIELD_NAME_STRING,
  FIELD_NAME_LABELS,
  FIELD_NAME_FIELDS,
  QUERY_KEY,
  NAME_QUERY_KEY,
  LABELS_QUERY_KEY,
  FIELDS_QUERY_KEY,
  TYPE_SELECTOR,
  TYPE_QUERY_KEY,
} from './constants'
import {
  useDebouncedCallback,
  getArrayParam,
  setArrayParam,
  getStringParam,
  setStringParam,
  getTypeParam,
  setTypeParam,
} from './utils'
import { SearchEntry } from './molecules'
import { Styled } from './styled'

export const Search: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const { token } = antdtheme.useToken()

  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)

  const [form] = Form.useForm()

  const [height, setHeight] = useState(0)
  const [emptyHeight, setEmptyHeight] = useState(0)

  useEffect(() => {
    const height =
      window.innerHeight - HEAD_FIRST_ROW - HEAD_SECOND_ROW - NAV_HEIGHT - CONTENT_CARD_PADDING * 2 - FOOTER_HEIGHT - 1
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
    const emptyHeight =
      window.innerHeight -
      HEAD_FIRST_ROW -
      HEAD_SECOND_ROW -
      NAV_HEIGHT -
      CONTENT_CARD_PADDING * 2 -
      FOOTER_HEIGHT -
      1 -
      50 // packagesearch emptyy height
    setEmptyHeight(emptyHeight)

    const handleResize = () => {
      setEmptyHeight(emptyHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { data: kindsData, isLoading: kindsLoading, error: kindsError } = useKinds({ cluster })

  const watchedKinds = Form.useWatch<string[] | undefined>(FIELD_NAME, form)
  const watchedName = Form.useWatch<string | undefined>(FIELD_NAME_STRING, form)
  const watchedLabels = Form.useWatch<string[] | undefined>(FIELD_NAME_LABELS, form)
  const watchedFields = Form.useWatch<string[] | undefined>(FIELD_NAME_FIELDS, form)
  const watchedTypedSelector = Form.useWatch<string | undefined>(TYPE_SELECTOR, form)

  // —— hydration control to prevent “push empties” on first render ——
  const isHydratingRef = useRef(true)

  // First, synchronously hydrate form from URL so watchers aren’t undefined on paint
  useLayoutEffect(() => {
    const fromKinds = getArrayParam(searchParams, QUERY_KEY)
    const fromName = getStringParam(searchParams, NAME_QUERY_KEY)
    const fromLabels = getArrayParam(searchParams, LABELS_QUERY_KEY)
    const fromFields = getArrayParam(searchParams, FIELDS_QUERY_KEY)

    const explicitType = getTypeParam(searchParams, TYPE_QUERY_KEY)
    const inferredFromValues =
      (fromFields.length > 0 && 'fields') || (fromLabels.length > 0 && 'labels') || (fromName ? 'name' : undefined)
    const nextType = explicitType ?? inferredFromValues

    form.setFieldsValue({
      [FIELD_NAME]: fromKinds,
      [FIELD_NAME_STRING]: fromName,
      [FIELD_NAME_LABELS]: fromLabels,
      [FIELD_NAME_FIELDS]: fromFields,
      [TYPE_SELECTOR]: nextType,
    })

    isHydratingRef.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // keep form in sync if URL changes later (back/forward/external edits) ——
  useEffect(() => {
    if (isHydratingRef.current) return

    const fromKinds = getArrayParam(searchParams, QUERY_KEY)
    const currentKinds = form.getFieldValue(FIELD_NAME)
    const kindsDiffer =
      (fromKinds.length || 0) !== (currentKinds?.length || 0) || fromKinds.some((v, i) => v !== currentKinds?.[i])

    const fromName = getStringParam(searchParams, NAME_QUERY_KEY)
    const currentName = form.getFieldValue(FIELD_NAME_STRING)
    const nameDiffer = (fromName || '') !== (currentName || '')

    const fromLabels = getArrayParam(searchParams, LABELS_QUERY_KEY)
    const currentLabels = form.getFieldValue(FIELD_NAME_LABELS)
    const labelsDiffer =
      (fromLabels.length || 0) !== (currentLabels?.length || 0) || fromLabels.some((v, i) => v !== currentLabels?.[i])

    const fromFields = getArrayParam(searchParams, FIELDS_QUERY_KEY)
    const currentFields = form.getFieldValue(FIELD_NAME_FIELDS)
    const fieldsDiffer =
      (fromFields.length || 0) !== (currentFields?.length || 0) || fromFields.some((v, i) => v !== currentFields?.[i])

    const explicitType = getTypeParam(searchParams, TYPE_QUERY_KEY)
    const currentType = form.getFieldValue(TYPE_SELECTOR)
    const inferredFromValues =
      (fromFields.length > 0 && 'fields') || (fromLabels.length > 0 && 'labels') || (fromName ? 'name' : undefined)
    const nextType = explicitType ?? currentType ?? inferredFromValues
    const typeDiffer = nextType !== currentType

    if (kindsDiffer || nameDiffer || labelsDiffer || fieldsDiffer || typeDiffer) {
      form.setFieldsValue({
        [FIELD_NAME]: kindsDiffer ? fromKinds : currentKinds,
        [FIELD_NAME_STRING]: nameDiffer ? fromName : currentName,
        [FIELD_NAME_LABELS]: labelsDiffer ? fromLabels : currentLabels,
        [FIELD_NAME_FIELDS]: fieldsDiffer ? fromFields : currentFields,
        ...(typeDiffer ? { [TYPE_SELECTOR]: nextType } : {}),
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search])

  // debounced URL pushers (guarded against hydration & undefined) ——
  const debouncedPushKinds = useDebouncedCallback((values: string[]) => {
    const next = setArrayParam(searchParams, QUERY_KEY, values)
    setSearchParams(next, { replace: true })
  }, 250)

  const debouncedPushName = useDebouncedCallback((value: string) => {
    const next = setStringParam(searchParams, NAME_QUERY_KEY, value)
    setSearchParams(next, { replace: true })
  }, 250)

  const debouncedPushLabels = useDebouncedCallback((values: string[]) => {
    const next = setArrayParam(searchParams, LABELS_QUERY_KEY, values)
    setSearchParams(next, { replace: true })
  }, 250)

  const debouncedPushFields = useDebouncedCallback((values: string[]) => {
    const next = setArrayParam(searchParams, FIELDS_QUERY_KEY, values)
    setSearchParams(next, { replace: true })
  }, 250)

  useEffect(() => {
    if (isHydratingRef.current || watchedKinds === undefined) {
      return
    }
    debouncedPushKinds(watchedKinds)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedKinds])

  useEffect(() => {
    if (isHydratingRef.current || watchedName === undefined) {
      return
    }
    debouncedPushName(watchedName.trim())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedName])

  useEffect(() => {
    if (isHydratingRef.current || watchedLabels === undefined) {
      return
    }
    debouncedPushLabels(watchedLabels || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedLabels])

  useEffect(() => {
    if (isHydratingRef.current || watchedFields === undefined) {
      return
    }
    debouncedPushFields(watchedFields || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedFields])

  useEffect(() => {
    if (isHydratingRef.current || watchedTypedSelector === undefined) {
      return
    }
    const next = setTypeParam(searchParams, TYPE_QUERY_KEY, watchedTypedSelector)
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedTypedSelector])

  if (kindsLoading || !kindsData) {
    return <Spin />
  }

  if (kindsError) {
    return <Alert type="error" message="Error while loading kinds" description={kindsError?.message} />
  }

  return (
    <Styled.Container $height={height}>
      <Styled.OverflowContainer>
        <PackageSearch
          cluster={cluster}
          theme={theme}
          form={form}
          constants={{
            FIELD_NAME,
            FIELD_NAME_STRING,
            FIELD_NAME_LABELS,
            FIELD_NAME_FIELDS,
            TYPE_SELECTOR,
          }}
          kindsWithVersion={kindsData.kindsWithVersion}
        />
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: token.colorBgContainer,
              },
            },
          }}
        >
          {watchedKinds?.map(item => {
            const fields = [...(watchedFields || []), ...(watchedName ? [`metadata.name=${watchedName}`] : [])]
            return (
              <Fragment key={item}>
                <Spacer $space={20} $samespace />
                <SearchEntry
                  kindsWithVersion={kindsData.kindsWithVersion}
                  form={form}
                  constants={{
                    FIELD_NAME,
                  }}
                  resource={item}
                  labels={watchedLabels}
                  fields={fields.length ? fields : undefined}
                />
              </Fragment>
            )
          })}
        </ConfigProvider>

        {(watchedKinds && watchedKinds.length) ||
        (watchedName && watchedName.length) ||
        (watchedLabels && watchedLabels.length) ||
        (watchedFields && watchedFields.length) ? (
          <Spacer $space={20} $samespace />
        ) : (
          <Styled.EmptyContainer $height={emptyHeight}>
            <LookingGlassIcon />
            <Styled.EmptyText>Select search options</Styled.EmptyText>
          </Styled.EmptyContainer>
        )}
      </Styled.OverflowContainer>
    </Styled.Container>
  )
}
