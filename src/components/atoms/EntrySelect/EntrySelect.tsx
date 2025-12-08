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
  forcedWidth?: string
  fullwidth?: boolean
}

export const EntrySelect: FC<TEntrySelectProps> = ({
  placeholder,
  value,
  disabled,
  options,
  onChange,
  fullwidth,
  forcedWidth,
}) => {
  const width = forcedWidth && forcedWidth.length > 0 ? forcedWidth : '200px'

  return (
    <Select
      placeholder={placeholder}
      value={value}
      options={options.map(({ value, label }) => ({ label, value }))}
      onChange={(selectedValue?: string) => onChange(selectedValue)}
      disabled={disabled}
      style={{ width: fullwidth ? '100%' : width }}
      allowClear
      showSearch
    />
  )
}
