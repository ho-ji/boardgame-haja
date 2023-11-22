let currentLocation

const handleSuccess = (pos) => {
  const {latitude, longitude} = pos.coords
  currentLocation = {latitude: latitude, longitude: longitude}
}

const getCurrentLocation = () => {
  const {geolocation} = navigator
  if (!geolocation) {
    return
  }

  geolocation.getCurrentPosition(handleSuccess, null, {
    enableHighAccuracy: true,
    timeout: 2000 * 60 * 1,
    maximumAge: 1000 * 3600 * 24,
  })

  return currentLocation
}

export default getCurrentLocation
