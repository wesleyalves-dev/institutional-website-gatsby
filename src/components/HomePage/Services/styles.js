import styled from 'styled-components'

export const Wrapper = styled.section`
  background: #f9f9f9;
  clip-path: polygon(0% 15%, 100% 0px, 100% 85%, 0px 100%);
  padding: 150px 20px;
  margin-top: 40px;
`

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 1.8rem;
  }
`

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 30px;
`

export const ServiceItem = styled.div`
  align-items: center;

  span {
    display: block;
    margin-top: 20px;
  }

  svg {
    width: 150px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`
