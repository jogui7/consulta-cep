import { Router } from 'express'

import cepsRouter from './ceps.routes'

const routes = Router()

routes.use('/cep', cepsRouter)

export default routes
