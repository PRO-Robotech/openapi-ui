import React, { FC, ReactNode } from 'react'
import { Col } from 'antd'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { DefaultLayout, HeaderSecond, Footer, Sidebar, RowFlexGrow, FlexCol } from 'components'

type TBaseTemplateProps = {
  children?: ReactNode | undefined
  inside?: boolean
  isSearch?: boolean
  sidebar?: ReactNode
}

export const BaseTemplate: FC<TBaseTemplateProps> = ({ children, inside, isSearch, sidebar }) => {
  const isFederation = useSelector((state: RootState) => state.federation.isFederation)

  return (
    <RowFlexGrow wrap={false}>
      <Col span="250px">
        <Sidebar sidebar={sidebar} />
      </Col>
      <FlexCol flex="auto">
        <DefaultLayout.ContentPadding $isFederation={isFederation}>
          <HeaderSecond inside={inside} isSearch={isSearch} />
          {children}
        </DefaultLayout.ContentPadding>
        <Footer />
      </FlexCol>
    </RowFlexGrow>
  )
}
