import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const List = styled.div`
  margin-top: 0.6em;

  a {
    display: inline-block;
    margin-left: 1.2em;
    width: 45px;

    :first-child {
      margin-left: 0em;
    }

    :hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`
