import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'

export default function ContatoPage() {
  return (
    <Layout>
      <SEO title="Contato" />
      <ContactForm />
    </Layout>
  )
}
