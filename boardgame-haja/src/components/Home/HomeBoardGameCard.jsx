import {Link} from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  padding: 1rem;
  &:hover {
    padding: 0;
  }
  position: relative;
`
const Ranking = styled.p`
  position: absolute;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 0.5rem;
`

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`
const CardName = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const CardYear = styled.p`
  text-align: center;
`

const HomeBoardGameCard = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <CardContainer>
        <Ranking>
          {props.ranking}
          <span className="a11y-hidden">place</span>
        </Ranking>
        <CardImage
          src={props.thumbnail}
          alt="image"
        />
        <CardName>
          <span className="a11y-hidden">Name is </span>
          {props.name}
        </CardName>
        {props.year && (
          <CardYear>
            ({props.year})<span className="a11y-hidden"> published</span>
          </CardYear>
        )}
      </CardContainer>
    </Link>
  )
}
export default HomeBoardGameCard
