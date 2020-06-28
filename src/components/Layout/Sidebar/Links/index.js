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
    query MenuSidebar {
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
      <ul>
        {menu.map(link => (
          <li key={link.path}>
            <AniLink
              fade
              duration={0.5}
              to={link.path}
              activeStyle={ActiveStyle}
            >
              {link.name}
            </AniLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
