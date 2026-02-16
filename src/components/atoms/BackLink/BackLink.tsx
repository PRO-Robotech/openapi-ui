import React, { FC } from 'react'
import { To } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { BASE_REMOVE_BACKLINK, BASE_REMOVE_BACKLINK_TEXT } from 'constants/customizationApiGroupAndVersion'
import { TitleWithNoMargin } from '../TitleWithNoMargin'
import { Styled } from './styled'

type TBackLinkProps = {
  title?: string
  className?: string
  to?: To
}

export const BackLink: FC<TBackLinkProps> = ({ to, title }) => {
  // already prepared in constants
  if (BASE_REMOVE_BACKLINK && BASE_REMOVE_BACKLINK_TEXT) {
    return null
  }

  return (
    <Styled.Container>
      {to && !BASE_REMOVE_BACKLINK && (
        <Styled.CustomLink to={to}>
          <TitleWithNoMargin level={5}>
            <ArrowLeftOutlined />
          </TitleWithNoMargin>
        </Styled.CustomLink>
      )}
      {!BASE_REMOVE_BACKLINK_TEXT && <TitleWithNoMargin level={5}>{title}</TitleWithNoMargin>}
    </Styled.Container>
  )
}
