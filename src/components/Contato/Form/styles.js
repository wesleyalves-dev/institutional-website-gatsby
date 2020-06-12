import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 30px 0;

  form {
    margin-bottom: 60px;

    input,
    textarea {
      width: 100%;
      border: 1px solid #c0c0c0;
      border-radius: 5px;
      font-size: 1.01rem;
      padding: 7px 10px;
      box-sizing: border-box;
      outline: none;
      margin-bottom: 10px;

      ::placeholder {
        color: #c0c0c0;
      }

      :focus {
        border: 5px solid rgba(0, 198, 255, 0.3);
      }
    }

    button {
      background: linear-gradient(
        10deg,
        rgb(0, 114, 255) 0%,
        rgb(0, 198, 255) 100%
      );
      padding: 10px 20px;
      color: #ffffff;
      border: none;
      outline: none;
      border-radius: 7px;
      float: right;
      cursor: pointer;

      :hover {
        background: linear-gradient(
          10deg,
          rgb(0, 198, 255) 0%,
          rgb(0, 114, 255) 100%
        );
      }
    }
  }
`

export const Label = styled.label`
  font-size: 1.2rem;
`
