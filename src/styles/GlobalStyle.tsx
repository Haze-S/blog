import { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Silkscreen:wght@400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    font-size: 10px;
  }

  a,
  a:hover,
  button {
    background-color: inherit;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }
`
