import React from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'

import { Wrapper } from './styles'

import Description from './Description'
import Description2 from './Description2'
import ContactSection from '../../components/ContactSection'

export default function Sobre() {
  return (
    <Layout>
      <SEO title="Sobre" />
      <Wrapper>
        <Description />
        <Description2 />
        <ContactSection />
      </Wrapper>
    </Layout>
  )
}
