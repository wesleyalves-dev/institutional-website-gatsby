import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Logo from '../../../Logo'

import { Wrapper } from './styles'

export default function Brand() {
  return (
    <Wrapper>
      <AniLink
        cover
        bg="var(--background-primary)"
        direction="left"
        duration={0.5}
        to="/"
        title="Home"
      >
        <Logo color="var(--logo-footer-color)" />
        <span>ACME Corporation</span>
      </AniLink>
    </Wrapper>
  )
}
