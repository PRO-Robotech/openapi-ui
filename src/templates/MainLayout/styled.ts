import styled from 'styled-components'
import {
  FOOTER_HEIGHT,
  MAIN_CONTENT_HORIZONTAL_PADDING,
  SIDEBAR_WIDTH,
  TABLE_ADD_BUTTON_HEIGHT,
} from 'constants/blocksSizes'

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

const ClusterListAlertContainer = styled.div`
  margin-left: ${SIDEBAR_WIDTH + MAIN_CONTENT_HORIZONTAL_PADDING}px;
  width: calc(100% - ${SIDEBAR_WIDTH + MAIN_CONTENT_HORIZONTAL_PADDING * 2}px);
`

export const Styled = {
  Container,
  Layout,
  ContentContainer,
  ClusterListAlertContainer,
}
