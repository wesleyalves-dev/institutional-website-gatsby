import React from 'react'

import { Wrapper } from './styles'

export default function Copyright() {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <span>Wesley Alves - {year}</span>
    </Wrapper>
  )
}
