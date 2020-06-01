import React from 'react'

import Layout from '../../components/Layout'

import { Wrapper } from './styles'

import Form from './Form'

export default function Contato() {
  return (
    <Layout>
      <Wrapper>
        <h1>Contato</h1>
        <Form />
      </Wrapper>
    </Layout>
  )
}
