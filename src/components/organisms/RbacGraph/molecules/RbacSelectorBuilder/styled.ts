import styled from 'styled-components'

const Container = styled.div`
  padding: 12px 16px;
`

const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 12px;
`

const GroupColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const GroupTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const CheckboxList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Styled = { Container, GroupsGrid, GroupColumn, GroupTitle, CheckboxList }
