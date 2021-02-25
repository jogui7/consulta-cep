import { container } from 'tsyringe'

import ICepsRepository from '@modules/ceps/repositories/ICepsRepository'
import CepsRepository from '@modules/ceps/infra/typeorm/repositories/CepsRepository'

container.registerSingleton<ICepsRepository>('CepsRepository', CepsRepository)
