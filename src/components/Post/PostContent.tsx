import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { regular16 } from '../../styles/font'
import CommonStyle from '../../styles/CommonStyle'

interface PostContentProps {
  html: string
}

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  ${regular16}

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
d  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 10px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid ${CommonStyle.color.purple01};
    font-weight: 800;
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
`
