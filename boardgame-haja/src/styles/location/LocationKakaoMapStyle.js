import styled from 'styled-components'

import closeImage from 'assets/image/close.svg'
import currentImage from 'assets/image/current.svg'
import zoomInImage from 'assets/image/zoomin.svg'
import zoomOutImage from 'assets/image/zoomout.svg'

export const Map = styled.div`
  width: 90rem;
  height: 60rem;
  position: relative;
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

export const ControllContainer = styled.div`
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
export const ZoomOutButton = styled.button`
  background: url(${zoomOutImage}) no-repeat center;
`

export const ZoomInButton = styled.button`
  background: url(${zoomInImage}) no-repeat center;
`

export const CurrentLocationButton = styled.button`
  margin-bottom: 2rem;
  background: url(${currentImage}) no-repeat center;
`
