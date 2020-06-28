import React from 'react'
import PropTypes from 'prop-types'
import { Close } from 'styled-icons/evil'

import { Wrapper, Container, CloseSidebarButton } from './styles'

import Links from './Links'
import SocialMedia from './SocialMedia'

export default function Sidebar({ show, handleSidebar }) {
  return (
    <Wrapper show={show}>
      <CloseSidebarButton onClick={() => handleSidebar(false)}>
        <Close color="var(--text-primary-color)" />
      </CloseSidebarButton>
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
