/* eslint-disable no-nested-ternary */
import React, { FC } from 'react'
import { Select, Switch } from 'antd'
import type { TRbacGraphOptions } from 'localTypes/rbacGraph'
import { Styled } from './styled'

type TRbacGraphTogglesProps = {
  value: TRbacGraphOptions
  onChange: (options: TRbacGraphOptions) => void
}

export const RbacGraphToggles: FC<TRbacGraphTogglesProps> = ({ value, onChange }) => {
  const toggle = (key: keyof TRbacGraphOptions) => (checked: boolean) => onChange({ ...value, [key]: checked })
  const viewMode = value.starMode ? 'star' : value.reduceEdgeCrossings ? 'default-reduced' : 'default'

  const setViewMode = (nextValue: string) => {
    if (nextValue === 'star') {
      onChange({ ...value, starMode: true, reduceEdgeCrossings: false })
      return
    }

    onChange({
      ...value,
      starMode: false,
      reduceEdgeCrossings: nextValue === 'default-reduced',
    })
  }

  return (
    <Styled.Container>
      <Styled.SelectItem>
        <Styled.SelectLabel>View</Styled.SelectLabel>
        <Select
          size="small"
          value={viewMode}
          onChange={setViewMode}
          options={[
            { value: 'default', label: 'Default' },
            { value: 'default-reduced', label: 'Default reduced' },
            { value: 'star', label: 'Star' },
          ]}
          style={{ minWidth: 150 }}
        />
      </Styled.SelectItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.showRoles} onChange={toggle('showRoles')} />
        Roles
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.showBindings} onChange={toggle('showBindings')} />
        Bindings
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.showSubjects} onChange={toggle('showSubjects')} />
        Subjects
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.showAggregateEdges} onChange={toggle('showAggregateEdges')} />
        Aggregation
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.showPermissions} onChange={toggle('showPermissions')} />
        Permissions
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.includePods} onChange={toggle('includePods')} />
        Pods
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.includeWorkloads} onChange={toggle('includeWorkloads')} />
        Workloads
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.onlyReachable} onChange={toggle('onlyReachable')} />
        Only reachable
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.focusMode} onChange={toggle('focusMode')} />
        Focus mode
      </Styled.ToggleItem>
    </Styled.Container>
  )
}
