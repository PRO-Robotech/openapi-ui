import React, { FC, PropsWithChildren } from 'react'
import { FOOTER_HEIGHT, HEAD_FIRST_ROW, NAV_HEIGHT } from 'constants/blocksSizes'
import { ContentCardTop, ContentCardBottom, ContentCardMiddle } from './molecules'

export const ContentCardMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ContentCardTop fixedOffest={HEAD_FIRST_ROW + NAV_HEIGHT} />
      <ContentCardMiddle flexGrow={1} displayFlex flexFlow="column">
        {children}
      </ContentCardMiddle>
      <ContentCardBottom fixedOffest={FOOTER_HEIGHT} />
    </>
  )
}
