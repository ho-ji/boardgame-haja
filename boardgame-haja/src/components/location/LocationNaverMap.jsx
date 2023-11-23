import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import getCurrentLocation from 'utils/getCurrentLocation'

const Map = styled.div`
  width: 90rem;
  height: 60rem;
  position: relative;
`

const LocationNaverMap = () => {
  const [naverMap, setNaverMap] = useState(null)
  const mapRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`
    document.head.appendChild(script)
    script.onload = () => {
      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.553881, 126.970488),
        zoom: 16,
      })
      setNaverMap(map)
    }
    window.navermap_authFailure = function () {
      console.log('error')
    }
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const currentLocation = getCurrentLocation()
    if (!naverMap) return
    if (currentLocation) naverMap.setCenter(new window.naver.maps.LatLng(currentLocation.latitude, currentLocation.longitude))
  })

  return <Map ref={mapRef}></Map>
}

export default LocationNaverMap
