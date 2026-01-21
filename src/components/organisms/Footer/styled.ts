import styled from 'styled-components'
import { FOOTER_HEIGHT, SIDEBAR_WIDTH } from 'constants/blocksSizes'

const NonTransparentSticky = styled.div`
  margin-left: ${SIDEBAR_WIDTH}px;
  position: fixed;
  z-index: 5;
  background: #fff;
  width: 100%;
  bottom: 0;
`

type TContainerProps = {
  $colorBgLayout: string
}

const Container = styled.div<TContainerProps>`
  height: ${FOOTER_HEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $colorBgLayout }) => $colorBgLayout};
  width: 100%;
`

export const Styled = {
  NonTransparentSticky,
  Container,
}
