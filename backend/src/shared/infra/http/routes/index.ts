import { Router } from 'express'

import cepsRouter from '@modules/ceps/infra/http/routes/ceps.routes'

const routes = Router()

routes.use('/ceps', cepsRouter)

export default routes
