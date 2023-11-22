import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

import currentImage from 'assets/image/current.svg'
import zoomInImage from 'assets/image/zoomin.svg'
import zoomOutImage from 'assets/image/zoomout.svg'
import diceImage from 'assets/image/dice.svg'
import closeImage from 'assets/image/close.svg'
import getCurrentLocation from 'utils/getCurrentLocation'

const Map = styled.div`
  width: 90rem;
  height: 60rem;
  .placeinfo {
    position: absolute;
    bottom: 7rem;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0px 1px 2px #888;
    .name {
      font-weight: bold;
      font-size: 1.8rem;
    }
    .address2 {
      color: #a4a4a4;
    }
    .phone {
      color: #288756;
    }
    .link {
      width: fit-content;
      color: #fff;
      margin: 0 auto;
      background: #000;
      padding: 0.5rem 2rem;
      border-radius: 3px;
    }
    .close {
      width: 3rem;
      height: 3rem;
      position: absolute;
      background: url(${closeImage}) no-repeat center/3rem 3rem;
      right: 1rem;
      top: 0.5rem;
    }
  }
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
  const [placeInfo, setPlaceInfo] = useState(null)

  const handleCurrentLocationClick = () => {
    const currentLocation = getCurrentLocation()
    if (currentLocation) kakaoMap.panTo(new window.kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude))
    else alert('Failed to retrieve the current location')
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
        setPlaceInfo(new window.kakao.maps.CustomOverlay({zIndex: 1}))
      })
    }
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const currentLocation = getCurrentLocation()
    if (!kakaoMap) return
    if (currentLocation) kakaoMap.setCenter(new window.kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude))
    else kakaoMap.setCenter(new window.kakao.maps.LatLng(37.553881, 126.970488))
    kakaoMap.setMaxLevel(8)

    const place = new window.kakao.maps.services.Places()

    place.keywordSearch(
      '보드게임',
      (data, status, _) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds()

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i])
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
          }
          kakaoMap.setBounds(bounds)
        }
      },
      {
        location: kakaoMap.getCenter(),
      }
    )

    const displayMarker = (place) => {
      const imageSize = new window.kakao.maps.Size(50, 70)
      const makerImage = new window.kakao.maps.MarkerImage(diceImage, imageSize)

      const marker = new window.kakao.maps.Marker({
        map: kakaoMap,
        position: new window.kakao.maps.LatLng(place.y, place.x),
        image: makerImage,
      })

      window.kakao.maps.event.addListener(marker, 'click', function () {
        displayPlaceInfo(place)
      })
    }
    const displayPlaceInfo = (place) => {
      const content = document.createElement('div')
      content.className = 'placeinfo'

      const name = document.createElement('p')
      name.className = 'name'
      name.textContent = place.place_name
      content.appendChild(name)

      const address1 = document.createElement('p')
      address1.className = 'address1'
      address1.textContent = place.road_address_name
      content.appendChild(address1)

      const address2 = document.createElement('p')
      address2.className = 'address2'
      address2.textContent = `(지번 : ${place.address_name})`
      content.appendChild(address2)

      const phoneOrSpan = place.phone ? `<address class="phone">${place.phone}</address>` : '<span>등록된 번호가 없습니다</span>'

      const phoneOrSpanElement = document.createElement('div')
      phoneOrSpanElement.innerHTML = phoneOrSpan
      content.appendChild(phoneOrSpanElement)

      const link = document.createElement('a')
      link.className = 'link'
      link.href = place.place_url
      link.textContent = '상세보기'
      content.appendChild(link)

      const closeButton = document.createElement('button')
      closeButton.className = 'close'
      closeButton.type = 'button'
      closeButton.onclick = () => {
        placeInfo.setMap(null)
      }
      content.appendChild(closeButton)

      placeInfo.setContent(content)
      placeInfo.setPosition(new window.kakao.maps.LatLng(place.y, place.x))
      placeInfo.setMap(kakaoMap)
    }
  }, [kakaoMap, placeInfo])

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
