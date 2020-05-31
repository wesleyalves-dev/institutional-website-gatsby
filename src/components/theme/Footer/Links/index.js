import React from 'react'
import { Link } from 'gatsby'

import { List } from './styles'

export default function Links() {
  return (
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </List>
  )
}
