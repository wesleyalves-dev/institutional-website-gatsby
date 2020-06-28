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
      border: 1px solid var(--input-placeholder-color);
      border-radius: 5px;
      font-size: 1.01rem;
      padding: 7px 10px;
      box-sizing: border-box;
      outline: none;
      margin-bottom: 10px;

      ::placeholder {
        color: var(--input-border-color);
      }

      :focus {
        box-shadow: 0 0 5px rgba(0, 198, 255, 0.5) inset;
      }
    }

    label {
      font-size: 1.2rem;
    }

    button {
      background: linear-gradient(
        10deg,
        var(--primary-color) 0%,
        var(--secondary-color) 100%
      );
      padding: 10px 20px;
      color: #ffffff;
      border: none;
      outline: none;
      border-radius: 5px;
      float: right;
      text-transform: uppercase;
      cursor: pointer;

      :hover {
        background: linear-gradient(
          10deg,
          var(--secondary-color) 0%,
          var(--primary-color) 100%
        );
      }
    }
  }
`
