import styled from 'styled-components'

export const Wrapper = styled.div`
  ul {
    li {
      list-style: none;
      margin: 40px;
      text-align: center;

      a {
        font-size: 1.2rem;
        font-weight: 400;

        :hover {
          color: #000000;
        }
      }
    }
  }
`

export const ActiveStyle = {
  color: '#000000'
}
