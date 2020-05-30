import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Página não encontrada" />
      <h1>Página não encontrada</h1>
    </Layout>
  )
}
