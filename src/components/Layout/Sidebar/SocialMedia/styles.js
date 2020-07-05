import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  margin-top: 0.6em;

  li {
    width: 50px;
    display: inline-block;
    margin-left: 0.8em;

    :first-child {
      margin-left: 0em;
    }
  }
`
