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

type TDetailsThemeProps = {
  $colorBgElevated: string
  $colorBgContainer: string
  $colorBorder: string
  $colorBorderSecondary: string
  $colorFillAlter: string
  $colorPrimary: string
  $colorPrimaryBg: string
  $colorPrimaryBorder: string
  $colorPrimaryText: string
  $colorText: string
  $colorTextSecondary: string
  $boxShadowSecondary: string
  $borderRadius: number
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

  .react-flow__node {
    z-index: 2;
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

const DetailsLayout = styled.div<TDetailsThemeProps>`
  --details-bg-elevated: ${({ $colorBgElevated }) => $colorBgElevated};
  --details-bg-container: ${({ $colorBgContainer }) => $colorBgContainer};
  --details-border: ${({ $colorBorder }) => $colorBorder};
  --details-border-secondary: ${({ $colorBorderSecondary }) => $colorBorderSecondary};
  --details-fill-alter: ${({ $colorFillAlter }) => $colorFillAlter};
  --details-primary: ${({ $colorPrimary }) => $colorPrimary};
  --details-primary-bg: ${({ $colorPrimaryBg }) => $colorPrimaryBg};
  --details-primary-border: ${({ $colorPrimaryBorder }) => $colorPrimaryBorder};
  --details-primary-text: ${({ $colorPrimaryText }) => $colorPrimaryText};
  --details-text: ${({ $colorText }) => $colorText};
  --details-text-secondary: ${({ $colorTextSecondary }) => $colorTextSecondary};
  --details-shadow: ${({ $boxShadowSecondary }) => $boxShadowSecondary};
  --details-radius: ${({ $borderRadius }) => `${$borderRadius}px`};
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px;

  @media (width <= 1100px) {
    grid-template-columns: 1fr;
  }
`

const DetailsSection = styled.div`
  min-width: 0;
`

const DetailsSectionHeader = styled.div`
  margin-bottom: 12px;
`

const DetailsSectionTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--details-text-secondary);
`

const DetailsToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  padding: 10px 14px;
  border: 1px solid var(--details-border-secondary);
  border-radius: calc(var(--details-radius) + 4px);
  background: var(--details-fill-alter);

  @media (width <= 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const DetailsToolbarActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const DetailsToolbarMeta = styled.div`
  font-size: 12px;
  color: var(--details-text-secondary);
`

const RuleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 66vh;
  overflow: auto;
  padding-right: 6px;
`

const RuleCard = styled.button<{ $selected: boolean }>`
  width: 100%;
  text-align: left;
  border: 1px solid
    ${({ $selected }) => ($selected ? 'var(--details-primary-border)' : 'var(--details-border-secondary)')};
  border-radius: calc(var(--details-radius) + 8px);
  padding: 14px 16px;
  background: ${({ $selected }) => ($selected ? 'var(--details-primary-bg)' : 'var(--details-fill-alter)')};
  color: var(--details-text);
  cursor: pointer;
  transition:
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: var(--details-primary);
    box-shadow: var(--details-shadow);
  }
`

const RuleCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

const RuleCardBody = styled.div`
  min-width: 0;
  flex: 1;
`

const RuleHeadline = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  line-height: 1.35;
  color: var(--details-text);
`

const RuleVerb = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  color: var(--details-primary-text);
`

const RuleTarget = styled.span`
  font-weight: 600;
  word-break: break-all;
`

const RuleTargetList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`

const RuleMeta = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: var(--details-text-secondary);
`

const RuleTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`

const PermissionPanel = styled.div`
  max-height: 66vh;
  overflow: auto;
  padding-right: 6px;
  border-left: 4px solid var(--details-primary);
  padding-left: 16px;

  @media (width <= 1100px) {
    border-left: 0;
    border-top: 4px solid var(--details-primary);
    padding-left: 0;
    padding-top: 16px;
  }
`

const PermissionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`

const PermissionPillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const PermissionPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid var(--details-border-secondary);
  border-radius: calc(var(--details-radius) + 4px);
  background: var(--details-bg-container);
  color: var(--details-text);
  font-size: 13px;
  line-height: 1.2;
`

const PermissionVerb = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  color: var(--details-primary-text);
`

const PermissionTarget = styled.span`
  font-weight: 600;
  word-break: break-all;
`

const ResourceLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;

  > span:last-child {
    min-width: 0;
    word-break: break-all;
  }
`

const ResourceBadgeAbbr = styled.span<{ $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 13px;
  padding: 1px 5px;
  font-size: 13px;
  height: min-content;
  flex-shrink: 0;
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
  DetailsLayout,
  DetailsSection,
  DetailsSectionHeader,
  DetailsSectionTitle,
  DetailsToolbar,
  DetailsToolbarActions,
  DetailsToolbarMeta,
  RuleList,
  RuleCard,
  RuleCardHeader,
  RuleCardBody,
  RuleHeadline,
  RuleVerb,
  RuleTarget,
  RuleTargetList,
  RuleMeta,
  RuleTagRow,
  PermissionPanel,
  PermissionHeader,
  PermissionPillRow,
  PermissionPill,
  PermissionVerb,
  PermissionTarget,
  ResourceLabel,
  ResourceBadgeAbbr,
}
