import styled from 'styled-components'

export const Wrapper = styled.section`
  background: var(--tertiary-color);
  clip-path: polygon(0% 15%, 100% 0px, 100% 85%, 0px 100%);
  padding: 100px 0;
`

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto 30px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 20px;
`

export const ImageContainer = styled.div``

export const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
`
