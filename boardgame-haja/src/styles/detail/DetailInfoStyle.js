import styled from 'styled-components'

export const Container = styled.main`
  max-width: 50rem;
  padding: 1rem;
  margin: 10rem auto;
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Name = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`
export const Year = styled.span`
  font-weight: 500;
  font-size: 2rem;
`
export const Image = styled.img`
  width: 80%;
`
export const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.8rem;
`
export const Line = styled.hr`
  width: 100%;
  margin: 3rem 0;
  border: 1px solid black;
`
