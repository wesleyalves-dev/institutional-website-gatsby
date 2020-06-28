import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Wrapper } from './styles'

export default function AboutTitle() {
  const {
    site: {
      siteMetadata: { title }
    }
  } = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  )
}
