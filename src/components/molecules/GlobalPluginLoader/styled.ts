import styled from 'styled-components'

const Overlay = styled.div<{ $isDark?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isDark }) => ($isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)')};
  z-index: 9999;
`

export const Styled = {
  Overlay,
}
