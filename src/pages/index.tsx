import { useMemo } from 'react'
import PostList, { PostType } from 'components/Main/PostList'
import CategoryList, { CategoryListProps } from 'components/Main/CategoryList'
import styled from '@emotion/styled'
import CommonStyle from '../styles/CommonStyle'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import queryString, { ParsedQuery } from 'query-string'
import Template from 'components/Common/Template'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

function IndexPage({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, siteUrl },
    },
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
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
    <Template title={title} url={siteUrl} image="logo.png">
      <HeaderContainer>
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
      </HeaderContainer>
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
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
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
            categories
            tags
            thumbnail
          }
        }
      }
    }
  }
`
