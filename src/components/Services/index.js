import React from 'react'

import { Wrapper, Container, ServicesList, ServiceItem } from './styles'

import content from './content'
import Icons from './Icons'

export default function Services() {
  return (
    <Wrapper>
      <Container>
        <h2>{content.title}</h2>
        <ServicesList>
          {content.services.map(({ icon, description }) => {
            const Icon = Icons[icon]
            return (
              <ServiceItem key={icon}>
                <span>
                  <Icon />
                </span>
                <span>{description}</span>
              </ServiceItem>
            )
          })}
        </ServicesList>
      </Container>
    </Wrapper>
  )
}
