import styled from '@emotion/styled'
import { regular18 } from '../../styles/font'
import CommonStyle from '../../styles/CommonStyle'

interface PostContentProps {
  html: string
}

function PostContent({ html }: PostContentProps) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 86%;
  margin: 0 auto;
  padding: 30px 0 70px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  ${regular18}

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    margin-left: -10px;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5 {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 27px;
  }

  h5 {
    font-size: 25px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid ${CommonStyle.color.purple01};
    font-weight: 700;
  }

  pre {
    background-color: #222 !important;
    border-radius: 8px;
  }

  code:not(pre > code) {
    background-color: #eee !important;
    color: #f0506e !important;
  }

  // Adjust List Element Style
  ol,
  ul {
    padding-left: 30px;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid ${CommonStyle.color.purple04};
    margin: 30px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  img {
    display: block;
    width: 70%;
    margin: 0 auto;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 23px;
    }

    h4 {
      font-size: 20px;
    }

    h5 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }
  }
`
