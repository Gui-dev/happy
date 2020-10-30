import { Router } from 'express'

import { OrphanagesController } from './../controllers/OrphanagesController'

const orphanagesRoutes = Router()
const orphanagesController = new OrphanagesController()

orphanagesRoutes.get('/', orphanagesController.index)
orphanagesRoutes.get('/:id', orphanagesController.show)
orphanagesRoutes.post('/', orphanagesController.create)

export default orphanagesRoutes
