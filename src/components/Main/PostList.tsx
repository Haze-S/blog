import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      date: string
      categories: string[]
      tags: string[]
      thumbnail: string
    }
  }
}

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

function PostList({ selectedCategory, posts }: PostListProps) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <Container ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </Container>
  )
}

export default PostList

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin: 50px 10px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
