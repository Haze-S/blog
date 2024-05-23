import styled from '@emotion/styled'
import Wrapper from './Wrapper'

function Footer() {
  return (
    <Wrapper>
      <Container>
        Thank You for Visiting My Blog, Have a Good Day 😆
        <br />© 2024 Developer Haze, Powered By Gatsby.
      </Container>
    </Wrapper>
  )
}

export default Footer

const Container = styled.p`
  text-align: center;
`
