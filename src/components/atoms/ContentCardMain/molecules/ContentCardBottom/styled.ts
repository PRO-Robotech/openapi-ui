import styled from 'styled-components'

type TNonTransparentStickyProps = {
  $fixedOffest?: number
}

const NonTransparentSticky = styled.div<TNonTransparentStickyProps>`
  background: white;
  position: ${({ $fixedOffest }) => ($fixedOffest ? 'sticky' : 'auto')};
  bottom: ${({ $fixedOffest }) => $fixedOffest || 'initial'};
  z-index: 5;
`

type TBackgroundContainerProps = {
  $bgColor: string
}

const BackgroundContainer = styled.div<TBackgroundContainerProps>`
  background: ${({ $bgColor }) => $bgColor};
`

type TContentContainerBottomProps = {
  $bgColor: string
  $borderColor: string
}

export const ContentContainerBottom = styled.div<TContentContainerBottomProps>`
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-top: 0;
  background-color: ${({ $bgColor }) => $bgColor};
  width: 100%;
  height: 24px;
`

export const Styled = {
  NonTransparentSticky,
  BackgroundContainer,
  ContentContainerBottom,
}
