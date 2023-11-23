import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  button{
    border: none;
    cursor: pointer;
    padding: 0;
    font : inherit;
    background: inherit;
  }
  input{
    padding: 0;
    &:hover{
      outline:none;
    }
    &:focus{
      outline:none;
    }
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    font-family: Century Gothic, sans-serif;
    line-height: 1.3;
  }
  a{
    text-decoration: none;
    font-size: inherit;
    color: inherit;
  }
  img{
    vertical-align: top;
  }
  .a11y-hidden{
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  :root {
    --header-height: 10rem;
    --footer-height: 20rem;
  }
`
export default GlobalStyle
