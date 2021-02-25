import { Router } from 'express'
import CepsController from '../controllers/CepsController'

const cepsRouter = Router()
const cepsController = new CepsController()

cepsRouter.get('/:cepNumber', async (request, response) => cepsController.show)

export default cepsRouter
