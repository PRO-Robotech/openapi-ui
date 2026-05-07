import styled from 'styled-components'
import {
  CONTENT_CARD_PADDING,
  FOOTER_HEIGHT,
  HEAD_FIRST_ROW,
  HEAD_SECOND_ROW,
  NAV_HEIGHT,
  TABLE_ADD_BUTTON_HEIGHT,
} from 'constants/blocksSizes'

type TContainerProps = {
  $searchMount?: boolean
}

const TABLE_TOP_SELECTOR_HEIGHT = 48
const SEARCH_MOUNT_SPINNER_HEIGHT = 160

export const getTableSpinnerHeight = (searchMount?: boolean) => {
  if (searchMount) {
    return `${SEARCH_MOUNT_SPINNER_HEIGHT}px`
  }

  return `calc(100vh - ${
    HEAD_FIRST_ROW +
    HEAD_SECOND_ROW +
    NAV_HEIGHT +
    FOOTER_HEIGHT +
    CONTENT_CARD_PADDING * 2 +
    TABLE_ADD_BUTTON_HEIGHT +
    TABLE_TOP_SELECTOR_HEIGHT
  }px)`
}

const Container = styled.div<TContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ $searchMount }) => getTableSpinnerHeight($searchMount)};
`

export const Styled = {
  Container,
}
