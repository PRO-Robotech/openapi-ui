import styled from 'styled-components'
import { FOOTER_HEIGHT, TABLE_ADD_BUTTON_HEIGHT } from 'constants/blocksSizes'

type TContainerProps = {
  $isDark: boolean
}

const CONTENT_CARD_BOTTOM_HEIGHT = 24

const Container = styled.div<TContainerProps>`
  min-height: 100vh;
  --enriched-table-scrollbar-bottom-offset: ${FOOTER_HEIGHT + CONTENT_CARD_BOTTOM_HEIGHT + TABLE_ADD_BUTTON_HEIGHT}px;
`

type TLayoutProps = {
  $bgColor: string
}

const Layout = styled.div<TLayoutProps>`
  background: ${({ $bgColor }) => $bgColor};
  min-height: 100vh;
  width: 100%;
`

const ContentContainer = styled.div`
  min-height: 100vh;
  margin: 0;
`

export const Styled = {
  Container,
  Layout,
  ContentContainer,
}
