import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import AboutUs from '../components/AboutUs'
import Description from '../components/Description'
import ContactSection from '../components/ContactSection'

export default function SobrePage() {
  return (
    <Layout>
      <SEO title="Sobre" />
      <AboutUs />
      <Description />
      <ContactSection />
    </Layout>
  )
}
