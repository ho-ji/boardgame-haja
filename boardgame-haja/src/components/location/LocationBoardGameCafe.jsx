import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

import useCurrentLocation from 'hooks/useCurrentLocation'

const {kakao} = window

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
`
const Map = styled.div`
  width: 80%;
  height: 30rem;
`

const LocationBoardGameCafe = () => {
  const mapRef = useRef(null)
  const [map, setMap] = useState()
  const {location: currentLocation} = useCurrentLocation()

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.553881, 126.970488),
      level: 6,
    }
    setMap(new kakao.maps.Map(mapRef.current, options))
  }, [currentLocation])

  useEffect(() => {
    if (currentLocation && map) {
      const currentPosition = new kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude)
      map.panTo(currentPosition)
    }
  }, [currentLocation, map])

  return (
    <Container>
      <Map ref={mapRef}></Map>
    </Container>
  )
}

export default LocationBoardGameCafe
