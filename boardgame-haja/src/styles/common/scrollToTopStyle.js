import styled from 'styled-components'

import upImage from 'assets/image/up.svg'
import {BREAKPOINT_MOBILE, BREAKPOINT_TABLET, mediaQueris} from 'styles/mediaQuery'

export const Button = styled.button`
  width: 5rem;
  height: 5rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 50%;
  padding: 1rem;
  z-index: 1;
  background: url(${upImage}) no-repeat center/2.5rem white;
  ${mediaQueris(BREAKPOINT_TABLET)} {
    width: 4rem;
    height: 4rem;
    background-size: 2rem;
  }

  ${mediaQueris(BREAKPOINT_MOBILE)} {
    width: 3.5rem;
    height: 3.5rem;
    background-size: 1.5rem;
    bottom: 2rem;
    right: 2rem;
  }
`
