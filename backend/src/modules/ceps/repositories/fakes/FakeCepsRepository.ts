import { v4 as uuidv4 } from 'uuid'

import ICepsRepository from '@modules/ceps/repositories/ICepsRepository'
import ICreateCepDTO from '@modules/ceps/dtos/ICreateCepDTO'

import Cep from '@modules/ceps/infra/typeorm/entities/Cep'

class CepsRepository implements ICepsRepository {
  private ceps: Cep[] = []

  public async findByCepNumber(cepNumber: string): Promise<Cep | undefined> {
    const findCep = this.ceps.find(cep => cep.cep === cepNumber)

    return findCep
  }

  public async create({
    cep,
    bairro,
    complemento,
    ddd,
    gia,
    ibge,
    localidade,
    logradouro,
    siafi,
    uf
  }: ICreateCepDTO): Promise<Cep> {
    const cepData = new Cep()

    cepData.id = uuidv4()
    cepData.cep = cep
    cepData.bairro = bairro
    cepData.complemento = complemento
    cepData.ddd = ddd
    cepData.gia = gia
    cepData.ibge = ibge
    cepData.localidade = localidade
    cepData.logradouro = logradouro
    cepData.siafi = siafi
    cepData.uf = uf

    this.ceps.push(cepData)

    return cepData
  }
}

export default CepsRepository
