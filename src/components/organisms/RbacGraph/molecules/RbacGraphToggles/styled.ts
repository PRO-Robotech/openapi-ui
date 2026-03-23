import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
`

const ToggleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
`

const SelectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const SelectLabel = styled.span`
  font-size: 13px;
  white-space: nowrap;
`

export const Styled = { Container, ToggleItem, SelectItem, SelectLabel }
