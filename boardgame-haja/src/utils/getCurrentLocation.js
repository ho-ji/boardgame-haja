let currentLocation = null

const handleSuccess = (pos) => {
  const {latitude, longitude} = pos.coords
  currentLocation = {latitude, longitude}
}

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    const {geolocation} = navigator
    if (!geolocation) {
      reject(new Error('Geolocation is not supported'))
      return
    }

    geolocation.getCurrentPosition(
      (position) => {
        handleSuccess(position)
        resolve(currentLocation)
      },
      (error) => {
        reject(error) // 오류 처리
      },
      {
        enableHighAccuracy: true,
        timeout: 2000 * 60 * 1,
        maximumAge: 1000 * 3600 * 24,
      }
    )
  })
}

export default getCurrentLocation
