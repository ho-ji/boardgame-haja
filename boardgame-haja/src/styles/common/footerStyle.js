import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--footer-height);
  background: black;
  color: white;
  font-size: 1.8rem;
  text-align: center;
`
export const GitHubLink = styled.a`
  margin-top: 2rem;
  font-weight: bold;
  color: black;
  padding: 0.5rem 2rem;
  border-radius: 4px;
  background: white;
  border: 2px solid white;
  transition: background, color, 0.5s;
  &:hover {
    color: white;
    background: black;
  }
`
