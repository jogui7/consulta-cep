import React, { useState } from 'react'

import { Container } from '../styles/components/SearchBar'
import Search from '../assets/Search.svg'

interface SearchBarProps {
  action(cep: string): Promise<void>
}

const SearchBar: React.FC<SearchBarProps> = ({ action }) => {
  const [cep, setCep] = useState('')
  const [style, setStyle] = useState('normal')

  return (
    <Container searchBarStyle={style}>
      <form
        onSubmit={async e => {
          e.preventDefault()
          if (cep === '') {
            setStyle('error')
          } else {
            await action(cep)
          }
        }}
      >
        <input
          type="text"
          placeholder="Digite um CEP"
          value={cep}
          onChange={event => {
            setStyle('normal')
            setCep(event.target.value)
          }}
        />
        <button type="submit">
          <Search />
        </button>
      </form>
    </Container>
  )
}

export default SearchBar
