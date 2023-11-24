import {useState} from 'react'

import * as S from 'styles/location/locationBoardGameCardStyle'

import LocationKakaoMap from './LocationKakaoMap'

const LocationBoardGameCafe = () => {
  const [nearest, setNearest] = useState()

  return (
    <S.Container>
      <S.NearestName>
        The nearest board game cafe is '<strong>{nearest?.place_name}</strong>'
      </S.NearestName>
      <S.Distance>
        It is located about<strong> {Math.ceil(nearest?.distance / 10) / 100}km</strong> away
      </S.Distance>
      <LocationKakaoMap setNearest={setNearest} />
    </S.Container>
  )
}

export default LocationBoardGameCafe
