import styled from 'styled-components'
import media from 'styled-media-query'

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
