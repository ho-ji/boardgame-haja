import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

import useCurrentLocation from 'hooks/useCurrentLocation'

const Map = styled.div`
  width: 80%;
  height: 50rem;
`

const LocationKakaoMap = () => {
  const mapRef = useRef(null)
  const [kakaoMap, setKakaoMap] = useState(null)
  const {location: currentLocation} = useCurrentLocation()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`
    document.head.appendChild(script)
    script.onload = () => {
      window.kakao.maps.load(() => {
        const options = {
          center: new window.kakao.maps.LatLng(37.553881, 126.970488),
          level: 4,
        }
        setKakaoMap(new window.kakao.maps.Map(mapRef.current, options))
      })
    }
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (!kakaoMap) return
    kakaoMap.setCenter(new window.kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude))
  }, [currentLocation, kakaoMap])

  return (
    <Map
      id="map"
      ref={mapRef}></Map>
  )
}

export default LocationKakaoMap
