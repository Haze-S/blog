import { FunctionComponent, ReactNode } from 'react'
import Footer from 'components/Common/Footer'
import Wrapper from './Wrapper'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from './Header'

type TemplateProps = {
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = function ({ children }) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Template
