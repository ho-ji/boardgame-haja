import {useEffect} from 'react'

const useScreenSize = () => {
  useEffect(() => {
    const setScreentSize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    setScreentSize()
    window.addEventListener('resize', setScreentSize)
    return () => {
      window.removeEventListener('resize', setScreentSize)
    }
  }, [])
}

export default useScreenSize
