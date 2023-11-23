import styled from 'styled-components'
import {useState} from 'react'

import LocationKakaoMap from './LocationKakaoMap'
import LocationNaverMap from './LocationNaverMap'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`
const MapButton = styled.button`
  border: 1px solid black;
  padding: 0.5rem 2rem;
  border-radius: 3px;
  background-color: ${(props) => (props.$visible ? '#000' : '#fff')};
  color: ${(props) => (props.$visible ? '#fff' : '#000')};
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
  const [mapType, setMapType] = useState('naver')

  const handleMapButtonClick = (type) => {
    setMapType(type)
  }
  return (
    <Container>
      <ButtonContainer>
        <MapButton
          $visible={mapType === 'google'}
          onClick={() => handleMapButtonClick('google')}
          type="button">
          Google Map
        </MapButton>
        <MapButton
          $visible={mapType === 'naver'}
          onClick={() => handleMapButtonClick('naver')}
          type="button">
          Naver Map
        </MapButton>
        <MapButton
          $visible={mapType === 'kakao'}
          onClick={() => handleMapButtonClick('kakao')}
          type="button">
          Kakao Map
        </MapButton>
      </ButtonContainer>
      {mapType === 'google' && <></>}
      {mapType === 'naver' && (
        <>
          <LocationNaverMap />
        </>
      )}
      {mapType === 'kakao' && (
        <>
          <NearestName>
            The nearest board game cafe is '<strong>{nearest?.place_name}</strong>'
          </NearestName>
          <Distance>
            It is located about<strong> {Math.ceil(nearest?.distance / 10) / 100}km</strong> away
          </Distance>
          <LocationKakaoMap setNearest={setNearest} />
        </>
      )}
    </Container>
  )
}

export default LocationBoardGameCafe
