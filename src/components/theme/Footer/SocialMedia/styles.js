import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  span {
    color: #ffffff;
  }
`

export const List = styled.ul`
  margin-top: 0.6em;

  li {
    width: 40px;
    display: inline-block;
    margin-left: 0.6em;

    :first-child {
      margin-left: 0em;
    }

    a {
      color: #ffffff;

      :hover {
        color: #cccccc;
      }
    }
  }
`
