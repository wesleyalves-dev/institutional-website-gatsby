import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

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

    label {
      font-size: 1.2rem;
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
      text-transform: uppercase;
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
