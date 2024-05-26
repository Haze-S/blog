import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  category: 'Note',
  tags: ['FE', 'Web', 'Event'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://content.surfit.io/thumbs/image/K2lP5/GmOW2/52143447664ecd8c9c7f7/cover-center-1x.webp',
  link: '<https://www.google.co.kr/>',
}

const PostList: FunctionComponent = function () {
  return (
    <Container>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </Container>
  )
}

export default PostList

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 0 10px;
`
