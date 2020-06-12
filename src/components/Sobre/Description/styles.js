import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 800px;
  width: 90%;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-column-gap: 20px;
`

export const ImageContainer = styled.div``

export const TextContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
`
