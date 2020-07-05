import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 50px 0;

  a {
    text-align: center;
    display: block;
    line-height: 50px;

    :hover {
      background: var(--background-secondary);
      color: var(--text-footer-secondary-color);
      border-radius: 5px;
    }
  }
`

export const Item = styled.div`
  width: 150px;
  margin: 0 auto;
`
