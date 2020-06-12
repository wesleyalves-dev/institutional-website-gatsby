import styled from 'styled-components'

export const Wrapper = styled.aside`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  right: 0;
  background: #ffffff;
  display: ${props => (props.show ? 'block' : 'none')};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const CloseSidebarButton = styled.button`
  margin: 35px;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  width: 1.5rem;
  position: absolute;
  right: 0;
`
