import styled from 'styled-components'
import { Link } from 'gatsby'

export default styled(Link)`
  color: #ffffff;
  box-shadow: 8px 8px 20px rgba(0, 196, 255, 0.9);
  padding: 1.4rem 2rem;
  background: #00c3ff;
  border-radius: 0.6rem;
  transition: all 0.5s ease 0s;
  font-size: 1.1rem;

  :hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 196, 255, 0.36);
    transition: 0.5s;
  }
`
