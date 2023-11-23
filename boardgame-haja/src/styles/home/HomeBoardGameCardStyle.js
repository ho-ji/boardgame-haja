import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  padding: 1rem;
  &:hover {
    padding: 0;
  }
  position: relative;
`
export const Ranking = styled.p`
  position: absolute;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 0.5rem;
`

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`
export const CardName = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const CardYear = styled.p`
  text-align: center;
`
