import React from 'react'

import { Container } from '../styles/components/Sign'

const Sign: React.FC = () => {
  return (
    <Container>
      <div className="upperContainer">
        <p>Rua</p>
        <h1>Comendador Correia Júnior</h1>
      </div>
      <hr />
      <div className="lowerContainer">
        <p>Jardim das Américas</p>
        <p>Curitiba</p>
      </div>
    </Container>
  )
}

export default Sign
