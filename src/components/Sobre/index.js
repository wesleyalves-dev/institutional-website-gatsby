import React from 'react'

import Layout from '../Layout'

import { Wrapper } from './styles'

import Description from './Description'
import Description2 from './Description2'
import ContactSection from '../ContactSection'

export default function Sobre() {
  return (
    <Layout>
      <Wrapper>
        <Description />
        <Description2 />
        <ContactSection />
      </Wrapper>
    </Layout>
  )
}
