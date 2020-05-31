import React from 'react'

import { Nav, Container } from './styles'
import Brand from './Brand'
import Links from './Links'

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <Brand />
        <Links />
      </Container>
    </Nav>
  )
}
