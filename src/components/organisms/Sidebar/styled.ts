import styled from 'styled-components'
import { HEAD_FIRST_ROW, SIDEBAR_WIDTH } from 'constants/blocksSizes'

type TContainerProps = {
  $borderRadius: number
  $borderColor: string
}

// height: calc(100vh - ${HEAD_FIRST_ROW}px);
const Container = styled.div<TContainerProps>`
  border-top-right-radius: ${({ $borderRadius }) => $borderRadius}px;
  border: 1px ${({ $borderColor }) => $borderColor} solid;
  border-left: 0;
  box-sizing: border-box;
  width: ${SIDEBAR_WIDTH}px;
  position: fixed;
  top: ${HEAD_FIRST_ROW}px;
  height: 100%;
`

export const Styled = {
  Container,
}
