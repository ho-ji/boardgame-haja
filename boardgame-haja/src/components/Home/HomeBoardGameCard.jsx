import {Link} from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 35rem;
  height: 50rem;
  border: 1px solid #bdbdbd;
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
`

const HomeBoardGameCard = (props) => {
  return (
    <CardContainer>
      <CardLink to={''}>
        <CardImage
          src={props.thumbnail}
          alt={props.name + '이미지'}
        />
      </CardLink>
      <CardName>
        {props.name} {props.year && `(${props.year})`}
      </CardName>
    </CardContainer>
  )
}
export default HomeBoardGameCard
