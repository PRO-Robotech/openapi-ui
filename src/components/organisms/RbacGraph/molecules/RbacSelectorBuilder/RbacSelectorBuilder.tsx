import React, { FC, useState, useMemo } from 'react'
import { Collapse, Button, Checkbox, Input } from 'antd'
import type { TRbacDiscoverResponse } from 'localTypes/rbacGraph'
import { Styled } from './styled'

type TRbacSelectorBuilderProps = {
  discovered: TRbacDiscoverResponse | undefined
  onDiscover: () => void
  discoverLoading: boolean
  selected: { verbs: string[]; apiGroups: string[]; resources: string[]; nonResourceURLs: string[] }
  onSelectionChange: (sel: {
    verbs: string[]
    apiGroups: string[]
    resources: string[]
    nonResourceURLs: string[]
  }) => void
}

type TGroupKey = 'verbs' | 'apiGroups' | 'resources' | 'nonResourceURLs'

const GROUP_LABELS: Record<TGroupKey, string> = {
  verbs: 'Verbs',
  apiGroups: 'API Groups',
  resources: 'Resources',
  nonResourceURLs: 'Non-Resource URLs',
}

const GROUPS: TGroupKey[] = ['verbs', 'apiGroups', 'resources', 'nonResourceURLs']

export const RbacSelectorBuilder: FC<TRbacSelectorBuilderProps> = ({
  discovered,
  onDiscover,
  discoverLoading,
  selected,
  onSelectionChange,
}) => {
  const [filters, setFilters] = useState<Record<TGroupKey, string>>({
    verbs: '',
    apiGroups: '',
    resources: '',
    nonResourceURLs: '',
  })

  const filteredItems = useMemo(() => {
    if (!discovered) return null
    const result: Record<TGroupKey, string[]> = { verbs: [], apiGroups: [], resources: [], nonResourceURLs: [] }
    GROUPS.forEach(g => {
      const filter = filters[g].toLowerCase()
      result[g] = (discovered[g] ?? []).filter(item => !filter || item.toLowerCase().includes(filter))
    })
    return result
  }, [discovered, filters])

  const handleToggle = (group: TGroupKey, item: string, checked: boolean) => {
    const current = selected[group]
    const next = checked ? [...current, item] : current.filter(v => v !== item)
    onSelectionChange({ ...selected, [group]: next })
  }

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
                <Button size="small" onClick={onDiscover} loading={discoverLoading} style={{ marginBottom: 12 }}>
                  Discover from cluster
                </Button>
                {filteredItems && (
                  <Styled.GroupsGrid>
                    {GROUPS.map(group => (
                      <Styled.GroupColumn key={group}>
                        <Styled.GroupTitle>{GROUP_LABELS[group]}</Styled.GroupTitle>
                        <Input
                          size="small"
                          placeholder="Filter..."
                          value={filters[group]}
                          onChange={e => setFilters(prev => ({ ...prev, [group]: e.target.value }))}
                        />
                        <Styled.CheckboxList>
                          {filteredItems[group].map(item => (
                            <Checkbox
                              key={item}
                              checked={selected[group].includes(item)}
                              onChange={e => handleToggle(group, item, e.target.checked)}
                            >
                              {item || '(core)'}
                            </Checkbox>
                          ))}
                        </Styled.CheckboxList>
                      </Styled.GroupColumn>
                    ))}
                  </Styled.GroupsGrid>
                )}
              </>
            ),
          },
        ]}
      />
    </Styled.Container>
  )
}
