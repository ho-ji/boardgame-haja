import {useNavigate} from 'react-router-dom'

import * as S from 'styles/NotFoundStyle'

import Header from 'components/common/Header'
import imageBrokenLink from 'assets/image/brokenlink.svg'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <S.Container>
        <S.Image
          src={imageBrokenLink}
          alt="404"
        />
        <S.Title>It appears we're missing some bits…</S.Title>
        <p>Sorry, the page you're looking for is missing or does not exist.</p>
        <S.HomeButton
          type="button"
          onClick={() => navigate('/')}>
          Take Me Home
        </S.HomeButton>
      </S.Container>
    </>
  )
}

export default NotFound
