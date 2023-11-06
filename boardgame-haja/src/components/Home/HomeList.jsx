import {useEffect, useState} from 'react'
import styled from 'styled-components'

import HomeBoardGameCard from './HomeBoardGameCard'
import {getBoardGameListAPI} from 'api'

const ListContainer = styled.main`
  display: grid;
  margin: 5rem 20rem 10rem 20rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
`

const HomeList = () => {
  const [gameList, setGameList] = useState([])

  const getBoardGameList = async () => {
    try {
      const boardGameList = await getBoardGameListAPI()
      setGameList(boardGameList)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    getBoardGameList()
  }, [])

  return (
    <ListContainer>
      <h2 className="a11y-hidden">BoardGame Hot 50 List</h2>
      {gameList.length ? (
        gameList.map((game) => {
          return (
            <HomeBoardGameCard
              key={game.$.id}
              id={game.$.id}
              name={game.name[0].$.value}
              thumbnail={game.thumbnail[0].$.value}
              year={game.yearpublished[0].$.value}
            />
          )
        })
      ) : (
        <span>Loading</span>
      )}
    </ListContainer>
  )
}

export default HomeList
