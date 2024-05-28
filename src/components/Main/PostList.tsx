import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      tags: string[]
      thumbnail: string
    }
  }
}

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <Container>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </Container>
  )
}

export default PostList

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 50px 10px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
