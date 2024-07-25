import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { bold28, bold42, regular12, regular15 } from '../../styles/font'

export type PostHeadInfoProps = {
  title: string
  date: string
  tags: string[]
}

function PostHeadInfo({ title, date, tags }: PostHeadInfoProps) {
  const goBackPage = () => window.history.back()

  return (
    <PostHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <Title>{title}</Title>
      <PostData>
        <div>{tags.join(', ')}</div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 100%;
  padding: 60px 100px;
  color: #ffffff;

  @media (max-width: 540px) {
    padding: 60px 10px;
  }
`

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`

const Title = styled.h2`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${bold42}

  @media (max-width: 540px) {
    ${bold28}
  }
`

const PostData = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  ${regular15}

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    ${regular12}
  }
`
