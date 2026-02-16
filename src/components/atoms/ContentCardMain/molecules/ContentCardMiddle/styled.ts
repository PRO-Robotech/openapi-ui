import styled from 'styled-components'

type TContentContainerMiddleProps = {
  $bgColor: string
  $borderColor: string
  $flexGrow?: number
  $displayFlex?: boolean
  $flexFlow?: string
  $maxHeight?: number
}

export const ContentContainerMiddle = styled.div<TContentContainerMiddleProps>`
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-top: 0;
  border-bottom: 0;
  background-color: ${({ $bgColor }) => $bgColor};
  width: 100%;
  height: ${({ $maxHeight }) => $maxHeight || '100%'};
  overflow-y: auto;
  padding: 0 24px;
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  display: ${({ $displayFlex }) => ($displayFlex ? 'flex' : 'block')};
  flex-flow: ${({ $flexFlow }) => $flexFlow};
`

export const Styled = {
  ContentContainerMiddle,
}
