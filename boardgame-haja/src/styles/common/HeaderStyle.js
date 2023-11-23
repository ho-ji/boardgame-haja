import styled from 'styled-components'

import imageDelete from 'assets/image/delete.svg'
import imageSearch from 'assets/image/search.svg'
import imageLocation from 'assets/image/location.svg'
import {Link} from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  padding: 0 1.2rem;
  background-color: white;
  border-bottom: 2px dashed black;
  position: sticky;
  top: 0;
  z-index: 100;
`
export const Title = styled.p`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 0.7;
  text-align: left;
`
export const SubTitle = styled.p`
  font-size: 1.7rem;
  text-align: left;
`
export const Menu = styled.div`
  display: flex;
  height: 100%;
  gap: 2rem;
  align-items: center;
`

export const SearchContainer = styled.div`
  width: 20rem;
  height: 4rem;
  padding: 0 2.5rem;
  position: relative;
  border-bottom: 1px solid black;
  &:hover,
  &:focus {
    border-bottom: 2px solid black;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1.8rem;
    height: 1.8rem;
    background: url(${imageSearch}) no-repeat center / contain;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  &::placeholder {
    color: black;
  }
`
export const DeleteInputButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  padding: 1rem;
  width: 2.2rem;
  height: 2.2rem;
  background: url(${imageDelete}) no-repeat center / contain;
`
export const Location = styled(Link)`
  background: url(${imageLocation}) no-repeat left / 2rem 2rem;
  padding: 1rem 0 1rem 2.3rem;
  font-size: 1.6rem;
  &:hover {
    color: gray;
  }
`
