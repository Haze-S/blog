import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import MediaQuery from 'react-responsive'
import ToggleIcon from './Icon/ToggleIcon'
import ContactLink from './ContactLink'
import CategoryList from 'components/Common/CategoryList'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'
import { bold28, bold42, regular20, regular24 } from '../../styles/font'
import viewSize from 'utils/viewSize'

const CATEGORY_LIST = {
  ALL: 10,
  Note: 5,
  Review: 3,
  Test: 2,
}

const Header: FunctionComponent = function () {
  return (
    <Container>
      <TitleContainer>
        <MediaQuery maxWidth={viewSize.tablet}>
          <ToggleIcon />
        </MediaQuery>
        <Tittle>
          <Link to="/">Haze's Blog</Link>
        </Tittle>
      </TitleContainer>
      <LinkList>
        <CategoryList selectedCategory="Review" categoryList={CATEGORY_LIST} />
        <div>
          <ContactLink />
        </div>
      </LinkList>
    </Container>
  )
}

export default Header

const Container = styled.header`
  width: 100%;
  margin-bottom: 40px;
  background-color: ${CommonStyle.color.white};

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    height: 60px;
    margin-bottom: 10px;
    z-index: 1;
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

  @media (max-width: 768px) {
    padding: 0;
    ${bold28}
  }
`

const TitleContainer = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
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

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 20px 10px;
    border-bottom: 0;
    background-color: ${CommonStyle.color.white};
    ${regular20}
    z-index: 1;
  }
`
