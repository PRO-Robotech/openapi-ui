import styled from 'styled-components'
import { HEAD_FIRST_ROW, MAIN_CONTENT_HORIZONTAL_PADDING } from 'constants/blocksSizes'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  width: 100%;
`

const Container = styled.div`
  margin-left: 250px;
  min-height: calc(100vh - ${HEAD_FIRST_ROW}px);
  display: flex;
  flex-direction: column;
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
