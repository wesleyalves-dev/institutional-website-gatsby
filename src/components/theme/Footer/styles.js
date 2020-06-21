import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  padding: 100px 0 0 0;
  background: linear-gradient(
    15deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  clip-path: polygon(0% 15%, 100% 0px, 100% 100%, 0 100%);

  a,
  span {
    color: var(--text-footer-color);
  }
`

export const Grid = styled.div`
  padding: 50px 0 0 0;
  margin-bottom: 100px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
