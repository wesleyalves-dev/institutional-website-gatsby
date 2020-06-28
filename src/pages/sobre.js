import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import AboutTitle from '../components/AboutTitle'
import AboutUs from '../components/AboutUs'
import Description from '../components/Description'
import ContactSection from '../components/ContactSection'

export default function SobrePage() {
  return (
    <Layout>
      <SEO title="Sobre nós" />
      <AboutTitle />
      <AboutUs />
      <Description />
      <ContactSection />
    </Layout>
  )
}
