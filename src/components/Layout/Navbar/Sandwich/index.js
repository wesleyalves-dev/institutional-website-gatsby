import React from 'react'
import PropTypes from 'prop-types'
import { Bars } from 'styled-icons/fa-solid'

import { OpenSidebarButton } from './styles'

export default function Navbar({ handleSidebar }) {
  return (
    <OpenSidebarButton type="button" onClick={() => handleSidebar(true)}>
      <Bars />
    </OpenSidebarButton>
  )
}

Navbar.propTypes = {
  handleSidebar: PropTypes.func.isRequired
}
