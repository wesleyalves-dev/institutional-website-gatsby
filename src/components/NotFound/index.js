import React from 'react'
import { Link } from 'gatsby'

import { Wrapper } from './styles'

export default function NotFound() {
  return (
    <Wrapper>
      <h1>Página não encontrada</h1>
      <p>
        Oops! Não encontrou o que você procurava?{' '}
        <Link to="/contato" title="Clique aqui para entrar em contato">
          Entre em contato
        </Link>{' '}
        conosco para tirar suas dúvidas.
      </p>
    </Wrapper>
  )
}
