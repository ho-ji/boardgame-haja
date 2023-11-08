import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

import {getDetailInfoAPI} from 'api'

const Container = styled.main`
  background: green;
  margin: 10rem 30rem;
`
const Description = styled.p``
const Image = styled.img`
  width: 5rem;
`
const PlayerCount = styled.p``
const PlayingTime = styled.p``
const Age = styled.p``
const Name = styled.p``
const Year = styled.p``

const descriptionFormat = (text) => {
  const decodedElement = document.createElement('p')
  decodedElement.innerHTML = text
  return decodedElement.textContent
}

const DetailInfo = () => {
  const params = useParams()
  const [info, setInfo] = useState(false)

  useEffect(() => {
    const getDetailInfo = async () => {
      try {
        const data = await getDetailInfoAPI(params.id)
        setInfo(data)
      } catch (error) {
        console.error(error)
      }
    }
    getDetailInfo()
  }, [params.id])

  return (
    <Container>
      {info ? (
        <>
          <Image src={info.image} />
          <div>
            <Name>{info.name}</Name>
            <PlayerCount>{`${info.minplayers}~${info.maxplayers}`}</PlayerCount>
            <PlayingTime>{`${info.minplaytime}~${info.maxplaytime}`}</PlayingTime>
            <Age>{`${info.minage}+`}</Age>
            <Year>{info.yearpublished}</Year>
            <Description>{descriptionFormat(info.description)}</Description>
          </div>
        </>
      ) : (
        <span>Loading</span>
      )}
    </Container>
  )
}

export default DetailInfo
