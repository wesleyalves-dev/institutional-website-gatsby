import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Container } from './styles'

import Close from './Close'
import Links from './Links'
import SocialMedia from './SocialMedia'

export default function Sidebar({ show, handleSidebar }) {
  return (
    <Wrapper show={show}>
      <Close handleSidebar={handleSidebar} />
      <Container>
        <Links />
        <SocialMedia />
      </Container>
    </Wrapper>
  )
}

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  handleSidebar: PropTypes.func.isRequired
}
