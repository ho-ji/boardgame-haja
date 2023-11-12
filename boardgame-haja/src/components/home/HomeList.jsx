import {useEffect, useState} from 'react'
import styled from 'styled-components'

import HomeBoardGameCard from './HomeBoardGameCard'
import {getBoardGameListAPI} from 'api'
import Loading from 'components/common/Loading'

const Title = styled.h2`
  text-align: center;
  margin-top: 5rem;
  font-size: 4rem;
  font-weight: bold;
`

const ListContainer = styled.main`
  display: grid;
  margin: 5rem 20rem;
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
    <>
      <Title>
        <span className="a11y-hidden">Board Game </span>🔥Hot 50 <span className="a11y-hidden">List</span>
      </Title>
      {gameList.length ? (
        <ListContainer>
          {gameList.map((game, i) => {
            return (
              <HomeBoardGameCard
                key={game.$.id}
                id={game.$.id}
                name={game.name[0].$.value}
                thumbnail={game.thumbnail[0].$.value}
                year={game.yearpublished[0].$.value}
                ranking={i + 1}
              />
            )
          })}
        </ListContainer>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default HomeList
