import styled from 'styled-components'
import { BASE_USE_NEW_NAVIGATION } from 'constants/customizationApiGroupAndVersion'
import { SIDEBAR_WIDTH } from 'constants/blocksSizes'

type TContainerProps = {
  $isDark?: boolean
  $colorInfoBg?: string
  $colorBgContainer?: string
  $colorFillQuaternary?: string
  $colorPrimaryHover?: string
  $colorBorder?: string
  $maxHeight: number
}

const Container = styled.div<TContainerProps>`
  width: ${SIDEBAR_WIDTH}px;
  padding-right: 1px;
  overflow-y: auto;
  scrollbar-width: thin;
  direction: rtl;
  max-height: ${({ $maxHeight }) => $maxHeight || 'initial'};
  user-select: none;
  border-top-right-radius: ${BASE_USE_NEW_NAVIGATION === 'true' ? '0' : `7px`};

  & ul {
    direction: ltr;
  }

  &:empty {
    display: none;
  }

  /* stylelint-disable declaration-no-important */
  /* stylelint-disable no-descending-specificity */

  /* full width */

  && .ant-menu li div {
    width: 100%;
    margin: 0 !important;
  }

  && .ant-menu li {
    width: 100%;
    margin: 0 !important;
  }

  /* each border bottom */

  .ant-menu-submenu {
    border-bottom: 1px ${({ $colorBorder }) => $colorBorder || 'initial'} solid;
  }

  /* corner radius */

  /* && .ant-menu li:first-child div:first-child {
    border-top-right-radius: 4px;
  } */

  /* selected header bgcolor */

  && .ant-menu-submenu-selected div {
    background-color: ${({ $colorBgContainer }) => $colorBgContainer || 'initial'};
  }

  && .ant-menu-submenu-selected div:hover {
    background-color: ${({ $colorBgContainer }) => $colorBgContainer || 'initial'};
  }

  /* selected shift to right */

  && .ant-menu-sub .ant-menu-item {
    transition: padding 0s;
  }

  && .ant-menu-sub .ant-menu-item.ant-menu-item-selected {
    width: 214px;
    margin-left: 25px !important;
    padding-left: 23px !important;
    transition: padding 0s;
  }

  /* line before */

  && .ant-menu-sub .ant-menu-item-selected:after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 3px;
    height: 100%;
    background-color: ${({ $colorPrimaryHover }) => $colorPrimaryHover || 'initial'};
    border-radius: 4px;
    content: ' ';
  }
`

export const Styled = {
  Container,
}
