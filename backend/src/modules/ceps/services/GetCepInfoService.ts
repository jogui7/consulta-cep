import fetch from 'node-fetch'
import AppError from '@shared/errors/AppError'

import Cep from '@modules/ceps/infra/typeorm/entities/Cep'
import ICepsRepository from '@modules/ceps/repositories/ICepsRepository'

import { inject, injectable } from 'tsyringe'

interface Request {
  cepNumber: string
}

@injectable()
class GetCepInfoService {
  constructor(
    @inject('CepsRepository')
    private cepsRepository: ICepsRepository
  ) {}

  public async execute({ cepNumber }: Request): Promise<Cep> {
    cepNumber = cepNumber.replace('-', '').replace('.', '')

    if (cepNumber.search(/[^\d]+/g) >= 0) {
      throw new AppError('Formato de CEP inválido')
    }

    if (cepNumber.length !== 8) {
      throw new AppError('Comprimento de CEP inválido')
    }
    const cepAlreadyExists = await this.cepsRepository.findByCepNumber(
      cepNumber
    )

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

      const cepData = this.cepsRepository.create({
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

      return cepData
    }
  }
}

export default GetCepInfoService
