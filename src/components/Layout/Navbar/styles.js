import styled from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  border-bottom: 1px solid var(--grey);
  background: var(--background-color);
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
