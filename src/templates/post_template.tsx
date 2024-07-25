import { graphql } from 'gatsby'
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import { PostFrontmatterType } from 'types/PostItem.types'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}: PostTemplateProps) {
  const {
    node: {
      html,
      frontmatter: { title, summary, date, tags, thumbnail },
    },
  } = edges[0]

  return (
    <Template title={title} description={summary} url={href} image={thumbnail}>
      <PostHead title={title} date={date} tags={tags} thumbnail={thumbnail} />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            tags
            thumbnail
          }
        }
      }
    }
  }
`
