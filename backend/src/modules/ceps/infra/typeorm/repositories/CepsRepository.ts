import { getRepository, Repository } from 'typeorm'

import ICepsRepository from '@modules/ceps/repositories/ICepsRepository'
import ICreateCepDTO from '@modules/ceps/dtos/ICreateCepDTO'

import Cep from '../entities/Cep'

class CepsRepository implements ICepsRepository {
  private ormRepository: Repository<Cep>

  constructor() {
    this.ormRepository = getRepository(Cep)
  }

  public async findByCepNumber(cepNumber: string): Promise<Cep | undefined> {
    const findByCepNumber = await this.ormRepository.findOne({
      where: { cep: cepNumber }
    })

    return findByCepNumber || undefined
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
    const cepData = this.ormRepository.create({
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

    await this.ormRepository.save(cepData)

    return cepData
  }
}

export default CepsRepository
