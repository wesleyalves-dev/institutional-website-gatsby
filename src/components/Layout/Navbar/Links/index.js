import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Wrapper, Container, Item, ActiveStyle } from './styles'

export default function Links() {
  const {
    site: {
      siteMetadata: { menu }
    }
  } = useStaticQuery(graphql`
    query MenuNavbar {
      site {
        siteMetadata {
          menu {
            name
            path
            title
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Container>
        {menu.map(link => (
          <Item key={link.path}>
            <AniLink
              cover
              bg="var(--background-primary)"
              direction="left"
              duration={0.5}
              to={link.path}
              activeStyle={ActiveStyle}
            >
              {link.name}
            </AniLink>
          </Item>
        ))}
      </Container>
    </Wrapper>
  )
}
