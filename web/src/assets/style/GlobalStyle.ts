import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    color: #FFF;
    background-color: #EBF2F5;
    font-size: 62.5%;
  }

  body, input, button, textarea {
    font-family: Nunito, sans-serif;
    font-weight: 600;
  }
`