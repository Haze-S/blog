import { ReactNode } from 'react'
import Footer from 'components/Common/Footer'
import Wrapper from './Wrapper'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from './Header'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

function Template({ title, description, url, image, children }: TemplateProps) {
  return (
    <Wrapper>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@haze" />
        <meta name="twitter:creator" content="@haze" />

        <html lang="ko" />
        <link rel="icon" href="./static/favicon.ico" />
      </Helmet>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Template
