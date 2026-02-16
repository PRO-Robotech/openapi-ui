import React, { FC, ReactNode } from 'react'
import { HeaderSecond, Footer, Sidebar } from 'components'
import { BASE_HIDE_NAVIGATION, BASE_HIDE_FOOTER } from 'constants/customizationApiGroupAndVersion'
import { Styled } from './styled'

type TBaseTemplateProps = {
  children?: ReactNode | undefined
  inside?: boolean
  isSearch?: boolean
  sidebar?: ReactNode
}

export const BaseTemplate: FC<TBaseTemplateProps> = ({ children, inside, isSearch, sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      {BASE_HIDE_NAVIGATION !== 'true' && <HeaderSecond inside={inside} isSearch={isSearch} />}
      <Styled.Container>
        <Styled.MainContent>{children}</Styled.MainContent>
      </Styled.Container>
      {BASE_HIDE_FOOTER !== 'true' && <Footer />}
    </>
  )
}
