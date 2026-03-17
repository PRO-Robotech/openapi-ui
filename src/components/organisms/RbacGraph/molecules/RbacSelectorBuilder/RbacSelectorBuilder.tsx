import React, { FC, useMemo } from 'react'
import { Collapse, Select, Spin } from 'antd'
import type { TKindWithVersion } from '@prorobotech/openapi-k8s-toolkit'
import { Styled } from './styled'

type TRbacSelectorBuilderProps = {
  kindsWithVersion: TKindWithVersion[]
  kindsLoading: boolean
  selected: {
    apiGroups: string[]
    apiVersions: string[]
    resources: string[]
    verbs: string[]
    nonResourceURLs: string[]
  }
  onSelectionChange: (sel: {
    apiGroups: string[]
    apiVersions: string[]
    resources: string[]
    verbs: string[]
    nonResourceURLs: string[]
  }) => void
}

type TFilterKey = 'verbs' | 'nonResourceURLs'

const FILTER_LABELS: Record<TFilterKey, string> = {
  verbs: 'Verbs',
  nonResourceURLs: 'Non-Resource URLs',
}
const CORE_GROUP_VALUE = '__core__'

const normalizeGroupValue = (value: string) => (value === '' ? CORE_GROUP_VALUE : value)
const denormalizeGroupValue = (value: string) => (value === CORE_GROUP_VALUE ? '' : value)

export const RbacSelectorBuilder: FC<TRbacSelectorBuilderProps> = ({
  kindsWithVersion,
  kindsLoading,
  selected,
  onSelectionChange,
}) => {
  const kindOptions = useMemo(() => {
    const groupValues = Array.from(new Set(kindsWithVersion.map(kind => kind.group))).sort((a, b) => a.localeCompare(b))
    const allowedGroups = selected.apiGroups.length > 0 ? new Set(selected.apiGroups) : null
    const versionValues = Array.from(
      new Set(
        kindsWithVersion
          .filter(kind => !allowedGroups || allowedGroups.has(kind.group))
          .map(kind => kind.version.version),
      ),
    ).sort((a, b) => a.localeCompare(b))
    const allowedVersions = selected.apiVersions.length > 0 ? new Set(selected.apiVersions) : null
    const resourceValues = Array.from(
      new Set(
        kindsWithVersion
          .filter(kind => !allowedGroups || allowedGroups.has(kind.group))
          .filter(kind => !allowedVersions || allowedVersions.has(kind.version.version))
          .map(kind => kind.version.resource),
      ),
    ).sort((a, b) => a.localeCompare(b))

    return {
      groups: groupValues.map(value => ({ value: normalizeGroupValue(value), label: value || '(core)' })),
      versions: versionValues.map(value => ({ value, label: value })),
      resources: resourceValues.map(value => ({ value, label: value })),
    }
  }, [kindsWithVersion, selected.apiGroups, selected.apiVersions])

  return (
    <Styled.Container>
      <Collapse
        ghost
        items={[
          {
            key: 'selector-builder',
            label: 'Selector Builder',
            children: (
              <>
                {kindsLoading ? (
                  <Styled.LoadingContainer>
                    <Spin size="small" />
                  </Styled.LoadingContainer>
                ) : (
                  <Styled.SelectorsGrid>
                    <Styled.SelectorColumn>
                      <Styled.GroupTitle>API Groups</Styled.GroupTitle>
                      <Select
                        mode="multiple"
                        allowClear
                        placeholder="Select API groups"
                        options={kindOptions.groups}
                        value={selected.apiGroups.map(normalizeGroupValue)}
                        onChange={values =>
                          onSelectionChange({
                            ...selected,
                            apiGroups: values.map(denormalizeGroupValue),
                          })
                        }
                      />
                    </Styled.SelectorColumn>
                    <Styled.SelectorColumn>
                      <Styled.GroupTitle>Versions</Styled.GroupTitle>
                      <Select
                        mode="multiple"
                        allowClear
                        placeholder="Select versions"
                        options={kindOptions.versions}
                        value={selected.apiVersions}
                        onChange={values => onSelectionChange({ ...selected, apiVersions: values })}
                      />
                    </Styled.SelectorColumn>
                    <Styled.SelectorColumn>
                      <Styled.GroupTitle>Resources</Styled.GroupTitle>
                      <Select
                        mode="multiple"
                        allowClear
                        placeholder="Select resources"
                        options={kindOptions.resources}
                        value={selected.resources}
                        onChange={values => onSelectionChange({ ...selected, resources: values })}
                      />
                    </Styled.SelectorColumn>
                  </Styled.SelectorsGrid>
                )}
                <Styled.GroupsGrid>
                  {(['verbs', 'nonResourceURLs'] as TFilterKey[]).map(group => (
                    <Styled.GroupColumn key={group}>
                      <Styled.GroupTitle>{FILTER_LABELS[group]}</Styled.GroupTitle>
                      <Select
                        mode="tags"
                        value={selected[group]}
                        onChange={values => onSelectionChange({ ...selected, [group]: values })}
                        placeholder={group === 'verbs' ? 'e.g. get, list, watch' : 'e.g. /healthz, /metrics'}
                      />
                    </Styled.GroupColumn>
                  ))}
                </Styled.GroupsGrid>
                {!kindsLoading && !kindsWithVersion.length && (
                  <Styled.EmptyState>No Kubernetes kinds available for selector options.</Styled.EmptyState>
                )}
              </>
            ),
          },
        ]}
      />
    </Styled.Container>
  )
}
