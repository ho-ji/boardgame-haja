import styled from 'styled-components'
import {BREAKPOINT_MOBILE, mediaQueris} from './mediaQuery'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - var(--header-height));
`
export const Image = styled.img`
  width: 10rem;
  margin-bottom: 1rem;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    width: 5rem;
  }
`
export const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    font-size: 2rem;
  }
`

export const HomeButton = styled.button`
  margin-top: 2rem;
  font-weight: bold;
  color: black;
  padding: 1rem 2rem;
  border-radius: 4px;
  background: black;
  color: white;
  border: 2px solid black;
  transition: background, color, 0.5s;
  &:hover {
    color: black;
    background: white;
  }
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    padding: 0.5rem 1rem;
  }
`
