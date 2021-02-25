import fetch from 'node-fetch'
import AppError from '@shared/errors/AppError'
import { getRepository } from 'typeorm'

import Cep from '@modules/ceps/infra/typeorm/entities/Cep'

interface Request {
  cepNumber: string
}

class GetCepInfoService {
  public async execute({ cepNumber }: Request): Promise<Cep> {
    cepNumber = cepNumber.replace('-', '').replace('.', '')

    if (cepNumber.search(/[^\d]+/g) >= 0) {
      throw new AppError('Formato de CEP inválido')
    }

    if (cepNumber.length !== 8) {
      throw new AppError('Comprimento de CEP inválido')
    }

    const cepsRepository = getRepository(Cep)

    const cepAlreadyExists = await cepsRepository.findOne({ cep: cepNumber })

    if (cepAlreadyExists) {
      return cepAlreadyExists
    } else {
      const {
        bairro,
        cep,
        complemento,
        ddd,
        gia,
        ibge,
        localidade,
        logradouro,
        siafi,
        uf
      }: Cep = await fetch(`https://viacep.com.br/ws/${cepNumber}/json`)
        .then(response => response.json())
        .then(response => {
          if (response.erro === true) {
            throw new AppError('CEP inexistente')
          }

          return response
        })

      const cepData = cepsRepository.create({
        cep: cep.replace('-', ''),
        bairro,
        complemento,
        ddd,
        gia,
        ibge,
        localidade,
        logradouro,
        siafi,
        uf
      })

      await cepsRepository.save(cepData)

      return cepData
    }
  }
}

export default GetCepInfoService
