import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Wrapper, ActiveStyle } from './styles'

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
      {menu.map(link => (
        <AniLink
          key={link.path}
          cover
          bg="var(--background-primary)"
          direction="left"
          duration={0.5}
          to={link.path}
          activeStyle={ActiveStyle}
        >
          {link.name}
        </AniLink>
      ))}
    </Wrapper>
  )
}
