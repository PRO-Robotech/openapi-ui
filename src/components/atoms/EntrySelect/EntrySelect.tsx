import React, { FC } from 'react'
import { Select } from 'antd'

type TEntrySelectProps = {
  placeholder: string
  options: {
    label: string
    value: string
  }[]
  value?: string
  onChange: (val?: string) => void
  disabled?: boolean
  fullwidth?: boolean
}

export const EntrySelect: FC<TEntrySelectProps> = ({ placeholder, value, disabled, options, onChange, fullwidth }) => {
  return (
    <Select
      placeholder={placeholder}
      value={value}
      options={options.map(({ value, label }) => ({ label, value }))}
      onChange={(selectedValue?: string) => onChange(selectedValue)}
      disabled={disabled}
      style={{ width: fullwidth ? '100%' : '200px' }}
      allowClear
      showSearch
    />
  )
}
