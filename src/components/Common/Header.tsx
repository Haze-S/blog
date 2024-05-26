import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import ToggleIcon from './Icon/ToggleIcon'
import ContactLink from './ContactLink'
import CategoryList from 'components/Common/CategoryList'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'
import { bold42, regular24 } from '../../styles/font'

const CATEGORY_LIST = {
  ALL: 10,
  Note: 5,
  Review: 3,
  Test: 2,
}

const Header: FunctionComponent = function () {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <Container>
      <Tittle>
        <Link to="/">Haze's Blog</Link>
      </Tittle>
      <LinkList>
        {isMobile ? <ToggleIcon /> : <div></div>}
        <CategoryList selectedCategory="Review" categoryList={CATEGORY_LIST} />
        <ContactLink />
      </LinkList>
    </Container>
  )
}

export default Header

const Container = styled.header`
  width: 100%;
  height: 175px;

  @media (max-width: 768px) {
    position: relative;
    height: 100px;
    margin-bottom: 40px;
  }
`

const Tittle = styled.h1`
  padding: 10px 0;
  color: ${CommonStyle.color.purple05};
  text-align: center;
  ${bold42};
  a {
    font-family: 'Silkscreen', sans-serif;
  }
`

const LinkList = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid ${CommonStyle.color.purple02};
  ${regular24}

  a {
    font-family: 'Silkscreen', sans-serif;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
