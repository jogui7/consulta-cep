import { Router } from 'express'
import CepsController from '../controllers/CepsController'

const cepsRouter = Router()
const cepsController = new CepsController()

cepsRouter.get('/:cepNumber', cepsController.show)

export default cepsRouter
