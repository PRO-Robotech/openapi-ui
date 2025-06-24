import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BACKLINK_HEIGHT, BACKLINK_MARGIN_TOP } from 'constants/blocksSizes'

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
  margin-top: ${BACKLINK_MARGIN_TOP}px;
  height: ${BACKLINK_HEIGHT}px;
`

const CustomLink = styled(Link)`
  text-decoration: none;
  margin-right: 8px;
  vertical-align: middle;

  span {
    vertical-align: middle;
  }
`

export const Styled = {
  Container,
  CustomLink,
}
