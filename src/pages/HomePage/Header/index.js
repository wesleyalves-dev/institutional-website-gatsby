import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Wrapper } from './styles'

export default function Header() {
  const {
    site: {
      siteMetadata: { title, presentation }
    }
  } = useStaticQuery(
    graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            presentation
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{presentation}</p>
    </Wrapper>
  )
}
