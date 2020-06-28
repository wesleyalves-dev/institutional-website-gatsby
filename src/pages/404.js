import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Página não encontrada" />
      <NotFound />
    </Layout>
  )
}
