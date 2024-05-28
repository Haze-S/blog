import { FunctionComponent, useMemo } from 'react'
import Header from 'components/Common/Header'
import PostList, { PostType } from 'components/Main/PostList'
import Footer from 'components/Common/Footer'
import Wrapper from 'components/Common/Wrapper'
import GlobalStyle from '../styles/GlobalStyle'
import CategoryList, { CategoryListProps } from 'components/Common/CategoryList'
import styled from '@emotion/styled'
import CommonStyle from '../styles/CommonStyle'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import queryString, { ParsedQuery } from 'query-string'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Wrapper>
      <GlobalStyle />
      <HeaderContainer>
        <Header />
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
      </HeaderContainer>
      <PostList selectedCategory={selectedCategory} posts={edges} />
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
