import styled from 'styled-components'

type TContainerProps = {
  $isDark: boolean
}

const Container = styled.div<TContainerProps>`
  min-height: 100vh;
`

type TLayoutProps = {
  $bgColor: string
}

const Layout = styled.div<TLayoutProps>`
  background: ${({ $bgColor }) => $bgColor};
  min-height: 100vh;
  width: 100%;
`

const ContentContainer = styled.div`
  min-height: 100vh;
  margin: 0;
`

export const Styled = {
  Container,
  Layout,
  ContentContainer,
}
