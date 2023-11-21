const location = {latitude: 0, longitude: 0}

const handleSuccess = (pos) => {
  const {latitude, longitude} = pos.coords
  location.latitude = latitude
  location.longitude = longitude
}

const handleError = () => {}

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

  return location
}

export default getCurrentLocation
