import {useEffect, useState} from 'react'
import styled from 'styled-components'

import {getSearchResultAPI} from 'api/api'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: aqua;
  width: 100%;
  left: 0;
  top: -22rem;
`

const Search = ({keyword}) => {
  const [result, setResult] = useState([])

  useEffect(() => {
    let timeoutID
    const getSearchResult = async () => {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }
      timeoutID = setTimeout(async () => {
        console.log('hi')
        try {
          const data = await getSearchResultAPI(keyword)
          setResult(data)
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
            result.map((item) => {
              return (
                <p key={item.id}>
                  {item.name}
                  <span>{item.yearpublished}</span>
                </p>
              )
            })
          ) : (
            <span>No BoardGame Found</span>
          )}
        </Container>
      )}
    </>
  )
}

export default Search
