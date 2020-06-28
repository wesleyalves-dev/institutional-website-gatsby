import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { List } from './styles'

export default function Links() {
  const {
    site: {
      siteMetadata: { menu }
    }
  } = useStaticQuery(graphql`
    query MenuFooter {
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
    <List>
      {menu.map(link => (
        <li key={link.path}>
          <AniLink
            cover
            bg="var(--background-primary)"
            direction="left"
            duration={0.5}
            to={link.path}
          >
            {link.name}
          </AniLink>
        </li>
      ))}
    </List>
  )
}
