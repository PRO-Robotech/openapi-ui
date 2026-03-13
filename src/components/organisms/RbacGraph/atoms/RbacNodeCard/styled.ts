import styled from 'styled-components'

const Card = styled.div<{ $borderColor: string; $dimmed: boolean; $isRoot: boolean }>`
  min-width: 180px;
  max-width: 260px;
  border: 2px solid ${({ $borderColor }) => $borderColor};
  border-radius: 8px;
  padding: 8px 12px;
  opacity: ${({ $dimmed }) => ($dimmed ? 0.25 : 1)};
  box-shadow: ${({ $isRoot }) => ($isRoot ? '0 0 0 3px rgba(24, 144, 255, 0.4)' : 'none')};
  transition:
    opacity 0.2s,
    box-shadow 0.2s;
  cursor: pointer;
`

const TypeBadge = styled.span<{ $color: string }>`
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ $color }) => $color};
  margin-bottom: 2px;
`

const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Subtitle = styled.div`
  font-size: 11px;
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Styled = { Card, TypeBadge, Title, Subtitle }
