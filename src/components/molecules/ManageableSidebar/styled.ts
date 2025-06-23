import styled from 'styled-components'

type TContainerProps = {
  $isDark?: boolean
  $colorInfoBg?: string
  $colorFillQuaternary?: string
  $colorPrimaryBorder?: string
  $colorBorder?: string
}

const Container = styled.div<TContainerProps>`
  width: 250px;
  padding-right: 20px;

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

  && .ant-menu li:first-child div:first-child {
    border-top-right-radius: 8px;
  }

  /* selected header bgcolor */

  && .ant-menu-submenu-selected div {
    background-color: ${({ $colorInfoBg }) => $colorInfoBg || 'initial'};
  }

  && .ant-menu-submenu-selected div:hover {
    background-color: ${({ $colorInfoBg }) => $colorInfoBg || 'initial'};
  }

  /* selected shift to right */

  && .ant-menu-sub .ant-menu-item.ant-menu-item-selected {
    width: 205px;
    margin-left: 25px !important;
    padding-left: 20px !important;
  }

  /* line before */

  && .ant-menu-sub .ant-menu-item-selected:after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 3px;
    height: 100%;
    background-color: ${({ $colorPrimaryBorder }) => $colorPrimaryBorder || 'initial'};
    border-radius: 4px;
    content: ' ';
  }
`

export const Styled = {
  Container,
}
