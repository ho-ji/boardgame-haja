import styled from 'styled-components'
import {useState} from 'react'

import LocationKakaoMap from './LocationKakaoMap'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
`

const NearestName = styled.p`
  font-size: 3rem;
  font-weight: bold;
  > strong {
    font-size: 3.5rem;
  }
`
const Distance = styled.span`
  font-size: 2.4rem;
  color: #555;
  margin-bottom: 3rem;
  > strong {
    text-decoration: underline;
  }
`

const LocationBoardGameCafe = () => {
  const [nearest, setNearest] = useState()

  return (
    <Container>
      <NearestName>
        The nearest board game cafe is '<strong>{nearest?.place_name}</strong>'
      </NearestName>
      <Distance>
        It is located about<strong> {Math.ceil(nearest?.distance / 10) / 100}km</strong> away
      </Distance>
      <LocationKakaoMap setNearest={setNearest} />
    </Container>
  )
}

export default LocationBoardGameCafe
