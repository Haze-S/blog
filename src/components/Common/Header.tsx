import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
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
  return (
    <Container>
      <Tittle>
        <Link to="/">Haze's Blog</Link>
      </Tittle>
      <LinkList>
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
  padding: 10px 15px;
  border-bottom: 1px solid ${CommonStyle.color.purple02};
  ${regular24}

  a {
    font-family: 'Silkscreen', sans-serif;
  }
`
