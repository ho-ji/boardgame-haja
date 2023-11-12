import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

import {getDetailInfoAPI} from 'api'
import DetailDescription from './DetailDescription'
import Loading from 'components/common/Loading'

const Container = styled.main`
  max-width: 50rem;
  padding: 1rem;
  margin: 10rem auto;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Name = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`
const Year = styled.span`
  font-weight: 500;
  font-size: 2rem;
`
const Image = styled.img`
  width: 80%;
`
const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.8rem;
`
const Line = styled.hr`
  width: 100%;
  margin: 3rem 0;
  border: 1px solid black;
`
const formatString = (str1, str2) => {
  return str1 === str2 ? str1 : `${str1}~${str2}`
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
    window.scrollTo(0, 0)
  }, [params.id])

  return (
    <Container>
      {info ? (
        <>
          <DetailContainer>
            <Name>
              {info.name}
              <Year>{`(${info.yearpublished})`}</Year>{' '}
            </Name>
            <Image src={info.image} />
            <Line />
            <Information>
              <p>{`👤 ${formatString(info.minplayers, info.maxplayers)} Players`}</p>
              <p>{`⏰ ${formatString(info.minplaytime, info.maxplaytime)} Min`}</p>
              <p>{`📅 Age ${info.minage}+`}</p>
            </Information>
            <Line />
          </DetailContainer>
          <DetailDescription description={info.description} />
        </>
      ) : (
        <Loading />
      )}
    </Container>
  )
}

export default DetailInfo
