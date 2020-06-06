import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Wrapper, ActiveStyle } from './styles'

export default function Links() {
  return (
    <Wrapper>
      <AniLink
        cover
        bg="#ffffff"
        direction="left"
        duration={0.5}
        to="/"
        activeStyle={ActiveStyle}
      >
        Home
      </AniLink>
      <AniLink
        cover
        bg="#ffffff"
        direction="left"
        duration={0.5}
        to="/sobre"
        activeStyle={ActiveStyle}
      >
        Sobre
      </AniLink>
      <AniLink
        cover
        bg="#ffffff"
        direction="left"
        duration={0.5}
        to="/contato"
        activeStyle={ActiveStyle}
      >
        Contato
      </AniLink>
    </Wrapper>
  )
}
