import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--header-height));
`
export const Image = styled.img`
  width: 10rem;
  margin-bottom: 1rem;
`
export const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
`

export const HomeButton = styled.button`
  margin-top: 2rem;
  font-weight: bold;
  color: black;
  padding: 1% 2rem;
  border-radius: 4px;
  background: black;
  color: white;
  border: 2px solid black;
  transition: background, color, 0.5s;
  &:hover {
    color: black;
    background: white;
  }
`
