import styled from 'styled-components'
import {
  FOOTER_HEIGHT,
  HEAD_FIRST_ROW,
  HEAD_SECOND_ROW,
  MAIN_CONTENT_HORIZONTAL_PADDING,
  SIDEBAR_WIDTH,
} from 'constants/blocksSizes'

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH}px 1fr;
  width: 100%;
`

const Container = styled.div`
  margin-left: ${SIDEBAR_WIDTH}px;
  min-height: calc(100vh - ${HEAD_FIRST_ROW + HEAD_SECOND_ROW + FOOTER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  margin-top: ${HEAD_SECOND_ROW}px;
  margin-bottom: ${FOOTER_HEIGHT}px;
`

const MainContent = styled.div`
  padding: ${`0 ${MAIN_CONTENT_HORIZONTAL_PADDING}px`};
  display: flex;
  flex-flow: column;
  flex: 1;
`

export const Styled = {
  Grid,
  Container,
  MainContent,
}
