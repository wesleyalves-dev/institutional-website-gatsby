import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${media.lessThan('medium')`
    display: none;
  `}

  a {
    margin-right: 1em;
    font-size: 1.2rem;
    font-weight: 400;
  }
`

export const ActiveStyle = {
  color: '#000000'
}
