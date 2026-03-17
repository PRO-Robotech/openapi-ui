import React, { FC } from 'react'
import { Select, Input, InputNumber, Checkbox, Button } from 'antd'
import type { TRbacQueryPayload } from 'localTypes/rbacGraph'
import { Styled } from './styled'

type TSelectorOption = {
  label: string
  value: string
}

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
  onSelectorChange: (
    patch: Partial<{
      apiGroups: string[]
      apiVersions: string[]
      resources: string[]
      verbs: string[]
      nonResourceURLs: string[]
    }>,
  ) => void
  onChange: (payload: TRbacQueryPayload) => void
  onSubmit: () => void
  loading: boolean
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

export const RbacQueryForm: FC<TRbacQueryFormProps> = ({
  value,
  selectorLoading,
  selectorOptions,
  selectedApiVersions,
  onSelectorChange,
  onChange,
  onSubmit,
  loading,
}) => {
  const { spec } = value
  const { selector } = spec

  return (
    <Styled.FormGrid>
      <Styled.FormRow>
        <Styled.Label>API Groups</Styled.Label>
        <Select
          mode="multiple"
          loading={selectorLoading}
          value={selector.apiGroups}
          options={selectorOptions.apiGroups}
          onChange={apiGroups => onSelectorChange({ apiGroups })}
          placeholder="Select API groups"
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Versions</Styled.Label>
        <Select
          mode="multiple"
          loading={selectorLoading}
          value={selectedApiVersions}
          options={selectorOptions.apiVersions}
          onChange={apiVersions => onSelectorChange({ apiVersions })}
          placeholder="Select versions"
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Resources</Styled.Label>
        <Select
          mode="multiple"
          loading={selectorLoading}
          value={selector.resources}
          options={selectorOptions.resources}
          onChange={resources => onSelectorChange({ resources })}
          placeholder="Select resources"
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Verbs</Styled.Label>
        <Select
          mode="tags"
          loading={selectorLoading}
          value={selector.verbs}
          options={selectorOptions.verbs}
          onChange={verbs => onSelectorChange({ verbs })}
          placeholder="e.g. get, list, watch"
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Resource Names</Styled.Label>
        <Select
          mode="tags"
          value={selector.resourceNames}
          onChange={v => onChange(updateSelector(value, { resourceNames: v }))}
          placeholder="Specific resource names"
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Non-Resource URLs</Styled.Label>
        <Select
          mode="tags"
          options={selectorOptions.nonResourceURLs}
          value={selector.nonResourceURLs}
          onChange={nonResourceURLs => onSelectorChange({ nonResourceURLs })}
          placeholder="e.g. /healthz, /metrics"
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Match Mode</Styled.Label>
        <Select value={spec.matchMode} onChange={v => onChange(updateSpec(value, { matchMode: v }))}>
          <Select.Option value="any">Any</Select.Option>
          <Select.Option value="all">All</Select.Option>
        </Select>
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Pod Phase Mode</Styled.Label>
        <Select value={spec.podPhaseMode} onChange={v => onChange(updateSpec(value, { podPhaseMode: v }))}>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="running">Running</Select.Option>
          <Select.Option value="all">All</Select.Option>
        </Select>
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Max Pods per Subject</Styled.Label>
        <InputNumber
          min={0}
          value={spec.maxPodsPerSubject}
          onChange={v => onChange(updateSpec(value, { maxPodsPerSubject: v ?? 20 }))}
          style={{ width: '100%' }}
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Max Workloads per Pod</Styled.Label>
        <InputNumber
          min={0}
          value={spec.maxWorkloadsPerPod}
          onChange={v => onChange(updateSpec(value, { maxWorkloadsPerPod: v ?? 10 }))}
          style={{ width: '100%' }}
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Namespace Scope Namespaces</Styled.Label>
        <Select
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
        <Styled.Label>&nbsp;</Styled.Label>
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
          Namespace Scope Strict
        </Checkbox>
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Impersonate User</Styled.Label>
        <Input
          value={spec.impersonateUser}
          onChange={e => onChange(updateSpec(value, { impersonateUser: e.target.value || undefined }))}
          placeholder="Impersonate user"
        />
      </Styled.FormRow>

      <Styled.FormRow>
        <Styled.Label>Impersonate Group</Styled.Label>
        <Input
          value={spec.impersonateGroup}
          onChange={e => onChange(updateSpec(value, { impersonateGroup: e.target.value || undefined }))}
          placeholder="Impersonate group"
        />
      </Styled.FormRow>

      <Styled.ButtonRow>
        <Button type="primary" onClick={onSubmit} loading={loading}>
          Run Query
        </Button>
      </Styled.ButtonRow>
    </Styled.FormGrid>
  )
}
