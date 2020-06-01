import React from 'react'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'

import Header from './Header'
import Services from './Services'
import ContactSection from '../../components/ContactSection'

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Services />
      <ContactSection />
    </Layout>
  )
}
