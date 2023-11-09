import styled from 'styled-components'
import parse from 'html-react-parser'

const Title = styled.h3`
  font-size: 3rem;
  font-weight: bold;
`
const Line = styled.hr`
  margin: 1rem 0 2rem 0;
  border: 1px dashed black;
`
const Content = styled.p`
  line-height: 1.5;
`
const DetailDescription = ({description}) => {
  return (
    <>
      <Title>Description</Title>
      <Line />
      {description && <Content>{parse(description.toString().replaceAll('&#10;', '<br/>'))}</Content>}
    </>
  )
}

export default DetailDescription
