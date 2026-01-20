import styled from 'styled-components'

type TNonTransparentStickyProps = {
  $fixedOffest?: number
}

const NonTransparentSticky = styled.div<TNonTransparentStickyProps>`
  background: #fff;
  position: ${({ $fixedOffest }) => ($fixedOffest ? 'sticky' : 'auto')};
  top: ${({ $fixedOffest }) => $fixedOffest || 'initial'};
  z-index: 5;
`

type TBackgroundContainerProps = {
  $bgColor: string
}

const BackgroundContainer = styled.div<TBackgroundContainerProps>`
  background: ${({ $bgColor }) => $bgColor};
`

type TContentContainerTopProps = {
  $bgColor: string
  $borderColor: string
}

export const ContentContainerTop = styled.div<TContentContainerTopProps>`
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom: 0;
  background-color: ${({ $bgColor }) => $bgColor};
  width: 100%;
  height: 24px;
`

export const Styled = {
  NonTransparentSticky,
  BackgroundContainer,
  ContentContainerTop,
}
