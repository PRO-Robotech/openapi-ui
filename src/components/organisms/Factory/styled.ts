import styled from 'styled-components'
import { FOOTER_HEIGHT, HEAD_FIRST_ROW, HEAD_SECOND_ROW, NAV_HEIGHT } from 'constants/blocksSizes'

type TLoadingNotFoundContainerProps = {
  $insideContentCard?: boolean
}

const CONTENT_CARD_VERTICAL_CHROME = 48

const getAvailableHeight = (insideContentCard?: boolean) =>
  `calc(100vh - ${
    HEAD_FIRST_ROW +
    HEAD_SECOND_ROW +
    NAV_HEIGHT +
    FOOTER_HEIGHT +
    (insideContentCard ? CONTENT_CARD_VERTICAL_CHROME : 0)
  }px)`

const LoadingNotFoundContainer = styled.div<TLoadingNotFoundContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ $insideContentCard }) => getAvailableHeight($insideContentCard)};
  overflow: hidden;
`

export const Styled = {
  LoadingNotFoundContainer,
}
