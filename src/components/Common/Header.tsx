import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Wrapper from './Wrapper'

const Header: FunctionComponent = function () {
  return (
    <Wrapper>
      <GlobalStyle />
      <Tittle>
        <Link to="/">Haze's Blog</Link>
      </Tittle>
      <Link to="/note/">Note</Link>
      <Link to="/review/">Review</Link>
      <Link to="/test/">Test</Link>
      <Link to="/about/">About Me</Link>
    </Wrapper>
  )
}

export default Header

const Tittle = styled.h1``
