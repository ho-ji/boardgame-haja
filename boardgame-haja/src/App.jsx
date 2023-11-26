import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from 'pages/Home'
import Detail from 'pages/Detail'
import NotFound from 'pages/NotFound'
import Location from 'pages/Location'
import GlobalStyle from 'styles/GlobalStyle'
import SrcollToTop from 'components/common/SrcollToTop'
import useScrollRestoration from 'hooks/useScrollRestoration'
import useScreenSize from 'hooks/useScreenSize'

const App = () => {
  useScrollRestoration()
  useScreenSize()
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SrcollToTop />
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
