import React from 'react'
import PropTypes from 'prop-types'
import { Bars } from 'styled-icons/fa-solid'

import { Nav, Container, OpenSidebarButton } from './styles'
import Brand from './Brand'
import Links from './Links'

export default function Navbar({ handleSidebar }) {
  return (
    <Nav>
      <Container>
        <Brand />
        <Links />
        <OpenSidebarButton type="button" onClick={() => handleSidebar(true)}>
          <Bars />
        </OpenSidebarButton>
      </Container>
    </Nav>
  )
}

Navbar.propTypes = {
  handleSidebar: PropTypes.func.isRequired
}
