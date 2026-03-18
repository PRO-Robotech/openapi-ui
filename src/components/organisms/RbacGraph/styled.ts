import styled from 'styled-components'

type TCanvasWrapperProps = {
  $height: number
  $colorBgContainer: string
  $colorBgElevated: string
  $colorBorder: string
  $colorFillSecondary: string
  $colorPrimary: string
  $colorText: string
  $colorTextSecondary: string
  $borderRadius: number
  $boxShadowSecondary: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Chrome = styled.div`
  display: flex;
  flex-direction: column;
`

const CanvasWrapper = styled.div<TCanvasWrapperProps>`
  height: ${({ $height }) => `${$height}px`};
  min-height: 320px;
  position: relative;

  .react-flow__edge {
    cursor: pointer;
  }

  .react-flow__minimap {
    background: ${({ $colorBgElevated }) => $colorBgElevated};
    border: 1px solid ${({ $colorBorder }) => $colorBorder};
    border-radius: ${({ $borderRadius }) => `${$borderRadius}px`};
    box-shadow: ${({ $boxShadowSecondary }) => $boxShadowSecondary};
  }

  .react-flow__minimap-mask {
    fill: ${({ $colorFillSecondary }) => $colorFillSecondary};
  }

  .react-flow__controls {
    overflow: hidden;
    background: ${({ $colorBgElevated }) => $colorBgElevated};
    border: 1px solid ${({ $colorBorder }) => $colorBorder};
    border-radius: ${({ $borderRadius }) => `${$borderRadius}px`};
    box-shadow: ${({ $boxShadowSecondary }) => $boxShadowSecondary};
  }

  .react-flow__controls-button {
    background: ${({ $colorBgElevated }) => $colorBgElevated};
    border-bottom: 1px solid ${({ $colorBorder }) => $colorBorder};
    color: ${({ $colorText }) => $colorText};
  }

  .react-flow__controls-button:last-child {
    border-bottom: 0;
  }

  .react-flow__controls-button:hover {
    background: ${({ $colorFillSecondary }) => $colorFillSecondary};
  }

  .react-flow__controls-button svg {
    fill: currentColor;
  }

  .react-flow__controls-button:hover,
  .react-flow__controls-button:focus-visible {
    color: ${({ $colorPrimary }) => $colorPrimary};
  }

  .react-flow__attribution {
    background: ${({ $colorBgContainer }) => $colorBgContainer};
    color: ${({ $colorTextSecondary }) => $colorTextSecondary};
    border-top-left-radius: ${({ $borderRadius }) => `${$borderRadius}px`};
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

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 300px;
  padding: 24px 16px;
`

export const Styled = {
  Container,
  Chrome,
  CanvasWrapper,
  StatsBar,
  LegendRow,
  LegendItem,
  LegendSwatch,
  SpinContainer,
  EmptyState,
}
