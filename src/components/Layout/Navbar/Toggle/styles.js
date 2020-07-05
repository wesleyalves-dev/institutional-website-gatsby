import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: inline-block;
  margin-left: 20px;

  ${media.lessThan('880px')`
    margin-left: 0px;
  `}
`

export const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  float: right;

  svg {
    width: 15px;
  }
`
