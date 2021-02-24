import fetch from 'node-fetch'
import AppError from 'src/errors/AppError'

interface Request {
  cep: string
}

interface CepInfo {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

class GetCepInfoService {
  public async execute({ cep }: Request): Promise<CepInfo> {
    if (cep.length < 5) {
      throw new AppError('CEP inválido')
    }

    const cepInfo = await fetch(
      `https://viacep.com.br/ws/${cep}/json`
    ).then(response => response.json())

    return cepInfo
  }
}

export default GetCepInfoService
