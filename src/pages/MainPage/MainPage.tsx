import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseTemplate } from 'templates'

export const MainPage: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('./clusters')
  }, [navigate])

  return <BaseTemplate />
}
