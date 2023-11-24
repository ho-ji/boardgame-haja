import styled from 'styled-components'
import {BREAKPOINT_MOBILE, mediaQueris} from 'styles/mediaQuery'

export const Container = styled.main`
  max-width: 50rem;
  padding: 1rem;
  margin: 10rem auto;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    margin: 2rem auto;
  }
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
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    font-size: 2rem;
  }
`
export const Year = styled.span`
  font-weight: 500;
  font-size: 2rem;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    font-size: 1.6rem;
  }
`
export const Image = styled.img`
  width: 80%;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    width: 60%;
  }
`
export const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.8rem;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    font-size: 1.4rem;
  }
`
export const Line = styled.hr`
  width: 100%;
  margin: 3rem 0;
  border: 1px solid black;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    margin: 1.5rem 0;
  }
`
