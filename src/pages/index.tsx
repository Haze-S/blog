import { FunctionComponent } from 'react'
import Header from 'components/Common/Header'
import PostList from 'components/Main/PostList'
import Footer from 'components/Common/Footer'
import Wrapper from 'components/Common/Wrapper'
import GlobalStyle from '../styles/GlobalStyle'

const IndexPage: FunctionComponent = function () {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <PostList />
      <Footer />
    </Wrapper>
  )
}

export default IndexPage
