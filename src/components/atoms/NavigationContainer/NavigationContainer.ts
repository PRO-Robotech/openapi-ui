import styled from 'styled-components'
import { NAV_HEIGHT } from 'constants/blocksSizes'
import { BASE_BREADCRUMBS_NO_MARGIN_TOP } from 'constants/customizationApiGroupAndVersion'

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 18px;
  height: ${BASE_BREADCRUMBS_NO_MARGIN_TOP ? 'auto' : `${NAV_HEIGHT}px`};
  min-height: ${BASE_BREADCRUMBS_NO_MARGIN_TOP ? 'auto' : `${NAV_HEIGHT}px`};
  margin-bottom: ${BASE_BREADCRUMBS_NO_MARGIN_TOP ? '10px' : 'auto'};
`
