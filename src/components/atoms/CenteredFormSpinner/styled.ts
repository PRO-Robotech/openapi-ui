import styled from 'styled-components'
import { CONTENT_CARD_PADDING, FOOTER_HEIGHT, HEAD_FIRST_ROW, HEAD_SECOND_ROW, NAV_HEIGHT } from 'constants/blocksSizes'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(
    100vh - ${HEAD_FIRST_ROW + HEAD_SECOND_ROW + NAV_HEIGHT + FOOTER_HEIGHT + CONTENT_CARD_PADDING * 2}px
  );
`

export const Styled = {
  Container,
}
