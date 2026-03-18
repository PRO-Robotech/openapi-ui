/* eslint-disable max-lines-per-function */
import React, { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import {
  AppstoreOutlined,
  ClearOutlined,
  ControlOutlined,
  FilterOutlined,
  PlayCircleOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, Collapse, Input, InputNumber, Select, theme } from 'antd'
import type { CollapseProps } from 'antd'
import type { TRbacQueryPayload } from 'localTypes/rbacGraph'
import { Styled } from './styled'

type TSelectorOption = {
  label: string
  value: string
}

type TSelectorPatch = Partial<{
  apiGroups: string[]
  apiVersions: string[]
  resources: string[]
  verbs: string[]
  nonResourceURLs: string[]
}>

type TRbacQueryFormProps = {
  value: TRbacQueryPayload
  selectorLoading: boolean
  selectorOptions: {
    apiGroups: TSelectorOption[]
    apiVersions: TSelectorOption[]
    resources: TSelectorOption[]
    verbs: TSelectorOption[]
    nonResourceURLs: TSelectorOption[]
  }
  selectedApiVersions: string[]
  onSelectorChange: (patch: TSelectorPatch) => void
  onChange: (payload: TRbacQueryPayload) => void
  onSubmit: () => void
  onReset: () => void
  loading: boolean
}

type TSectionLabelOptions = {
  colorPrimary: string
  colorFillSecondary: string
  borderRadiusLG: number
}

const DEFAULT_SPEC: TRbacQueryPayload['spec'] = {
  selector: {
    apiGroups: [],
    resources: [],
    verbs: [],
    resourceNames: [],
    nonResourceURLs: [],
  },
  matchMode: 'any',
  includeRuleMetadata: true,
  includePods: false,
  includeWorkloads: false,
  podPhaseMode: 'active',
  maxPodsPerSubject: 20,
  maxWorkloadsPerPod: 10,
}

const updateSpec = (prev: TRbacQueryPayload, patch: Partial<TRbacQueryPayload['spec']>): TRbacQueryPayload => ({
  spec: { ...prev.spec, ...patch },
})

const updateSelector = (
  prev: TRbacQueryPayload,
  patch: Partial<TRbacQueryPayload['spec']['selector']>,
): TRbacQueryPayload => ({
  spec: { ...prev.spec, selector: { ...prev.spec.selector, ...patch } },
})

const createSectionLabel = (
  icon: ReactNode,
  title: string,
  activeCount: number,
  { colorPrimary, colorFillSecondary, borderRadiusLG }: TSectionLabelOptions,
) => (
  <Styled.SectionLabel>
    <Styled.SectionLabelMain>
      <Styled.SectionIcon $color={colorPrimary}>{icon}</Styled.SectionIcon>
      <span>{title}</span>
    </Styled.SectionLabelMain>
    <Styled.ActiveBadge
      $background={colorFillSecondary}
      $borderRadiusLG={borderRadiusLG}
      $color={colorPrimary}
      $visible={activeCount > 0}
    >
      {activeCount > 0 ? `${activeCount} active` : '0 active'}
    </Styled.ActiveBadge>
  </Styled.SectionLabel>
)

const getPrimarySelectorCount = (spec: TRbacQueryPayload['spec'], selectedApiVersions: string[]) =>
  [
    spec.selector.apiGroups,
    selectedApiVersions,
    spec.selector.resources,
    spec.selector.verbs,
    spec.selector.resourceNames,
    spec.selector.nonResourceURLs,
  ].filter(values => values.length > 0).length

const getScopeIdentityCount = (spec: TRbacQueryPayload['spec']) =>
  [
    spec.matchMode !== DEFAULT_SPEC.matchMode,
    Boolean(spec.namespaceScope?.namespaces?.length),
    Boolean(spec.namespaceScope?.strict),
    Boolean(spec.impersonateUser),
    Boolean(spec.impersonateGroup),
  ].filter(Boolean).length

const getRuntimeLimitsCount = (spec: TRbacQueryPayload['spec']) =>
  [
    spec.podPhaseMode !== DEFAULT_SPEC.podPhaseMode,
    spec.maxPodsPerSubject !== DEFAULT_SPEC.maxPodsPerSubject,
    spec.maxWorkloadsPerPod !== DEFAULT_SPEC.maxWorkloadsPerPod,
  ].filter(Boolean).length

export const RbacQueryForm: FC<TRbacQueryFormProps> = ({
  value,
  selectorLoading,
  selectorOptions,
  selectedApiVersions,
  onSelectorChange,
  onChange,
  onSubmit,
  onReset,
  loading,
}) => {
  const { token } = theme.useToken()
  const { spec } = value
  const { selector } = spec
  const [activeSectionKeys, setActiveSectionKeys] = useState<string[]>([
    'primary-selectors',
    'scope-identity',
    'runtime-limits',
  ])

  const sectionLabelOptions = useMemo<TSectionLabelOptions>(
    () => ({
      colorPrimary: token.colorPrimary,
      colorFillSecondary: token.colorFillSecondary,
      borderRadiusLG: token.borderRadiusLG,
    }),
    [token.borderRadiusLG, token.colorFillSecondary, token.colorPrimary],
  )

  const sectionItems = useMemo<CollapseProps['items']>(
    () => [
      {
        key: 'primary-selectors',
        label: createSectionLabel(
          <FilterOutlined />,
          'Primary selectors',
          getPrimarySelectorCount(spec, selectedApiVersions),
          sectionLabelOptions,
        ),
        children: (
          <Styled.PrimarySectionGrid>
            <Styled.FormRow $span={6}>
              <Styled.Label $color={token.colorText}>API Groups</Styled.Label>
              <Select
                allowClear
                mode="multiple"
                loading={selectorLoading}
                tokenSeparators={[' ', ',']}
                value={selector.apiGroups}
                options={selectorOptions.apiGroups}
                onChange={apiGroups => onSelectorChange({ apiGroups })}
                placeholder="Select API groups"
              />
            </Styled.FormRow>

            <Styled.FormRow $span={6}>
              <Styled.Label $color={token.colorText}>Verbs</Styled.Label>
              <Select
                allowClear
                mode="tags"
                loading={selectorLoading}
                tokenSeparators={[' ', ',']}
                value={selector.verbs}
                options={selectorOptions.verbs}
                onChange={verbs => onSelectorChange({ verbs })}
                placeholder="e.g. get, list, watch"
              />
            </Styled.FormRow>

            <Styled.FormRow $span={6}>
              <Styled.Label $color={token.colorText}>Versions</Styled.Label>
              <Select
                allowClear
                mode="multiple"
                loading={selectorLoading}
                tokenSeparators={[' ', ',']}
                value={selectedApiVersions}
                options={selectorOptions.apiVersions}
                onChange={apiVersions => onSelectorChange({ apiVersions })}
                placeholder="Select versions"
              />
            </Styled.FormRow>

            <Styled.FormRow $span={6}>
              <Styled.Label $color={token.colorText}>Resources</Styled.Label>
              <Select
                allowClear
                mode="multiple"
                loading={selectorLoading}
                tokenSeparators={[' ', ',']}
                value={selector.resources}
                options={selectorOptions.resources}
                onChange={resources => onSelectorChange({ resources })}
                placeholder="Select resources"
              />
            </Styled.FormRow>

            <Styled.FormRow $span={6}>
              <Styled.Label $color={token.colorText}>Resource Names</Styled.Label>
              <Select
                allowClear
                mode="tags"
                tokenSeparators={[' ', ',']}
                value={selector.resourceNames}
                onChange={resourceNames => onChange(updateSelector(value, { resourceNames }))}
                placeholder="Specific resource names"
              />
            </Styled.FormRow>

            <Styled.FormRow $span={6}>
              <Styled.Label $color={token.colorText}>Non-Resource URLs</Styled.Label>
              <Select
                allowClear
                mode="tags"
                tokenSeparators={[' ', ',']}
                options={selectorOptions.nonResourceURLs}
                value={selector.nonResourceURLs}
                onChange={nonResourceURLs => onSelectorChange({ nonResourceURLs })}
                placeholder="e.g. /healthz, /metrics"
              />
            </Styled.FormRow>
          </Styled.PrimarySectionGrid>
        ),
      },
      {
        key: 'scope-identity',
        label: createSectionLabel(
          <SafetyCertificateOutlined />,
          'Scope & identity',
          getScopeIdentityCount(spec),
          sectionLabelOptions,
        ),
        children: (
          <Styled.SectionGrid>
            <Styled.FormRow>
              <Styled.Label $color={token.colorText}>Match Mode</Styled.Label>
              <Select value={spec.matchMode} onChange={v => onChange(updateSpec(value, { matchMode: v }))}>
                <Select.Option value="any">Any</Select.Option>
                <Select.Option value="all">All</Select.Option>
              </Select>
            </Styled.FormRow>

            <Styled.FormRow>
              <Styled.Label $color={token.colorText}>Namespace Scope Namespaces</Styled.Label>
              <Select
                allowClear
                mode="tags"
                tokenSeparators={[' ', ',']}
                value={spec.namespaceScope?.namespaces ?? []}
                onChange={v =>
                  onChange(
                    updateSpec(value, {
                      namespaceScope:
                        v.length > 0 || spec.namespaceScope?.strict
                          ? { namespaces: v, strict: spec.namespaceScope?.strict ?? false }
                          : undefined,
                    }),
                  )
                }
                placeholder="Filter by namespaces"
              />
            </Styled.FormRow>

            <Styled.FormRow>
              <Styled.Label $color={token.colorText}>Namespace Scope Strict</Styled.Label>
              <Styled.CheckboxWrap>
                <Checkbox
                  checked={spec.namespaceScope?.strict ?? false}
                  onChange={e => {
                    const strict = e.target.checked
                    const ns = spec.namespaceScope?.namespaces ?? []
                    onChange(
                      updateSpec(value, {
                        namespaceScope: strict || ns.length > 0 ? { namespaces: ns, strict } : undefined,
                      }),
                    )
                  }}
                >
                  Restrict namespace matches strictly
                </Checkbox>
              </Styled.CheckboxWrap>
            </Styled.FormRow>

            <Styled.FormRow>
              <Styled.Label $color={token.colorText}>Impersonate User</Styled.Label>
              <Input
                value={spec.impersonateUser}
                onChange={e => onChange(updateSpec(value, { impersonateUser: e.target.value || undefined }))}
                placeholder="Impersonate user"
              />
            </Styled.FormRow>

            <Styled.FormRow>
              <Styled.Label $color={token.colorText}>Impersonate Group</Styled.Label>
              <Input
                value={spec.impersonateGroup}
                onChange={e => onChange(updateSpec(value, { impersonateGroup: e.target.value || undefined }))}
                placeholder="Impersonate group"
              />
            </Styled.FormRow>
          </Styled.SectionGrid>
        ),
      },
      {
        key: 'runtime-limits',
        label: createSectionLabel(
          <ControlOutlined />,
          'Runtime limits',
          getRuntimeLimitsCount(spec),
          sectionLabelOptions,
        ),
        children: (
          <Styled.SectionGrid>
            <Styled.FormRow>
              <Styled.Label $color={token.colorText}>Pod Phase Mode</Styled.Label>
              <Select value={spec.podPhaseMode} onChange={v => onChange(updateSpec(value, { podPhaseMode: v }))}>
                <Select.Option value="active">Active</Select.Option>
                <Select.Option value="running">Running</Select.Option>
                <Select.Option value="all">All</Select.Option>
              </Select>
            </Styled.FormRow>

            <Styled.FormRow>
              <Styled.Label $color={token.colorText}>Max Pods per Subject</Styled.Label>
              <InputNumber
                min={0}
                value={spec.maxPodsPerSubject}
                onChange={v => onChange(updateSpec(value, { maxPodsPerSubject: v ?? DEFAULT_SPEC.maxPodsPerSubject }))}
                style={{ width: '100%' }}
              />
            </Styled.FormRow>

            <Styled.FormRow>
              <Styled.Label $color={token.colorText}>Max Workloads per Pod</Styled.Label>
              <InputNumber
                min={0}
                value={spec.maxWorkloadsPerPod}
                onChange={v =>
                  onChange(updateSpec(value, { maxWorkloadsPerPod: v ?? DEFAULT_SPEC.maxWorkloadsPerPod }))
                }
                style={{ width: '100%' }}
              />
            </Styled.FormRow>
          </Styled.SectionGrid>
        ),
      },
    ],
    [
      onChange,
      onSelectorChange,
      sectionLabelOptions,
      selectedApiVersions,
      selector,
      selectorLoading,
      selectorOptions,
      spec,
      token.colorText,
      value,
    ],
  )

  const handleSubmit = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setActiveSectionKeys([])
    onSubmit()
  }, [onSubmit])

  return (
    <Styled.Container
      $borderRadiusLG={token.borderRadiusLG}
      $colorBgContainer={token.colorBgContainer}
      $colorBorder={token.colorBorder}
    >
      <Styled.Header>
        <Styled.TitleBlock>
          <Styled.TitleRow>
            <Styled.TitleIcon $color={token.colorPrimary}>
              <AppstoreOutlined />
            </Styled.TitleIcon>
            <Styled.Title $color={token.colorText}>Query builder</Styled.Title>
          </Styled.TitleRow>
          <Styled.Description $color={token.colorTextDescription}>
            Configure selectors to visualize RBAC chain
          </Styled.Description>
        </Styled.TitleBlock>

        <Styled.Actions>
          <Button icon={<ClearOutlined />} onClick={onReset} disabled={loading}>
            Reset all
          </Button>
          <Button type="primary" icon={<PlayCircleOutlined />} onClick={handleSubmit} loading={loading}>
            Run query
          </Button>
        </Styled.Actions>
      </Styled.Header>

      <Collapse
        items={sectionItems}
        activeKey={activeSectionKeys}
        bordered={false}
        expandIconPosition="end"
        onChange={keys => setActiveSectionKeys(Array.isArray(keys) ? keys : [keys])}
      />
    </Styled.Container>
  )
}
