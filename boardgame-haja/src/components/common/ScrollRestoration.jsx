import {throttle} from 'lodash'
import {useEffect} from 'react'
import {createBrowserHistory} from 'history'

const ScrollRestoration = () => {
  const history = createBrowserHistory()
  useEffect(() => {
    const unlisten = history.listen(({location}) => {
      console.log(location)
      const scrollPosition = Number.parseInt(sessionStorage.getItem(`scroll${location.pathname}`), 10)
      if (scrollPosition) {
        setTimeout(() => {
          window.scrollTo(0, scrollPosition)
          console.log(scrollPosition, window.scrollY)
        }, 100)
      }
    })
    return () => {
      unlisten()
    }
  }, [history])
  useEffect(() => {
    const handleScroll = throttle((e) => {
      sessionStorage.setItem(`scroll${window.location.pathname}`, window.scrollY)
    }, 500)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default ScrollRestoration
