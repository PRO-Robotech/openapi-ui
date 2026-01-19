import {
  BASE_BREADCRUMBS_NO_MARGIN_TOP,
  BASE_HIDE_NAVIGATION,
  BASE_HIDE_BREADCRUMBS,
  BASE_HIDE_FOOTER,
} from './customizationApiGroupAndVersion'

export const HEAD_FIRST_ROW = 52
export const HEAD_SECOND_ROW = BASE_HIDE_NAVIGATION === 'true' ? 0 : 56
export const NAV_HEIGHT = (() => {
  if (BASE_HIDE_BREADCRUMBS === 'true') return 0
  if (BASE_BREADCRUMBS_NO_MARGIN_TOP === 'true') return 35
  return 50
})()
export const FOOTER_HEIGHT = BASE_HIDE_FOOTER === 'true' ? 0 : 38
export const MAIN_CONTENT_HORIZONTAL_PADDING = 24
export const BACKLINK_HEIGHT = 26
/* computed only */
export const CONTENT_CARD_PADDING = 25
export const BLACKHOLE_FORM_VIEW_SWITCH_HEIGHT = 42
export const BLACKHOLE_FORM_SUBMIT_ROW_HEIGHT = 48
export const TABLE_ADD_BUTTON_HEIGHT = 35 + 8
