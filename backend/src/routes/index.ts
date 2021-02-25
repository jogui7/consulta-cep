import { Router } from 'express'

import cepsRouter from './ceps.routes'

const routes = Router()

routes.use('/ceps', cepsRouter)

export default routes
