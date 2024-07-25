import styled from '@emotion/styled'
import { Link } from 'gatsby'
import GlobalStyle from 'components/Common/GlobalStyle'
import CommonStyle from '../styles/CommonStyle'

function NotFoundPage() {
  return (
    <Container>
      <GlobalStyle />
      <NotFoundText>404</NotFoundText>
      <NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </NotFoundDescription>
      <GoToMainButton to="/">메인으로</GoToMainButton>
    </Container>
  )
}

export default NotFoundPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const NotFoundText = styled.p`
  font-family: 'Silkscreen', sans-serif;
  color: ${CommonStyle.color.purple05};
  font-size: 150px;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`

const NotFoundDescription = styled.p`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`
