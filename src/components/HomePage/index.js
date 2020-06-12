import React from 'react'

import Layout from '../Layout'

import Header from './Header'
import Services from './Services'
import ContactSection from '../ContactSection'

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <Services />
      <ContactSection />
    </Layout>
  )
}
