import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

import currentImage from 'assets/image/current.svg'
import zoomInImage from 'assets/image/zoomin.svg'
import zoomOutImage from 'assets/image/zoomout.svg'
import getCurrentLocation from 'utils/getCurrentLocation'

const Map = styled.div`
  width: 90rem;
  height: 60rem;
`

const ControllContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  top: 1rem;
  right: 1rem;
  > button {
    width: 4rem;
    height: 4rem;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    padding: 1rem;
    background-size: 2rem 2rem;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`
const ZoomOutButton = styled.button`
  background: url(${zoomOutImage}) no-repeat center;
`

const ZoomInButton = styled.button`
  background: url(${zoomInImage}) no-repeat center;
`

const CurrentLocationButton = styled.button`
  margin-bottom: 2rem;
  background: url(${currentImage}) no-repeat center;
`

const LocationKakaoMap = () => {
  const mapRef = useRef(null)
  const [kakaoMap, setKakaoMap] = useState(null)

  const handleCurrentLocationClick = () => {
    const currentLocation = getCurrentLocation()
    if (currentLocation) kakaoMap.setCenter(new window.kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude))
  }
  const handleZoomInClick = () => {
    kakaoMap.setLevel(kakaoMap.getLevel() - 1)
  }
  const handleZoomOutClick = () => {
    kakaoMap.setLevel(kakaoMap.getLevel() + 1)
  }

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
    const currentLocation = getCurrentLocation()
    if (!kakaoMap || !currentLocation) return
    kakaoMap.setCenter(new window.kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude))
  }, [kakaoMap])

  return (
    <Map
      id="map"
      ref={mapRef}>
      <ControllContainer>
        <CurrentLocationButton
          type="button"
          onClick={handleCurrentLocationClick}></CurrentLocationButton>
        <ZoomInButton
          type="button"
          onClick={handleZoomInClick}></ZoomInButton>
        <ZoomOutButton
          type="button"
          onClick={handleZoomOutClick}></ZoomOutButton>
      </ControllContainer>
    </Map>
  )
}

export default LocationKakaoMap
