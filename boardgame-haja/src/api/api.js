import axios from 'axios'

export const getJSONToXML = async (url) => {
  const xml2js = require('xml2js')
  const apiUrl = `https://boardgamegeek.com/xmlapi2/${url}`
  let data
  await axios
    .get(apiUrl)
    .then((response) => {
      const xmlData = response.data

      xml2js.parseString(xmlData, (error, result) => {
        if (error) {
          console.error('Error parsing XML:', error)
        } else {
          data = result
        }
      })
    })
    .catch((error) => {
      console.error('Error Axios', error)
    })
  return data
}

export const getBoardGameListAPI = async () => {
  const result = await getJSONToXML('/hot?TYPE=boardgame')
  return result.items.item
}

export const getDetailInfoAPI = async (id) => {
  const data = await getJSONToXML(`/thing?id=${id}`)
  const tempData = data.items.item[0]
  const result = {
    description: tempData.description,
    image: tempData.image,
    maxplayers: tempData.maxplayers?.[0]?.$.value,
    minplayers: tempData.minplayers?.[0]?.$.value,
    maxplaytime: tempData.maxplaytime?.[0]?.$.value,
    minplaytime: tempData.minplaytime?.[0]?.$.value,
    minage: tempData.minage?.[0]?.$.value,
    name: tempData.name?.[0]?.$.value,
    yearpublished: tempData.yearpublished?.[0]?.$.value,
  }
  return result
}

export const getSearchResultAPI = async (name) => {
  const data = await getJSONToXML(`/search?query=${name}&&type=boardgame`)
  return data.items.item.map((v) => [v.name[0]?.$.value, v.yearpublished?.[0].$.value])
}
