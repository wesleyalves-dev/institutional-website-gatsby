import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Header from '../components/Header'
import Services from '../components/Services'
import ContactSection from '../components/ContactSection'

export default function HomePageIndex() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Services />
      <ContactSection />
    </Layout>
  )
}
