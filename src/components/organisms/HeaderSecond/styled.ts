import styled from 'styled-components'
import { HEAD_FIRST_ROW, MAIN_CONTENT_HORIZONTAL_PADDING } from 'constants/blocksSizes'

const NonTransparentSticky = styled.div`
  width: calc(100% - ${250 + MAIN_CONTENT_HORIZONTAL_PADDING * 2}px);
  position: fixed;
  top: ${HEAD_FIRST_ROW}px;
  margin-left: ${250 + MAIN_CONTENT_HORIZONTAL_PADDING}px;
  z-index: 5;
  background: #fff;
`

type TInternalBackgroundProps = {
  $bgColor: string
}

const InternalBackground = styled.div<TInternalBackgroundProps>`
  background-color: ${({ $bgColor }) => $bgColor};
`

type TContainerProps = {
  $bgColor: string
  $borderRadius: number
}

const Container = styled.div<TContainerProps>`
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  width: 100%;
`

type TPaddingContainerProps = {
  $height: number
}

const PaddingContainer = styled.div<TPaddingContainerProps>`
  padding: 12px ${MAIN_CONTENT_HORIZONTAL_PADDING}px;
  height: ${({ $height }) => $height}px;
`

export const Styled = {
  NonTransparentSticky,
  InternalBackground,
  Container,
  PaddingContainer,
}
