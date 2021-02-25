import { container } from 'tsyringe'
import { Response, Request } from 'express'
import GetCepInfoService from '@modules/ceps/services/GetCepInfoService'

export default class CepsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { cepNumber } = request.params

    const getCepInfo = container.resolve(GetCepInfoService)

    const cepInfo = await getCepInfo.execute({
      cepNumber
    })

    return response.json(cepInfo)
  }
}
