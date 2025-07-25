import styled from 'styled-components'
import { MAIN_CONTENT_HORIZONTAL_PADDING } from 'constants/blocksSizes'

type TPaddingContainerProps = {
  $height: number
}

const PaddingContainer = styled.div<TPaddingContainerProps>`
  padding: 12px ${MAIN_CONTENT_HORIZONTAL_PADDING}px;
  height: ${({ $height }) => $height}px;
`

export const Styled = {
  PaddingContainer,
}
