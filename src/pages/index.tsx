import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import SearchBar from '../components/SearchBar'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Descubra qual o endereço desse CEP</h1>
      <SearchBar />
      <div className="a"></div>
    </Container>
  )
}

export default Home
