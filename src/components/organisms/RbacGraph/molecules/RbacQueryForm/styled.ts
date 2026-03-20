import styled from 'styled-components'

type TContainerProps = {
  $colorBorder: string
  $colorBgContainer: string
  $borderRadiusLG: number
}

type TColorProps = {
  $color: string
}

type TActiveBadgeProps = {
  $borderRadiusLG: number
  $background: string
  $color: string
  $visible: boolean
}

const Container = styled.div<TContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  .ant-collapse {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: transparent;
  }

  .ant-collapse-item {
    border: 1px solid ${({ $colorBorder }) => $colorBorder};
    /* stylelint-disable declaration-no-important */
    border-radius: ${({ $borderRadiusLG }) => `${$borderRadiusLG}px`} !important;
    background: ${({ $colorBgContainer }) => $colorBgContainer};
  }

  & .ant-collapse.ant-collapse-borderless > .ant-collapse-item:last-child {
    border-bottom: 1px solid ${({ $colorBorder }) => $colorBorder};
  }

  .ant-collapse-header {
    align-items: center !important;
    padding: 16px !important;
  }

  .ant-collapse-content-box {
    padding: 0 16px 16px !important;
  }
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const TitleIcon = styled.span<TColorProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${({ $color }) => $color};
`

const Title = styled.h3<TColorProps>`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ $color }) => $color};
`

const Description = styled.p<TColorProps>`
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  color: ${({ $color }) => $color};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  min-width: 0;
`

const SectionLabelMain = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-size: 16px;
  line-height: 24px;
`

const SectionIcon = styled.span<TColorProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${({ $color }) => $color};
`

const ActiveBadge = styled.span<TActiveBadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 68px;
  padding: 4px 8px;
  border-radius: ${({ $borderRadiusLG }) => `${$borderRadiusLG}px`};
  background: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
`

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px 16px;

  @media (width <= 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (width <= 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

const PrimarySectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 12px 16px;

  @media (width <= 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (width <= 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

const FormRow = styled.div<{ $span?: number }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: span ${({ $span = 1 }) => $span};

  @media (width <= 1200px) {
    grid-column: auto;
  }
`

const Label = styled.label<TColorProps>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $color }) => $color};
`

const CheckboxWrap = styled.div`
  min-height: 32px;
  display: flex;
  align-items: center;
`

export const Styled = {
  Container,
  Header,
  TitleBlock,
  TitleRow,
  TitleIcon,
  Title,
  Description,
  Actions,
  SectionLabel,
  SectionLabelMain,
  SectionIcon,
  ActiveBadge,
  SectionGrid,
  PrimarySectionGrid,
  FormRow,
  Label,
  CheckboxWrap,
}
