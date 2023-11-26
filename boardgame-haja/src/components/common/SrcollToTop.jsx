import {useEffect, useState} from 'react'
import * as S from 'styles/common/scrollToTopStyle'

const SrcollToTop = () => {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    window.scrollY > 500 ? setShow(true) : setShow(false)
  }

  const handleScrollToTopClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {show && (
        <S.Button onClick={handleScrollToTopClick}>
          <span className="a11y-hidden">scroll to top</span>
        </S.Button>
      )}
    </>
  )
}

export default SrcollToTop
