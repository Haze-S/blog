import { Link } from 'gatsby'
import Wrapper from './Wrapper'
import styled from '@emotion/styled'
import GlobalStyle from '../../styles/GlobalStyle'
import CommonStyle from '../../styles/CommonStyle'
import { bold28, regular15 } from '../../styles/font'
import ContactLink from './ContactLink'

function Header() {
  return (
    <Container>
      <GlobalStyle />
      <Wrapper>
        <Tittle>
          <Link to="/">Haze's Blog</Link>
        </Tittle>
        <LinkList>
          <NavList>
            <Nav>
              <Link to="/note/">Note</Link>
            </Nav>
            <Nav>
              <Link to="/review/">Review</Link>
            </Nav>
            <Nav>
              <Link to="/test/">Test</Link>
            </Nav>
          </NavList>
          <ContactLink />
        </LinkList>
      </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.header`
  width: 100%;
  height: 175px;
`

const Tittle = styled.h1`
  padding: 10px 0;
  color: ${CommonStyle.color.purple05};
  text-align: center;
  ${bold28};
  a {
    font-family: 'Silkscreen', sans-serif;
  }
`

const LinkList = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 10px 15px;
  border-bottom: 1px solid ${CommonStyle.color.purple02};
  ${regular15}

  a {
    font-family: 'Silkscreen', sans-serif;
  }
`

const NavList = styled.ul`
  display: flex;
  gap: 30px;
`

const Nav = styled.li`
  &:hover {
    color: ${CommonStyle.color.purple06};
  }
`
