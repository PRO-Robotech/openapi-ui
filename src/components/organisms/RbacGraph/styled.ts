import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`

const CanvasWrapper = styled.div`
  flex: 1 1 auto;
  min-height: 600px;
  height: calc(100vh - 400px);
  position: relative;

  .react-flow__edge {
    cursor: pointer;
  }
`

const StatsBar = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px 16px;
  font-size: 12px;
  opacity: 0.8;
`

const LegendRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 6px 16px;
  font-size: 11px;
  align-items: center;
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const LegendSwatch = styled.span<{ $color: string; $dashed?: boolean }>`
  display: inline-block;
  width: 20px;
  height: 0;
  border-top: 2px ${({ $dashed }) => ($dashed ? 'dashed' : 'solid')} ${({ $color }) => $color};
`

const SpinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 300px;
`

export const Styled = { Container, CanvasWrapper, StatsBar, LegendRow, LegendItem, LegendSwatch, SpinContainer }
