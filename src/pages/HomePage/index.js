import React from 'react'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'

import Header from './Header'
import Services from './Services'
import ContactButton from './ContactButton'

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Services />
      <ContactButton />
    </Layout>
  )
}
