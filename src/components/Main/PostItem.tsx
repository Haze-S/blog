import { Link } from 'gatsby'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'
import { bold14, bold24, regular14 } from '../../styles/font'

type PostItemProps = {
  title: string
  date: String
  categories: string[]
  tags: string[]
  thumbnail: string
  link: string
}

function PostItem({ title, date, tags, thumbnail, link }: PostItemProps) {
  return (
    <Container to={link}>
      <ThumbnailImage src={thumbnail} alt={`${title} 썸네일`} />
      <PostItemContent>
        <Tags>
          {tags.map(tag => (
            <TagItem key={tag}>#{tag}</TagItem>
          ))}
        </Tags>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </PostItemContent>
    </Container>
  )
}

export default PostItem

const Container = styled(Link)`
  display: flex;
  height: 400px;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px ${CommonStyle.color.purple02};
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px ${CommonStyle.color.purple03};
  }
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`

const PostItemContent = styled.div`
  flex: 1;
  padding: 15px;
`
const Title = styled.h2`
  display: -webkit-box;
  height: 60%;
  ${bold24}
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Date = styled.p`
  ${regular14}
  opacity: 0.9;
  margin-bottom: 8px;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`

const TagItem = styled.span`
  display: inline-block;
  margin: 0 3px;
  ${bold14}
  color: ${CommonStyle.color.purple07};

  &:first-child {
    margin-left: 0;
  }
`
