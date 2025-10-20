import styled from 'styled-components'

type TContainerProps = {
  $height?: number
}

const Container = styled.div<TContainerProps>`
  height: ${({ $height }) => ($height ? `${$height}px` : '75vh')};
`

const OverflowContainer = styled.div`
  overflow-x: auto;
  scrollbar-width: thin;
`

type TEmptyContainerProps = {
  $height?: number
}

const EmptyContainer = styled.div<TEmptyContainerProps>`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: ${({ $height }) => ($height ? `${$height}px` : '25vh')};
`

const EmptyText = styled.div`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
`

export const Styled = {
  Container,
  OverflowContainer,
  EmptyContainer,
  EmptyText,
}
