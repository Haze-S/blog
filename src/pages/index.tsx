import { FunctionComponent } from 'react'
import Header from 'components/Common/Header'
import PostList from 'components/Main/PostList'
import Footer from 'components/Common/Footer'
import Wrapper from 'components/Common/Wrapper'
import GlobalStyle from '../styles/GlobalStyle'
import { PostListItemType } from 'types/PostItem.types'
import CategoryList from 'components/Common/CategoryList'

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
      <Header />
      <CategoryList selectedCategory="Review" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Wrapper>
  )
}

export default IndexPage
