let currentLocation
let error

const handleSuccess = (pos) => {
  const {latitude, longitude} = pos.coords
  currentLocation = {latitude: latitude, longitude: longitude}
}

const handleError = (err) => {
  error = err.message
}

const getCurrentLocation = () => {
  const {geolocation} = navigator
  if (!geolocation) {
    return
  }

  geolocation.getCurrentPosition(handleSuccess, handleError, {
    enableHighAccuracy: true,
    timeout: 1000 * 60 * 1,
    maximumAge: 1000 * 3600 * 24,
  })

  return {currentLocation, error}
}

export default getCurrentLocation
