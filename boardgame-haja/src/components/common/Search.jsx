import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {getSearchResultAPI} from 'api/api'
import Loading from './Loading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: white;
  width: 100%;
  left: 0;
  top: 5rem;
  border: 1px solid #a8a8a8;
  border-radius: 2px;
  overflow-y: auto;
  max-height: 60vh;
`
const SearchItem = styled(Link)`
  padding: 0.4rem 0.4rem;
  &:hover {
    background: #f1f1f1;
  }
`
const NoResult = styled.p`
  text-align: center;
  padding: 1rem;
  font-size: 1.4rem;
  text-decoration: underline;
`

const PageNumber = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`
const PageButton = styled.button`
  color: #c4c4c4;
  &:hover {
    color: black;
  }
  &.active {
    color: black;
    text-decoration: underline;
  }
`

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
        <Container>
          {result ? (
            isLoading ? (
              result.length !== 0 ? (
                <>
                  {result.slice((page - 1) * 10, page * 10).map((item) => {
                    return (
                      <SearchItem
                        to={`/detail/${item.id}`}
                        key={item.id}
                        onClick={resetInput}>
                        {item.name}
                        <span>{`(${item.yearpublished})`}</span>
                      </SearchItem>
                    )
                  })}
                  {result.length > 10 && (
                    <PageNumber>
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
                            <PageButton
                              type="button"
                              key={pageNumber}
                              className={page === pageNumber && 'active'}
                              onClick={() => setPage(pageNumber)}>
                              {pageNumber}
                            </PageButton>
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
                    </PageNumber>
                  )}
                </>
              ) : (
                <NoResult>No BoardGame Found</NoResult>
              )
            ) : (
              <Loading customheight={'10rem'} />
            )
          ) : (
            <NoResult>No BoardGame Found</NoResult>
          )}
        </Container>
      )}
    </>
  )
}

export default Search
