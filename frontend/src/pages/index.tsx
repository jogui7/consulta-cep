import React, { useState } from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import SearchBar from '../components/SearchBar'
import Sign from '../components/Sign'

const Home: React.FC = () => {
  const [prefix, setPrefix] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [isOk, setIsOk] = useState(null)
  let resultContent = null

  async function getCepData(cep: string): Promise<void> {
    const response = await fetch(
      `http://localhost:3333/ceps/${cep}`
    ).then(response => response.json())

    if (response.status) {
      setIsOk(false)
    } else {
      const logradouro = response.logradouro
      const prefix = logradouro.split(' ')[0]
      const streetStartIndex = logradouro.indexOf(' ')
      const street = logradouro.slice(streetStartIndex, logradouro.length)

      setPrefix(prefix)
      setStreet(street)
      setDistrict(response.bairro)
      setCity(response.localidade)

      setIsOk(true)
    }
  }

  if (isOk === true) {
    resultContent = (
      <Sign prefix={prefix} street={street} district={district} city={city} />
    )
  } else if (isOk === false) {
    resultContent = (
      <Sign prefix="erro" street="erro" district="erro" city="erro" />
    )
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Descubra qual o endereço desse CEP</h1>
      <SearchBar action={getCepData} />
      <div className="resultContainer">{resultContent}</div>
    </Container>
  )
}

export default Home
