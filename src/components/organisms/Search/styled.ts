import styled from 'styled-components'

// type TContainerProps = {
//   $height?: number
// }

// const Container = styled.div<TContainerProps>`
//   height: ${({ $height }) => ($height ? `${$height}px` : '75vh')};
// `

// const OverflowContainer = styled.div`
//   overflow-x: auto;
//   scrollbar-width: thin;
// `

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

const SearchControls = styled.div`
  .ant-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
    min-height: 22px;
    white-space: nowrap;
    line-height: 20px;
  }

  .ant-tag > span:first-child {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  .ant-tag .ant-tag-close-icon {
    display: inline-flex;
    align-items: center;
    margin-inline-start: 2px;
  }
`

export const Styled = {
  // Container,
  // OverflowContainer,
  EmptyContainer,
  EmptyText,
  SearchControls,
}
