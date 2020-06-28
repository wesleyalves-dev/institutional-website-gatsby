import React from 'react'

import { Wrapper } from './styles'

export default function ContactForm() {
  return (
    <Wrapper>
      <h1>Contato</h1>
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="name"
            placeholder="Fulano de Tal"
            maxLength={50}
            required
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            name="email"
            type="email"
            placeholder="fulano@dominio.com.br"
            maxLength={50}
            required
          />
        </label>
        <label htmlFor="subject">
          Assunto
          <input
            id="subject"
            name="subject"
            placeholder="Sugestão"
            maxLength={80}
            required
          />
        </label>
        <label htmlFor="message">
          Mensagem
          <textarea
            id="message"
            name="message"
            rows="6"
            maxLength={200}
            required
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </Wrapper>
  )
}
