import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  margin-top: 5rem;
  font-size: 4rem;
  font-weight: bold;
`

export const ListContainer = styled.main`
  display: grid;
  margin: 5rem 20rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
`
