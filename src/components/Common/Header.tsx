import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import ContactLink from './ContactLink'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'
import { bold24, bold42 } from '../../styles/font'

const Header: FunctionComponent = function () {
  return (
    <Container>
      <Tittle>
        <Link to="/">Haze's Blog</Link>
      </Tittle>
      <ContactLink />
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 20px 5px;
  border-bottom: 1px solid ${CommonStyle.color.purple05};
  background-color: ${CommonStyle.color.white};
  z-index: 1;
`

const Tittle = styled.h1`
  color: ${CommonStyle.color.purple05};
  ${bold42};

  a {
    font-family: 'Silkscreen', sans-serif;
  }

  @media (max-width: 768px) {
    padding: 0;
    ${bold24}
  }
`
