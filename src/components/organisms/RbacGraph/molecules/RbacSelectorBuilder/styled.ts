import styled from 'styled-components'

const Container = styled.div`
  padding: 12px 16px;
`

const SelectorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`

const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`

const SelectorColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;
  margin-bottom: 16px;
`

const EmptyState = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colorTextSecondary || 'rgba(0, 0, 0, 0.45)'};
`

export const Styled = {
  Container,
  SelectorsGrid,
  GroupsGrid,
  SelectorColumn,
  GroupColumn,
  GroupTitle,
  LoadingContainer,
  EmptyState,
}
