import styled from 'styled-components'

const Container = styled.footer`
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
const GitHubLink = styled.a`
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

const Footer = () => {
  return (
    <Container>
      <p>This page is a site for portpolio with no commercial purpose.</p>
      <p>©2023 by yeji Jang. All rights reserved.</p>
      <GitHubLink href="https://www.github.com/ho-ji">Github</GitHubLink>
    </Container>
  )
}

export default Footer
