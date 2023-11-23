import {useEffect, useState} from 'react'

import * as S from 'styles/common/SearchStyle'

import {getSearchResultAPI} from 'api/api'
import Loading from './Loading'

const Search = ({keyword, resetInput}) => {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    let timeoutID
    const getSearchResult = async () => {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }
      timeoutID = setTimeout(async () => {
        setIsLoading(false)
        try {
          const data = await getSearchResultAPI(keyword)
          setResult(data)
          setIsLoading(true)
        } catch (error) {
          console.error(error)
        }
      }, 100)
    }
    getSearchResult()

    return () => {
      clearTimeout(timeoutID)
    }
  }, [keyword])

  return (
    <>
      {keyword.length && (
        <S.Container>
          {result ? (
            isLoading ? (
              result.length !== 0 ? (
                <>
                  {result.slice((page - 1) * 10, page * 10).map((item) => {
                    return (
                      <S.SearchItem
                        to={`/detail/${item.id}`}
                        key={item.id}
                        onClick={resetInput}>
                        {item.name}
                        <span>{`(${item.yearpublished})`}</span>
                      </S.SearchItem>
                    )
                  })}
                  {result.length > 10 && (
                    <S.PageNumber>
                      {page > 1 ? (
                        <button
                          type="button"
                          onClick={() => setPage(page - 1)}>
                          {'<'}
                        </button>
                      ) : (
                        <button disabled>{'<'}</button>
                      )}
                      {Array.from({length: 5}, (_, index) => {
                        const pageNumber = parseInt(Math.floor((page - 1) / 5)) * 5 + index + 1
                        if (pageNumber <= Math.ceil(result.length / 10))
                          return (
                            <S.PageButton
                              type="button"
                              key={pageNumber}
                              className={page === pageNumber && 'active'}
                              onClick={() => setPage(pageNumber)}>
                              {pageNumber}
                            </S.PageButton>
                          )
                        return null
                      })}
                      {page < Math.ceil(result.length / 10) ? (
                        <button
                          type="button"
                          onClick={() => setPage(page + 1)}>
                          {'>'}
                        </button>
                      ) : (
                        <button disabled>{'>'}</button>
                      )}
                    </S.PageNumber>
                  )}
                </>
              ) : (
                <S.NoResult>No BoardGame Found</S.NoResult>
              )
            ) : (
              <Loading customheight={'10rem'} />
            )
          ) : (
            <S.NoResult>No BoardGame Found</S.NoResult>
          )}
        </S.Container>
      )}
    </>
  )
}

export default Search
