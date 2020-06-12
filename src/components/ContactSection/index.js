import React from 'react'

import { Wrapper } from './styles'

import ContactButton from '../ContactButton'

export default function ContactSection() {
  return (
    <Wrapper>
      <ContactButton
        cover
        bg="#ffffff"
        direction="left"
        duration={0.5}
        to="/contato"
      >
        ENTRE EM CONTATO
      </ContactButton>
    </Wrapper>
  )
}
