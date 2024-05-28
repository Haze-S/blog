import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo'

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: string
}

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  tags,
  thumbnail,
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage src={thumbnail} alt={`${title} thumbnail`} />
      <PostHeadInfo title={title} date={date} tags={tags} />
    </PostHeadWrapper>
  )
}

export default PostHead

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.8);

  @media (max-width: 540px) {
    height: 300px;
  }
`

const BackgroundImage = styled.img`
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`
