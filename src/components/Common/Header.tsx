import { FunctionComponent, useState } from 'react'
import { Link } from 'gatsby'
import MediaQuery from 'react-responsive'
import ToggleIcon from './Icon/ToggleIcon'
import ContactLink from './ContactLink'
import CategoryList from 'components/Common/CategoryList'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'
import { bold36, bold42, regular24 } from '../../styles/font'
import viewSize from 'utils/viewSize'

const CATEGORY_LIST = {
  ALL: 10,
  Note: 5,
  Review: 3,
  Test: 2,
}

const Header: FunctionComponent = function () {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <Container>
      <Tittle>
        <Link to="/">Haze's Blog</Link>
      </Tittle>
      <LinkList>
        <MediaQuery maxWidth={viewSize.tablet}>
          <ToggleIcon onClick={handleToggle} />
        </MediaQuery>

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
  background-color: ${CommonStyle.color.white};

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    height: 60px;
    margin-bottom: 40px;
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
    ${bold36}
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
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`
