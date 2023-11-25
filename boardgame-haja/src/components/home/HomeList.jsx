import {useEffect, useState} from 'react'

import * as S from 'styles/home/homeListStyle'

import {getBoardGameListAPI} from 'api/api'
import HomeBoardGameCard from './HomeBoardGameCard'
import Loading from 'components/common/Loading'

const HomeList = () => {
  const [gameList, setGameList] = useState([])

  const getBoardGameList = async () => {
    try {
      const boardGameList = await getBoardGameListAPI()
      setGameList(boardGameList)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getBoardGameList()
  }, [])

  return (
    <main>
      <S.Title>
        <span className="a11y-hidden">Board Game </span>🔥Hot 50 <span className="a11y-hidden">List</span>
      </S.Title>
      {gameList.length ? (
        <S.ListContainer>
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
        </S.ListContainer>
      ) : (
        <Loading />
      )}
    </main>
  )
}

export default HomeList
