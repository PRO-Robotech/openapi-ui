import styled from 'styled-components'
// import { HEAD_FIRST_ROW, SIDEBAR_CLUSTER_HEIGHT } from 'constants/blocksSizes'
import { HEAD_FIRST_ROW } from 'constants/blocksSizes'

type TBackgroundContainerProps = {
  $borderRadius: number
  $borderColor: string
}

const BackgroundContainer = styled.div<TBackgroundContainerProps>`
  border-top-right-radius: ${({ $borderRadius }) => $borderRadius}px;
  border: 1px ${({ $borderColor }) => $borderColor} solid;
  border-left: 0;
  box-sizing: border-box;
  width: 250px;
  height: calc(100vh - ${HEAD_FIRST_ROW}px);
`

// const ClusterSelectorContainer = styled.div`
//   height: ${SIDEBAR_CLUSTER_HEIGHT}px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 12px;
// `

export const Styled = {
  BackgroundContainer,
  // ClusterSelectorContainer,
}
