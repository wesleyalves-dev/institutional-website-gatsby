import React from 'react'

import { Wrapper, Label } from './styles'

export default function Form() {
  return (
    <Wrapper>
      <form>
        <Label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            placeholder="Fulano de Tal"
            maxLength={50}
            required
          />
        </Label>
        <Label htmlFor="email">
          E-mail:
          <input
            id="email"
            name="email"
            type="email"
            placeholder="fulano@dominio.com.br"
            maxLength={50}
            required
          />
        </Label>
        <Label htmlFor="subject">
          Assunto:
          <input
            id="subject"
            name="subject"
            placeholder="Sugestão"
            maxLength={80}
            required
          />
        </Label>
        <Label htmlFor="message">
          Mensagem:
          <textarea
            id="message"
            name="message"
            rows="6"
            maxLength={200}
            required
          />
        </Label>

        <button type="submit">Enviar</button>
      </form>
    </Wrapper>
  )
}
