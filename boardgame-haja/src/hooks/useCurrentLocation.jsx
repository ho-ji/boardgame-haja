import {useState, useEffect} from 'react'

const useCurrentLocation = () => {
  const [location, setLocation] = useState()
  const [error, setError] = useState()
  const handleSuccess = (pos) => {
    const {latitude, longitude} = pos.coords
    setLocation({
      latitude,
      longitude,
    })
  }

  const handleError = (error) => {
    setError(error.message)
  }

  useEffect(() => {
    const {geolocation} = navigator
    if (!geolocation) {
      setError('Not supported.')
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      timeout: 1000 * 60 * 1,
      maximumAge: 1000 * 3600 * 24,
    })
  }, [])

  return {location, error}
}

export default useCurrentLocation
