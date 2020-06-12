import styled from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
  z-index: 1;
  position: fixed;
  width: 100%;
`

export const Container = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

export const OpenSidebarButton = styled.button`
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  width: 1.5rem;

  ${media.greaterThan('medium')`
    display: none;
  `}
`
