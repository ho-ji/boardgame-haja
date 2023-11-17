import styled from 'styled-components'
import he from 'he'

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
  white-space: pre-wrap;
`

const DetailDescription = ({description}) => {
  return (
    <>
      <Title>Description</Title>
      <Line />
      {description && <Content>{he.decode(description.toString())}</Content>}
    </>
  )
}

export default DetailDescription
