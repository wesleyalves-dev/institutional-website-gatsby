import React from 'react'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'

import Header from './Header'

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
    </Layout>
  )
}
