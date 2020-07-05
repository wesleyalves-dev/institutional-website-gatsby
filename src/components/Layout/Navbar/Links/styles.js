import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;

  ${media.lessThan('880px')`
    display: none;
  `}

  a {
    font-size: 1.2rem;
    font-weight: 400;
  }
`

export const Container = styled.div`
  float: right;
`

export const Item = styled.div`
  display: inline-block;
  margin-left: 10px;

  a {
    font-size: 1.2rem;
    font-weight: 400;
    padding: 10px 15px;

    :hover {
      background: linear-gradient(
        10deg,
        var(--primary-color) 0%,
        var(--secondary-color) 100%
      );
      color: #ffffff;
      border-radius: 5px;
    }
  }
`

export const ActiveStyle = {
  background:
    'linear-gradient(10deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
  color: '#ffffff',
  borderRadius: '5px'
}
