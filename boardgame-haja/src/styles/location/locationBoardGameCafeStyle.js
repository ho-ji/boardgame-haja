import styled from 'styled-components'
import {BREAKPOINT_MOBILE, BREAKPOINT_TABLET, mediaQueris} from 'styles/mediaQuery'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
  ${mediaQueris(BREAKPOINT_TABLET)} {
    margin: 8rem 0;
  }
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    margin: 3rem 1rem;
  }
`

export const NearestName = styled.p`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  > strong {
    font-size: 3.5rem;
  }
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    font-size: 1.8rem;
    > strong {
      font-size: 2rem;
    }
  }
`
export const Distance = styled.span`
  font-size: 2.4rem;
  color: #555;
  margin-bottom: 3rem;
  > strong {
    text-decoration: underline;
  }
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`
