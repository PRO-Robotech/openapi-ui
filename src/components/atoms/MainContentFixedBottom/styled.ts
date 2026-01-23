import { FOOTER_HEIGHT, SIDEBAR_WIDTH, MAIN_CONTENT_HORIZONTAL_PADDING } from 'constants/blocksSizes'
import styled from 'styled-components'

type TContainerProps = {
  $bgColor: string
}

const Container = styled.div<TContainerProps>`
  position: fixed;
  bottom: ${FOOTER_HEIGHT + 24}px;
  z-index: 1055;
  background: ${({ $bgColor }) => $bgColor};
  width: calc(100% - ${SIDEBAR_WIDTH + MAIN_CONTENT_HORIZONTAL_PADDING * 2 + 48}px);
`

export const Styled = {
  Container,
}
