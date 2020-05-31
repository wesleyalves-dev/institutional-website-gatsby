import React from 'react'
import { Link } from 'gatsby'

import { Wrapper, ActiveStyle } from './styles'

export default function Links() {
  return (
    <Wrapper>
      <Link to="/" activeStyle={ActiveStyle}>
        Home
      </Link>
      <Link to="/sobre" activeStyle={ActiveStyle}>
        Sobre
      </Link>
      <Link to="/contato" activeStyle={ActiveStyle}>
        Contato
      </Link>
    </Wrapper>
  )
}
