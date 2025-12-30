import React, { FC } from 'react'
import { Flex, theme as antdtheme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { LOGO_TEXT, CUSTOM_LOGO_SVG, CUSTOM_TENANT_TEXT } from 'constants/customizationApiGroupAndVersion'
import { renderLogo } from './utils'
import { Styled } from './styled'

export const Logo: FC = () => {
  const navigate = useNavigate()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)
  const clusterList = useSelector((state: RootState) => state.clusterList.clusterList)
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const { token } = antdtheme.useToken()

  const tenant = clusterList?.find(item => item.name === cluster)?.tenant

  return (
    <Styled.CursorPointer $svgHoverFill={token.colorInfoActive} onClick={() => navigate(`${baseprefix}`)}>
      <Flex gap={8} align="center">
        {CUSTOM_LOGO_SVG && typeof CUSTOM_LOGO_SVG === 'string' && CUSTOM_LOGO_SVG.length > 0 ? (
          renderLogo(CUSTOM_LOGO_SVG, token.colorText)
        ) : (
          <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.7467 19.3641C18.7467 20.808 17.6069 21.9784 16.2007 21.9784H8.82597C7.71912 21.9784 6.8217 21.057 6.8217 19.9204C6.8217 18.7837 7.71912 17.8623 8.82597 17.8623C8.83507 17.8623 8.84412 17.8626 8.85317 17.8627C9.01052 16.8873 9.83572 16.1435 10.8302 16.1435C10.9381 16.1435 11.0441 16.1524 11.1474 16.1692C11.6261 15.1372 12.6512 14.4239 13.8386 14.4239C15.2587 14.4239 16.4467 15.4443 16.7453 16.81C17.8898 17.0662 18.7466 18.1123 18.7467 19.3641ZM14.768 13.9194C15.8071 14.1367 16.8944 13.078 17.1963 11.5548C17.4984 10.0315 16.9008 8.62062 15.8616 8.40337C14.8225 8.18613 13.7353 9.24488 13.4333 10.7681C13.1313 12.2913 13.7288 13.7022 14.768 13.9194ZM11.271 13.9194C12.3102 13.7022 12.9078 12.2913 12.6057 10.768C12.3037 9.24479 11.2165 8.18608 10.1774 8.40332C9.13825 8.62057 8.54068 10.0315 8.8427 11.5547C9.14468 13.0779 10.2319 14.1366 11.271 13.9194ZM8.45417 16.4552C9.25412 16.0652 9.46307 14.7984 8.92087 13.6258C8.37866 12.4531 7.29057 11.8187 6.49057 12.2087C5.69062 12.5988 5.48167 13.8656 6.02387 15.0382C6.56612 16.2108 7.65417 16.8453 8.45417 16.4552ZM19.296 12.1539C18.456 11.8658 17.4504 12.6304 17.0499 13.8617C16.6494 15.0929 17.0057 16.3246 17.8457 16.6128C18.6857 16.9008 19.6913 16.1362 20.0918 14.905C20.4922 13.6737 20.136 12.442 19.296 12.1539ZM26 21.6578C26.0001 22.6152 25.5027 23.4999 24.6954 23.9789L14.3072 30.1406C13.4999 30.6197 12.5048 30.6198 11.697 30.141L1.30716 23.9827C0.499661 23.5039 0.00204077 22.6193 0.00181896 21.6619L7.41513e-08 9.34205C-0.000221741 8.38456 0.497221 7.49995 1.30454 7.02082L11.6925 0.859252C12.5002 0.380394 13.4952 0.380257 14.3027 0.858797L24.6928 7.01709C25.5003 7.49585 25.9979 8.38041 25.9982 9.33786L26 21.6578ZM24.6065 20.9976L24.6048 9.99838C24.6047 9.14357 24.1603 8.35408 23.4394 7.92647L14.1631 2.42843C13.4422 2.0011 12.5537 2.00123 11.8328 2.42884L2.55819 7.92989C1.8376 8.35768 1.3934 9.1473 1.39357 10.0021L1.39522 21.0014C1.39531 21.8562 1.83978 22.6457 2.56054 23.0733L11.8367 28.5714C12.5578 28.9988 13.4464 28.9987 14.1671 28.571L23.4417 23.0698C24.1625 22.6421 24.6066 21.8524 24.6065 20.9976Z"
              fill={token.colorText}
            />
          </svg>
        )}

        <Styled.LogoText dangerouslySetInnerHTML={{ __html: LOGO_TEXT }} />
        <Styled.TenantText $color={token.colorTextDescription}>
          {CUSTOM_TENANT_TEXT && typeof CUSTOM_TENANT_TEXT === 'string' && CUSTOM_TENANT_TEXT.length > 0
            ? CUSTOM_TENANT_TEXT
            : tenant}
        </Styled.TenantText>
      </Flex>
    </Styled.CursorPointer>
  )
}
