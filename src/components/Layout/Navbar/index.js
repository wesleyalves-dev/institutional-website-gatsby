import React from 'react'
import PropTypes from 'prop-types'

import { Nav, Container } from './styles'
import Brand from './Brand'
import Links from './Links'
import Sandwich from './Sandwich'

export default function Navbar({ handleSidebar }) {
  return (
    <Nav>
      <Container>
        <Brand />
        <Links />
        <Sandwich handleSidebar={handleSidebar} />
      </Container>
    </Nav>
  )
}

Navbar.propTypes = {
  handleSidebar: PropTypes.func.isRequired
}
