import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

import Header from 'components/common/Header'
import imageBrokenLink from 'assets/image/brokenlink.svg'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--header-height));
`
const Image = styled.img`
  width: 10rem;
  margin-bottom: 1rem;
`
const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
`

const HomeButton = styled.button`
  margin-top: 2rem;
  font-weight: bold;
  color: black;
  padding: 1% 2rem;
  border-radius: 4px;
  background: black;
  color: white;
  border: 2px solid black;
  transition: background, color, 0.5s;
  &:hover {
    color: black;
    background: white;
  }
`

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <Container>
        <Image
          src={imageBrokenLink}
          alt="404"
        />
        <Title>It appears we're missing some bits…</Title>
        <p>Sorry, the page you're looking for is missing or does not exist.</p>
        <HomeButton
          type="button"
          onClick={() => navigate('/')}>
          Take Me Home
        </HomeButton>
      </Container>
    </>
  )
}

export default NotFound
