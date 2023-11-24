import styled from 'styled-components'
import {BREAKPOINT_MOBILE, mediaQueris} from 'styles/mediaQuery'

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    font-size: 2rem;
  }
`
export const Line = styled.hr`
  margin: 1rem 0 2rem 0;
  border: 1px dashed black;
  ${mediaQueris(BREAKPOINT_MOBILE)} {
    margin: 1rem 0 1rem 0;
  }
`
export const Content = styled.p`
  line-height: 1.5;
  white-space: pre-wrap;
`
