import styled from 'styled-components'
import { Tag } from 'antd'
import { resourceBadgeAbbrCss } from '@prorobotech/openapi-k8s-toolkit'

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
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  min-height: 22px;
  width: fit-content;
  white-space: nowrap;
  line-height: 20px;
  /* stylelint-disable declaration-no-important */
  margin-inline-end: 0 !important;

  .ant-tag-close-icon {
    display: inline-flex;
    align-items: center;
    margin-inline-start: 2px;
  }
`

type TAbbrProps = {
  $bgColor: string
}

const Abbr = styled.span<TAbbrProps>`
  background-color: ${({ $bgColor }) => $bgColor};
  ${resourceBadgeAbbrCss}
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
