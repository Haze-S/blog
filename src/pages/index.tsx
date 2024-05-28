import { FunctionComponent } from 'react'
import Header from 'components/Common/Header'
import PostList from 'components/Main/PostList'
import Footer from 'components/Common/Footer'
import Wrapper from 'components/Common/Wrapper'
import GlobalStyle from '../styles/GlobalStyle'
import CategoryList from 'components/Common/CategoryList'
import styled from '@emotion/styled'
import CommonStyle from '../styles/CommonStyle'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'

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

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Wrapper>
      <GlobalStyle />
      <HeaderContainer>
        <Header />
        <CategoryList selectedCategory="Review" categoryList={CATEGORY_LIST} />
      </HeaderContainer>
      <PostList posts={edges} />
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
export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
            summary
            categories
            tags
            thumbnail
          }
        }
      }
    }
  }
`
