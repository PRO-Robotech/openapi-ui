import { HEAD_FIRST_ROW, MAIN_CONTENT_HORIZONTAL_PADDING, NAV_HEIGHT, SIDEBAR_WIDTH } from 'constants/blocksSizes'
import styled from 'styled-components'

type TContainerProps = {
  $bgColor: string
}

const Container = styled.div<TContainerProps>`
  position: fixed;
  top: ${HEAD_FIRST_ROW + NAV_HEIGHT + 24}px;
  z-index: 1055;
  background: ${({ $bgColor }) => $bgColor};
  width: calc(100% - ${SIDEBAR_WIDTH + MAIN_CONTENT_HORIZONTAL_PADDING * 2 + 48}px);
`

const Inner = styled.div`
  z-index: 1056;
`

export const Styled = {
  Container,
  Inner,
}
