import styled from 'styled-components'

const GroupContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1.5px dashed var(--ns-border, #d9d9d9);
  background: var(--ns-bg, rgba(0, 0, 0, 0.02));
  pointer-events: none;
  overflow: hidden;
`

const Label = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
  padding: 6px 12px;
  color: var(--ns-label, #8c8c8c);
`

export const Styled = { GroupContainer, Label }
