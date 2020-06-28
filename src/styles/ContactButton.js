import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default styled(AniLink)`
  color: var(--contact-button-color);
  box-shadow: 8px 8px 20px var(--contact-button-shadow);
  padding: 1.4rem 2rem;
  background: var(--contact-button-background);
  border-radius: 0.6rem;
  transition: all 0.5s ease 0s;
  font-size: 1.1rem;
  text-transform: uppercase;

  :hover {
    box-shadow: 0px 0px 20px 0px var(--contact-button-shadow-hover);
    transition: 0.5s;
  }
`
