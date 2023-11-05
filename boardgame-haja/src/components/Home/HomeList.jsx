import {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import HomeBoardGameCard from './HomeBoardGameCard'

const ListContainer = styled.main`
  display: grid;
  margin: 5rem 20rem 10rem 20rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
`

const HomeList = () => {
  const [gameList, setGameList] = useState([])

  const getBoardGameList = async (url) => {
    const xml2js = require('xml2js')
    const apiUrl = 'https://boardgamegeek.com/xmlapi2/hot?TYPE=boardgame'
    await axios
      .get(apiUrl)
      .then((response) => {
        const xmlData = response.data

        xml2js.parseString(xmlData, (err, result) => {
          if (err) {
            console.error('Error parsing XML:', err)
          } else {
            setGameList(result.items.item)
          }
        })
      })
      .catch((error) => {
        console.error('Error Axios', error)
      })
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