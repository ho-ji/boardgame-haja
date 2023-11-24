import {useLocation, useNavigate} from 'react-router-dom'
import {useEffect, useRef, useState} from 'react'

import * as S from 'styles/common/headerStyle'

import Search from './Search'

const Header = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [input, setInput] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const inputRef = useRef(null)

  const handleChange = (e) => {
    setInput(e.target.value)
    setIsSearch(true)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsSearch(false)
    }
  }

  const handleLogoClick = () => {
    window.scrollTo(0, 0)
    navigate('/')
  }

  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) setIsSearch(false)
    else setIsSearch(true)
  }

  const handleLocationClick = (e) => {
    if (pathname === '/location') window.location.reload()
  }

  const resetInput = () => {
    setInput('')
    setIsSearch(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)
    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <S.Container>
      <h1>
        <button onClick={handleLogoClick}>
          <S.Title>HAJA</S.Title>
          <S.SubTitle>Happy Boardgame</S.SubTitle>
        </button>
      </h1>
      <S.Menu>
        <S.SearchContainer ref={inputRef}>
          <S.SearchInput
            type="text"
            placeholder="Search By Name..."
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {input && <S.DeleteInputButton onClick={() => setInput('')} />}
          {input && isSearch && (
            <Search
              keyword={input}
              resetInput={resetInput}
            />
          )}
        </S.SearchContainer>
        <S.Location
          to="/location"
          onClick={handleLocationClick}>
          Nearby Cafe
        </S.Location>
      </S.Menu>
    </S.Container>
  )
}

export default Header
