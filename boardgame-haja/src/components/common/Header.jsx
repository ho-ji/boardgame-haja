import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

import imageDelete from 'assets/image/delete.svg'
import imageSearch from 'assets/image/search.svg'
import imageLocation from 'assets/image/location.svg'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  padding: 0 1.2rem;
  background-color: white;
  border-bottom: 2px dashed black;
  position: sticky;
  top: 0;
  z-index: 100;
`
const Title = styled.p`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 0.7;
`
const SubTitle = styled.p`
  font-size: 1.7rem;
`
const Menu = styled.div`
  display: flex;
  height: 100%;
  gap: 2rem;
  align-items: center;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  height: 4rem;
  background-color: #fff;
  overflow: hidden;
  padding: 0.2rem 1rem;
  border-bottom: 1px solid black;
  &:hover,
  &:focus {
    border-bottom: 2px solid black;
  }
`
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  margin: 0 0.5rem;
  &::placeholder {
    color: black;
  }
`
const SearchIcon = styled.img`
  width: 1.8erem;
  height: 1.8rem;
`
const DeleteInputButton = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  background: url(${imageDelete}) no-repeat center / contain;
`
const Location = styled(Link)`
  background: url(${imageLocation}) no-repeat left / 2rem 2rem;
  padding: 1rem 0 1rem 2.3rem;
  font-size: 1.6rem;
  &:hover {
    color: gray;
  }
`

const Header = () => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setInput('')
      /*TODO Search API*/
    }
  }

  return (
    <Container>
      <h1>
        <Link to="/">
          <Title>HAJA</Title>
          <SubTitle>Happy Boardgame</SubTitle>
        </Link>
      </h1>
      <Menu>
        <SearchContainer>
          <SearchIcon
            src={imageSearch}
            alt="Search Image"
          />
          <SearchInput
            type="text"
            placeholder="Search By Name..."
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {input && <DeleteInputButton onClick={() => setInput('')} />}
        </SearchContainer>
        <Location to="/">Nearby Cafe</Location>
      </Menu>
    </Container>
  )
}

export default Header
