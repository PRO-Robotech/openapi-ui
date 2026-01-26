import styled from 'styled-components'
import { MAIN_CONTENT_HORIZONTAL_PADDING } from 'constants/blocksSizes'

const NonTransparentSticky = styled.div`
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1055;
`

type TContainerProps = {
  $height: number
  $bgColor: string
}

const Container = styled.div<TContainerProps>`
  padding: 12px ${MAIN_CONTENT_HORIZONTAL_PADDING}px;
  height: ${({ $height }) => $height}px;
  background: ${({ $bgColor }) => $bgColor};
`

export const Styled = {
  NonTransparentSticky,
  Container,
}
