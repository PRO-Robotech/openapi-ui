import styled from 'styled-components'
import { Tag } from 'antd'

type TContainerProps = {
  $colorBorder: string
  $colorText: string
}

const Container = styled.div<TContainerProps>`
  border-radius: 0 6px 6px 0;
  border: 1px solid ${({ $colorBorder }) => $colorBorder};
  padding: 12px;
  border-left-color: ${({ $colorText }) => $colorText};
  border-left-width: 3px;
`

const CustomTag = styled(Tag)`
  font-size: 14px;
  height: 22px;
  /* stylelint-disable declaration-no-important */
  margin-inline-end: 0 !important;
`

type TAbbrProps = {
  $bgColor: string
}

const Abbr = styled.span<TAbbrProps>`
  background-color: ${({ $bgColor }) => $bgColor};
  border: 1px solid ${({ $bgColor }) => $bgColor};
  border-radius: 4px;
  padding: 0 7px;
  height: 22px;
  font-family: 'SF Pro', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0;
  box-sizing: border-box;
  flex-shrink: 0;
`

type TApiGroupVersionProps = {
  $colorTextDescription: string
}

const ApiGroupVersion = styled.div<TApiGroupVersionProps>`
  display: flex;
  padding-top: 4px;
  color: ${({ $colorTextDescription }) => $colorTextDescription};
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
`

export const Styled = {
  Container,
  CustomTag,
  Abbr,
  ApiGroupVersion,
}
