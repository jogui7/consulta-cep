import FakeCepsRepository from '../repositories/fakes/FakeCepsRepository'
import GetCepInfoService from './GetCepInfoService'

import AppError from '@shared/errors/AppError'

describe('GetCepInfo', () => {
  it('should be able to return cep data', async () => {
    const fakeCepsRepository = new FakeCepsRepository()
    const getCepInfo = new GetCepInfoService(fakeCepsRepository)

    const cep = await getCepInfo.execute({
      cepNumber: '81540300'
    })

    expect(cep).toHaveProperty('id')
    expect(cep.cep).toBe('81540300')
  })

  test('should be able to return if cep format is invalid', async () => {
    const fakeCepsRepository = new FakeCepsRepository()
    const getCepInfo = new GetCepInfoService(fakeCepsRepository)

    expect(
      getCepInfo.execute({
        cepNumber: '82aa1478'
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to return if cep length is invalid', () => {
    const fakeCepsRepository = new FakeCepsRepository()
    const getCepInfo = new GetCepInfoService(fakeCepsRepository)

    expect(
      getCepInfo.execute({
        cepNumber: '821478'
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to return if cep does not exist', async () => {
    const fakeCepsRepository = new FakeCepsRepository()
    const getCepInfo = new GetCepInfoService(fakeCepsRepository)
    expect(
      getCepInfo.execute({
        cepNumber: '11111111'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
