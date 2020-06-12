import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Wrapper, TextContainer, ImageContainer } from './styles'

import content from './content'

export default function Description() {
  const { architectureImage } = useStaticQuery(
    graphql`
      query {
        architectureImage: file(relativePath: { eq: "architecture.png" }) {
          childImageSharp {
            fluid(maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <ImageContainer>
        <Img
          fluid={architectureImage.childImageSharp.fluid}
          alt="Imagem de prédios"
        />
      </ImageContainer>
      <TextContainer>
        <h1>{content.title}</h1>
        <p>{content.firstDescription}</p>
      </TextContainer>
    </Wrapper>
  )
}
