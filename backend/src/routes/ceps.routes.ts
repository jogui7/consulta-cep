import { Router } from 'express'
import GetCepInfoService from '@services/GetCepInfoService'

const cepsRouter = Router()

cepsRouter.get('/:cepNumber', async (request, response) => {
  const { cepNumber } = request.params

  const getCep = new GetCepInfoService()

  const cepInfo = await getCep.execute({
    cepNumber
  })

  return response.json(cepInfo)
})

export default cepsRouter
