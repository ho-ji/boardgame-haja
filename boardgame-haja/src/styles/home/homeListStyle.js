import styled from 'styled-components'
import {BREAKPOINT_MOBILE, BREAKPOINT_TABLET, mediaQueris} from 'styles/mediaQuery'

export const Container = styled.main`
  max-width: 180rem;
  margin: 0 auto;
`

export const Title = styled.h2`
  text-align: center;
  margin-top: 5rem;
  font-size: 4rem;
  font-weight: bold;
  ${mediaQueris(BREAKPOINT_TABLET)} {
    margin-top: 3rem;
    font-size: 3rem;
  }
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    margin-top: 2rem;
    font-size: 2rem;
  }
`

export const ListContainer = styled.main`
  display: grid;
  margin: 5rem 20rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
  z-index: 100;
  ${mediaQueris(BREAKPOINT_TABLET)} {
    margin: 3rem 10rem;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    margin: 1rem;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`
