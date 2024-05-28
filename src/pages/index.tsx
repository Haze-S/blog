import { FunctionComponent } from 'react'
import Header from 'components/Common/Header'
import PostList from 'components/Main/PostList'
import Footer from 'components/Common/Footer'
import Wrapper from 'components/Common/Wrapper'
import GlobalStyle from '../styles/GlobalStyle'
import { PostListItemType } from 'types/PostItem.types'
import CategoryList from 'components/Common/CategoryList'
import styled from '@emotion/styled'
import CommonStyle from '../styles/CommonStyle'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}
const CATEGORY_LIST = {
  ALL: 10,
  Note: 5,
  Review: 3,
  Test: 2,
}

const IndexPage: FunctionComponent<IndexPageProps> = function () {
  return (
    <Wrapper>
      <GlobalStyle />
      <HeaderContainer>
        <Header />
        <CategoryList selectedCategory="Review" categoryList={CATEGORY_LIST} />
      </HeaderContainer>
      <PostList />
      <Footer />
    </Wrapper>
  )
}

export default IndexPage

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${CommonStyle.color.white};
  z-index: 1;
`
