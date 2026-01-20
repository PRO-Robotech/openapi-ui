import styled from 'styled-components'
import { MAIN_CONTENT_HORIZONTAL_PADDING } from 'constants/blocksSizes'

type TContainerProps = {
  $height: number
  $bgColor: string
}

const Container = styled.div<TContainerProps>`
  padding: 12px ${MAIN_CONTENT_HORIZONTAL_PADDING}px;
  height: ${({ $height }) => $height}px;
  position: sticky;
  top: 0;
  z-index: 3;
  background: ${({ $bgColor }) => $bgColor};
`

export const Styled = {
  Container,
}
