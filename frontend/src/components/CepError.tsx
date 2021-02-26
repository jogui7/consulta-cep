import React from 'react'

import { Container } from '../styles/components/CepError'
import Warning from '../assets/Warning.svg'

interface CepErrorProps {
  message: string
}

const CepError: React.FC<CepErrorProps> = ({ message }) => {
  return (
    <Container>
      <Warning />
      <p>{message}</p>
    </Container>
  )
}

export default CepError
