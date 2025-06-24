import styled from 'styled-components'

type TPaddingContainerProps = {
  $height: number
}

const PaddingContainer = styled.div<TPaddingContainerProps>`
  padding: 10px 48px;
  height: ${({ $height }) => $height}px;
`

type TBackgroundContainerProps = {
  $bgColor: string
  $borderColor: string
  $borderSize: number
}

const BackgroundContainer = styled.div<TBackgroundContainerProps>`
  border-bottom: ${({ $borderSize }) => $borderSize}px solid ${({ $borderColor }) => $borderColor};
  background-color: ${({ $bgColor }) => $bgColor};
  width: 100%;
`

export const Styled = {
  PaddingContainer,
  BackgroundContainer,
}
