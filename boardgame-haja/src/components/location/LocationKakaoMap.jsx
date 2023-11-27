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

  //카카오맵 생성
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

  //현재위치 불러와서 지도 위치 변경
  useEffect(() => {
    if (!kakaoMap) return
    const getCurrent = async () => {
      try {
        kakaoMap.setMaxLevel(8)
        const currentLocation = await getCurrentLocation()
        kakaoMap.setCenter(new window.kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude))
        setCurrent(currentLocation)
      } catch (error) {
        kakaoMap.setCenter(new window.kakao.maps.LatLng(37.553881, 126.970488))
        setCurrent({latitude: 37.553881, longitude: 126.970488})
      }
    }
    getCurrent()
  }, [kakaoMap])

  //보드게임카페 위치 마커 생성
  useEffect(() => {
    if (!kakaoMap) return
    if (!current) return
    const place = new window.kakao.maps.services.Places()
    const placeImagesize = getplaceImageSize()

    //보드게임 검색
    place.keywordSearch(
      '보드게임',
      (data, status, _) => {
        if (status === window.kakao.maps.services.Status.OK) {
          data.sort((a, b) => a.distance - b.distance)
          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i])
          }
          kakaoMap.setCenter(new window.kakao.maps.LatLng(data[0].y, data[0].x))
          displayPlaceInfo(data[0])
          setNearest(data[0])
        }
      },
      {
        location: kakaoMap.getCenter(),
      }
    )

    //마커생성
    const displayMarker = (place) => {
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

    //마커 위 장소 정보 생성
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

      if (place.phone) {
        const phoneElement = document.createElement('address')
        phoneElement.className = 'phone'
        phoneElement.textContent = place.phone
        content.appendChild(phoneElement)
      } else {
        const noPhoneElement = document.createElement('span')
        noPhoneElement.textContent = '등록된 번호가 없습니다'
        content.appendChild(noPhoneElement)
      }

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

      //장소 정보 맵 영역 벗어날 시 지도 이동
      const {width: mapWidth} = kakaoMap.getNode().getBoundingClientRect()
      const {clientWidth: infoWidth, clientHeight: infoHeight} = placeInfo.getContent()
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
