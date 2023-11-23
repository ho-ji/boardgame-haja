import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: white;
  width: 100%;
  left: 0;
  top: 5rem;
  border: 1px solid #a8a8a8;
  border-radius: 2px;
  overflow-y: auto;
  max-height: 60vh;
`
export const SearchItem = styled(Link)`
  padding: 0.4rem 0.4rem;
  &:hover {
    background: #f1f1f1;
  }
`
export const NoResult = styled.p`
  text-align: center;
  padding: 1rem;
  font-size: 1.4rem;
  text-decoration: underline;
`

export const PageNumber = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`
export const PageButton = styled.button`
  color: #c4c4c4;
  &:hover {
    color: black;
  }
  &.active {
    color: black;
    text-decoration: underline;
  }
`
