import React from 'react'

import { Container } from '../styles/components/Sign'

interface SignProps {
  prefix: string
  street: string
  district: string
  city: string
}

const Sign: React.FC<SignProps> = ({ prefix, street, district, city }) => {
  return (
    <Container>
      <div className="upperContainer">
        <p>{prefix}</p>
        <h1>{street}</h1>
      </div>
      <hr />
      <div className="lowerContainer">
        <p>{district}</p>
        <p>{city}</p>
      </div>
    </Container>
  )
}

export default Sign
