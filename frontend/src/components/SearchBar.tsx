import React, { useState } from 'react'

import { Container } from '../styles/components/SearchBar'
import Search from '../assets/Search.svg'
import { resolveNaptr } from 'dns'

interface SearchBarProps {
  action(cep: string): Promise<void>
  color: string
}

const SearchBar: React.FC<SearchBarProps> = ({ action, color }) => {
  const [cep, setCep] = useState('')

  return (
    <Container>
      <form
        onSubmit={async e => {
          e.preventDefault()
          if (cep === '') {
            setCep('Digite um CEP!')
            color = 'red'
          } else {
            await action(cep)
          }
        }}
      >
        <input
          type="text"
          placeholder="Digite um CEP"
          value={cep}
          onChange={event => setCep(event.target.value)}
        />
        <button type="submit">
          <Search />
        </button>
      </form>
    </Container>
  )
}

export default SearchBar
