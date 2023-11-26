import {useEffect, useState} from 'react'
import * as S from 'styles/common/scrollToTopStyle'

const SrcollToTop = () => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    window.scrollY > 500 ? setShow(true) : setShow(false)
  }

  const handleScrollToTopClick = () => {
    const scrollStep = window.scrollY / 20
    const scrollInterval = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, -scrollStep)
        requestAnimationFrame(scrollInterval)
      }
    }
    requestAnimationFrame(scrollInterval)
  }

  useEffect(() => {
    if (!navigator.userAgent.includes('SamsungBrowser')) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {show && (
        <>
          <S.Button onClick={handleScrollToTopClick}>
            <span className="a11y-hidden">scroll to top</span>
          </S.Button>
          <p>{navigator.userAgent}</p>
        </>
      )}
    </>
  )
}

export default SrcollToTop
