import styled from 'styled-components'

import LocationKakaoMap from './LocationKakaoMap'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
`

const LocationBoardGameCafe = () => {
  return (
    <Container>
      <LocationKakaoMap />
    </Container>
  )
}

export default LocationBoardGameCafe
