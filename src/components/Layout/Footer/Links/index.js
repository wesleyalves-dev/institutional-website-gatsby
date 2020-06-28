import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { List } from './styles'

export default function Links() {
  return (
    <List>
      <li>
        <AniLink cover bg="#ffffff" direction="left" duration={0.5} to="/">
          Home
        </AniLink>
      </li>
      <li>
        <AniLink cover bg="#ffffff" direction="left" duration={0.5} to="/sobre">
          Sobre
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          bg="#ffffff"
          direction="left"
          duration={0.5}
          to="/contato"
        >
          Contato
        </AniLink>
      </li>
    </List>
  )
}
