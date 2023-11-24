import {Link} from 'react-router-dom'

import * as S from 'styles/home/homeBoardGameCardStyle'

const HomeBoardGameCard = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <S.CardContainer>
        <S.Ranking>
          {props.ranking}
          <span className="a11y-hidden">place</span>
        </S.Ranking>
        <S.CardImage
          src={props.thumbnail}
          alt="image"
        />
        <S.CardName>
          <span className="a11y-hidden">Name is </span>
          {props.name}
        </S.CardName>
        {props.year && (
          <S.CardYear>
            ({props.year})<span className="a11y-hidden"> published</span>
          </S.CardYear>
        )}
      </S.CardContainer>
    </Link>
  )
}
export default HomeBoardGameCard
