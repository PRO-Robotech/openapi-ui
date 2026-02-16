import styled from 'styled-components'
import { HEAD_FIRST_ROW, NAV_HEIGHT } from 'constants/blocksSizes'
import { BASE_BREADCRUMBS_NO_MARGIN_TOP } from 'constants/customizationApiGroupAndVersion'

type TNavigationContainerProps = {
  $bgColor: string
}

export const NavigationContainer = styled.div<TNavigationContainerProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 18px;
  height: ${BASE_BREADCRUMBS_NO_MARGIN_TOP === 'true' ? '35px' : `${NAV_HEIGHT}px`};
  min-height: ${BASE_BREADCRUMBS_NO_MARGIN_TOP === 'true' ? '35px' : `${NAV_HEIGHT}px`};
  padding-bottom: ${BASE_BREADCRUMBS_NO_MARGIN_TOP === 'true' ? '10px' : 'auto'};
  position: sticky;
  top: ${HEAD_FIRST_ROW}px;
  background: ${({ $bgColor }) => $bgColor};
  width: 100%;
  z-index: 1055;
`
