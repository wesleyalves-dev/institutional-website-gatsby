import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Wrapper, ActiveStyle } from './styles'

export default function Links() {
  return (
    <Wrapper>
      <ul>
        <li>
          <AniLink fade duration={0.5} to="/" activeStyle={ActiveStyle}>
            Home
          </AniLink>
        </li>
        <li>
          <AniLink fade duration={0.5} to="/sobre" activeStyle={ActiveStyle}>
            Sobre
          </AniLink>
        </li>
        <li>
          <AniLink fade duration={0.5} to="/contato" activeStyle={ActiveStyle}>
            Contato
          </AniLink>
        </li>
      </ul>
    </Wrapper>
  )
}
