import React, { FC } from 'react'
import { Switch, Select } from 'antd'
import type { TRbacGraphOptions } from 'localTypes/rbacGraph'
import { Styled } from './styled'

type TRbacGraphTogglesProps = {
  value: TRbacGraphOptions
  onChange: (options: TRbacGraphOptions) => void
}

export const RbacGraphToggles: FC<TRbacGraphTogglesProps> = ({ value, onChange }) => {
  const toggle = (key: keyof TRbacGraphOptions) => (checked: boolean) => onChange({ ...value, [key]: checked })

  return (
    <Styled.Container>
      <Styled.ToggleItem>
        <Switch size="small" checked={value.showAggregateEdges} onChange={toggle('showAggregateEdges')} />
        Aggregation links
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.onlyReachable} onChange={toggle('onlyReachable')} />
        Only reachable
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.showPermissions} onChange={toggle('showPermissions')} />
        Permissions
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.focusMode} onChange={toggle('focusMode')} />
        Focus mode
      </Styled.ToggleItem>

      <Styled.ToggleItem>
        <Switch size="small" checked={value.reduceEdgeCrossings} onChange={toggle('reduceEdgeCrossings')} />
        Reduce crossings
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
        <Select
          size="small"
          value={value.runtimeView}
          onChange={v => onChange({ ...value, runtimeView: v })}
          style={{ width: 140 }}
        >
          <Select.Option value="access">Access-first</Select.Option>
          <Select.Option value="ownership">Ownership-first</Select.Option>
        </Select>
      </Styled.ToggleItem>
    </Styled.Container>
  )
}
