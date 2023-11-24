import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
`

export const NearestName = styled.p`
  font-size: 3rem;
  font-weight: bold;
  > strong {
    font-size: 3.5rem;
  }
`
export const Distance = styled.span`
  font-size: 2.4rem;
  color: #555;
  margin-bottom: 3rem;
  > strong {
    text-decoration: underline;
  }
`
