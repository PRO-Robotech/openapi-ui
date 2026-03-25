import React, { FC } from 'react'
import { getUppercase, hslFromString } from '@prorobotech/openapi-k8s-toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { Styled } from '../styled'

type TRbacResourceLabelProps = {
  badgeId: string
  value: string
  badgeValue?: string
  showBadge?: boolean
  textClassName?: string
}

export const RbacResourceLabel: FC<TRbacResourceLabelProps> = ({
  badgeId,
  value,
  badgeValue,
  showBadge = true,
  textClassName,
}) => {
  const theme = useSelector((state: RootState) => state.openapiTheme.theme)
  const effectiveBadgeValue = badgeValue ?? value
  const abbr = getUppercase(effectiveBadgeValue)
  const bgColor = effectiveBadgeValue.length > 0 ? hslFromString(effectiveBadgeValue, theme) : ''

  return (
    <Styled.ResourceLabel data-badge-id={badgeId}>
      {showBadge && bgColor.length > 0 && (
        <Styled.ResourceBadgeAbbr $bgColor={bgColor}>{abbr}</Styled.ResourceBadgeAbbr>
      )}
      <span className={textClassName}>{value}</span>
    </Styled.ResourceLabel>
  )
}
