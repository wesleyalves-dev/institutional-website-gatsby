import React from 'react'
import { Link } from 'gatsby'

import { Wrapper, ActiveStyle } from './styles'

export default function Links() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/" activeStyle={ActiveStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/sobre" activeStyle={ActiveStyle}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/contato" activeStyle={ActiveStyle}>
            Contato
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}
