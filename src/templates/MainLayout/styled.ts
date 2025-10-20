import styled from 'styled-components'

type TContainerProps = {
  $isDark: boolean
}

const Container = styled.div<TContainerProps>`
  min-height: 100vh;
`

export const Styled = {
  Container,
}
