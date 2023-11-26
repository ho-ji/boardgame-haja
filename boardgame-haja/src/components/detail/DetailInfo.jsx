import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

import * as S from 'styles/detail/detailInfoStyle'

import {getDetailInfoAPI} from 'api/api'
import DetailDescription from './DetailDescription'
import Loading from 'components/common/Loading'

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
    <S.Container>
      {info ? (
        <>
          <S.DetailContainer>
            <S.Name>
              {info.name}
              <S.Year>{`(${info.yearpublished})`}</S.Year>{' '}
            </S.Name>
            <S.Image
              src={info.image}
              decoding="async"
            />
            <S.Line />
            <S.Information>
              <p>{`👤 ${formatString(info.minplayers, info.maxplayers)} Players`}</p>
              <p>{`⏰ ${formatString(info.minplaytime, info.maxplaytime)} Min`}</p>
              <p>{`📅 Age ${info.minage}+`}</p>
            </S.Information>
            <S.Line />
          </S.DetailContainer>
          <DetailDescription description={info.description} />
        </>
      ) : (
        <Loading />
      )}
    </S.Container>
  )
}

export default DetailInfo
