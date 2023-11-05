import {Link} from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  padding: 1rem;
  &:hover {
    padding: 0;
  }
`
const CardLink = styled(Link)``
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
  margin-top: 0.5rem;
  text-align: center;
`

const HomeBoardGameCard = (props) => {
  return (
    <CardLink to={''}>
      <CardContainer>
        <CardImage
          src={props.thumbnail}
          alt={props.name + '이미지'}
        />
        <CardName>{props.name}</CardName>
        {props.year && <CardYear>({props.year})</CardYear>}
      </CardContainer>
    </CardLink>
  )
}
export default HomeBoardGameCard
