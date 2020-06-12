import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 60px;
  width: 60px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    width: 60px;
    height: 60px;
  }

  span {
    font-size: 1.1rem;
    color: #ffffff;
    margin-left: 0.3rem;

    :hover {
      color: #cccccc;
    }
  }
`
