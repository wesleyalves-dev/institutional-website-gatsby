import React from 'react'
import { Link } from 'gatsby'

import Logo from '../../../Logo'

import { Wrapper } from './styles'

export default function Brand() {
  return (
    <Wrapper>
      <Link to="/" title="Home">
        <Logo color="var(--logo-footer-color)" />
        <span>ACME Corporation</span>
      </Link>
    </Wrapper>
  )
}
