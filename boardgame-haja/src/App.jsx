import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from 'pages/Home'
import Detail from 'pages/Detail'
import NotFound from 'pages/NotFound'
import ScrollRestoration from 'components/common/ScrollRestoration'
import Location from 'pages/Location'
import GlobalStyle from 'styles/GlobalStyle'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/detail/:id"
          element={<Detail />}
        />
        <Route
          path="/location"
          element={<Location />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
