import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Tooltip, Dropdown, theme, Typography } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { useAuth } from 'hooks/useAuth'
import { logout } from 'api/auth'
import { BASE_HIDE_INSIDE } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

export const User: FC = () => {
  const { fullName } = useAuth()
  const { token } = theme.useToken()
  const navigate = useNavigate()
  const baseprefix = useSelector((state: RootState) => state.baseprefix.baseprefix)

  return (
    <Dropdown
      placement="top"
      menu={{
        items: [
          // {
          //   key: '1',
          //   label: <ThemeSelector />,
          // },
          ...(BASE_HIDE_INSIDE === 'true'
            ? []
            : [
                {
                  key: '2',
                  label: <div onClick={() => navigate(`${baseprefix}/inside/clusters`)}>Inside</div>,
                },
              ]),
          {
            key: '3',
            label: (
              <Typography.Text type="danger" onClick={() => logout()}>
                <LogoutOutlined /> Logout
              </Typography.Text>
            ),
          },
        ],
      }}
      trigger={['click']}
    >
      <Button type="text">
        <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.1429 0.0712891H0.857143C0.383036 0.0712891 0 0.454325 0 0.928432V18.0713C0 18.5454 0.383036 18.9284 0.857143 18.9284H23.1429C23.617 18.9284 24 18.5454 24 18.0713V0.928432C24 0.454325 23.617 0.0712891 23.1429 0.0712891ZM22.0714 16.9999H1.92857V1.99986H22.0714V16.9999ZM14.633 8.53558H17.9384C17.9732 8.53558 18 8.43915 18 8.32129V7.03558C18 6.91772 17.9732 6.82129 17.9384 6.82129H14.633C14.5982 6.82129 14.5714 6.91772 14.5714 7.03558V8.32129C14.5714 8.43915 14.5982 8.53558 14.633 8.53558ZM14.7616 12.3927H19.7357C19.8402 12.3927 19.9259 12.2963 19.9259 12.1784V10.8927C19.9259 10.7749 19.8402 10.6784 19.7357 10.6784H14.7616C14.6571 10.6784 14.5714 10.7749 14.5714 10.8927V12.1784C14.5714 12.2963 14.6571 12.3927 14.7616 12.3927ZM4.28571 13.8124H5.46161C5.57411 13.8124 5.66518 13.724 5.67321 13.6115C5.775 12.2588 6.90536 11.1874 8.27679 11.1874C9.64821 11.1874 10.7786 12.2588 10.8804 13.6115C10.8884 13.724 10.9795 13.8124 11.092 13.8124H12.2679C12.2969 13.8124 12.3257 13.8065 12.3524 13.7951C12.3791 13.7837 12.4033 13.7669 12.4233 13.7459C12.4433 13.7248 12.4589 13.6999 12.469 13.6727C12.4791 13.6454 12.4836 13.6164 12.4821 13.5874C12.4071 12.1597 11.625 10.9168 10.4839 10.2097C10.9871 9.65654 11.2652 8.93514 11.2634 8.18736C11.2634 6.52933 9.92679 5.18736 8.27946 5.18736C6.63214 5.18736 5.29554 6.52933 5.29554 8.18736C5.29554 8.96683 5.59018 9.67397 6.075 10.2097C5.49409 10.5697 5.00894 11.0649 4.66098 11.6531C4.31302 12.2412 4.11258 12.9049 4.07679 13.5874C4.06607 13.7106 4.1625 13.8124 4.28571 13.8124ZM8.27679 6.7945C9.04018 6.7945 9.66161 7.41861 9.66161 8.18736C9.66161 8.95611 9.04018 9.58022 8.27679 9.58022C7.51339 9.58022 6.89196 8.95611 6.89196 8.18736C6.89196 7.41861 7.51339 6.7945 8.27679 6.7945Z"
            fill={token.colorText}
          />
        </svg>
        {fullName && fullName.length > 25 ? (
          <Tooltip title={fullName}>
            <Styled.Name>{fullName.slice(25)}</Styled.Name>
          </Tooltip>
        ) : (
          <Styled.Name>{fullName || 'John Doe'}</Styled.Name>
        )}
      </Button>
    </Dropdown>
  )
}
