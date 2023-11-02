import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

import Home from 'pages/Home'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  button{
    border: none;
    cursor: pointer;
    padding: 0;
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
  }
  a{
    text-decoration: none;
    font-size: inherit;
    color: inherit;
  }
`

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
