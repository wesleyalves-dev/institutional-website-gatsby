import React from 'react'

import { Wrapper } from './styles'

import ContactButton from '../../styles/ContactButton'

export default function ContactSection() {
  return (
    <Wrapper>
      <ContactButton
        cover
        bg="var(--background-primary)"
        direction="left"
        duration={0.5}
        to="/contato"
      >
        Entre em contato
      </ContactButton>
    </Wrapper>
  )
}
