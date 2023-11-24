import {useEffect, useRef, useState} from 'react'

import * as S from 'styles/location/locationKakaoMapStyle'

import diceImage from 'assets/image/dice.svg'
import getCurrentLocation from 'utils/getCurrentLocation'
import {getplaceImageSize} from 'styles/mediaQuery'

const LocationKakaoMap = ({setNearest}) => {
  const mapRef = useRef(null)
  const [kakaoMap, setKakaoMap] = useState(null)
  const [placeInfo, setPlaceInfo] = useState(null)
  const [current, setCurrent] = useState(null)

  const handleCurrentLocationClick = async () => {
    if (current) {
      kakaoMap.setCenter(new window.kakao.maps.LatLng(current.latitude, current.longitude))
    } else {
      alert('Fail to load current location! Retry...')
    }
  }

  const handleZoomInClick = () => {
    kakaoMap.setLevel(kakaoMap.getLevel() - 1)
  }
  const handleZoomOutClick = () => {
    kakaoMap.setLevel(kakaoMap.getLevel() + 1)
  }
  const handleMapClick = (e) => {
    if (e.target.nodeName === 'svg' && placeInfo) {
      placeInfo.setMap(null)
    }
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
  }, [mapRef])

  useEffect(() => {
    if (!kakaoMap) return
    const getCurrent = async () => {
      try {
        kakaoMap.setMaxLevel(8)
        const currentLocation = await getCurrentLocation()
        kakaoMap.setCenter(new window.kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude))
        setCurrent(currentLocation)
      } catch (error) {
        console.error(error)
        kakaoMap.setCenter(new window.kakao.maps.LatLng(37.553881, 126.970488))
        setCurrent({latitude: 37.553881, longitude: 126.970488})
      }
    }
    getCurrent()
  }, [kakaoMap])

  useEffect(() => {
    if (!kakaoMap) return
    if (!current) return
    let nearest
    const place = new window.kakao.maps.services.Places()
    const placeImagesize = getplaceImageSize()

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
          displayPlaceInfo(nearest)
          setNearest(nearest)
        }
      },
      {
        location: kakaoMap.getCenter(),
      }
    )

    const displayMarker = (place) => {
      if (!nearest || parseInt(nearest.distance) > parseInt(place.distance)) nearest = place
      const imageSize = new window.kakao.maps.Size(placeImagesize, placeImagesize)
      const makerImage = new window.kakao.maps.MarkerImage(diceImage, imageSize)

      const marker = new window.kakao.maps.Marker({
        map: kakaoMap,
        position: new window.kakao.maps.LatLng(place.y, place.x),
        image: makerImage,
      })

      window.kakao.maps.event.addListener(marker, 'click', () => {
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
      const {width: mapWidth} = kakaoMap.getNode().getBoundingClientRect()
      const {width: infoWidth, height: infoHeight} = placeInfo.getContent().getBoundingClientRect()

      const {x, y} = kakaoMap.getProjection().containerPointFromCoords(placeInfo.getPosition())
      let moveX = 0,
        moveY = 0
      if (y - infoHeight - placeImagesize < 0) moveY = y - placeImagesize - 20 - infoHeight
      if (x < infoWidth / 2) moveX = x - infoWidth / 2 - 10
      else if (x + infoWidth / 2 > mapWidth) moveX = -mapWidth + x + infoWidth / 2 + 50
      kakaoMap.panBy(moveX, moveY)
    }
  }, [kakaoMap, placeInfo, setNearest, current])

  return (
    <S.Map
      id="map"
      ref={mapRef}
      onClick={handleMapClick}>
      <S.ControllContainer>
        <S.CurrentLocationButton
          type="button"
          onClick={handleCurrentLocationClick}></S.CurrentLocationButton>
        <S.ZoomInButton
          type="button"
          onClick={handleZoomInClick}></S.ZoomInButton>
        <S.ZoomOutButton
          type="button"
          onClick={handleZoomOutClick}></S.ZoomOutButton>
      </S.ControllContainer>
    </S.Map>
  )
}

export default LocationKakaoMap
