import { Router } from 'express'
import GetCepInfoService from '@services/GetCepInfoService'

const cepsRouter = Router()

cepsRouter.get('/:cep', async (request, response) => {
  const { cep } = request.params

  const getCep = new GetCepInfoService()

  const cepInfo = await getCep.execute({
    cep
  })

  return response.json(cepInfo)
})

export default cepsRouter
