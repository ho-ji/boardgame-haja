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
`
const SearchItem = styled(Link)`
  padding: 0.4rem 0.4rem;
  &:hover {
    background: #f1f1f1;
  }
`

const Search = ({keyword}) => {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
                  {result.map((item) => {
                    return (
                      <SearchItem
                        to={`/detail/${item.id}`}
                        key={item.id}>
                        {item.name}
                        <span>{`(${item.yearpublished})`}</span>
                      </SearchItem>
                    )
                  })}
                </>
              ) : (
                <span>No BoardGame Found</span>
              )
            ) : (
              <Loading />
            )
          ) : (
            <span>No BoardGame Found</span>
          )}
        </Container>
      )}
    </>
  )
}

export default Search
