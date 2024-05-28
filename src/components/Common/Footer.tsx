import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { regular16 } from '../../styles/font'

const Footer: FunctionComponent = function () {
  return (
    <Container>
      Thank You for Visiting My Blog 😆
      <br />© 2024 Developer Haze, Powered By Gatsby.
    </Container>
  )
}

export default Footer

const Container = styled.p`
  padding: 50px 0;
  text-align: center;
  ${regular16}

  @media (max-width: 768px) {
    padding: 0;
  }
`
