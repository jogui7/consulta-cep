import Cep from '../infra/typeorm/entities/Cep'
import ICreateCepDTO from '../dtos/ICreateCepDTO'

export default interface ICepsRepository {
  create(data: ICreateCepDTO): Promise<Cep>
  findByCepNumber(cepNumber: string): Promise<Cep | undefined>
}
