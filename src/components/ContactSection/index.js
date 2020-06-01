import React from 'react'

import { Wrapper } from './styles'

import ContactButton from '../ContactButton'

export default function ContactSection() {
  return (
    <Wrapper>
      <ContactButton to="/contato">ENTRE EM CONTATO</ContactButton>
    </Wrapper>
  )
}
