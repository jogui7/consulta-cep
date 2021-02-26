import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import SearchBar from '../components/SearchBar'
import Sign from '../components/Sign'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Descubra qual o endereço desse CEP</h1>
      <SearchBar />
      <div className="resultContainer">
        <Sign />
      </div>
    </Container>
  )
}

export default Home
