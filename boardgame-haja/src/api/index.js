import axios from 'axios'

export const getJSONToXML = async (url) => {
  const xml2js = require('xml2js')
  const apiUrl = `https://boardgamegeek.com/xmlapi2/${url}`
  let data
  await axios
    .get(apiUrl)
    .then((response) => {
      const xmlData = response.data

      xml2js.parseString(xmlData, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err)
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
