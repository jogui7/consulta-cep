import React from 'react'

import { Container } from '../styles/components/SearchBar'
import Search from '../assets/Search.svg'

const SearchBar: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Digite um CEP" />
      <Search />
    </Container>
  )
}

export default SearchBar
