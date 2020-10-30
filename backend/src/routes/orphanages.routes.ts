import { Router } from 'express'
import multer from 'multer'

import { OrphanagesController } from './../controllers/OrphanagesController'
import multerConfig from './../config/upload'

const orphanagesRoutes = Router()
const orphanagesController = new OrphanagesController()
const upload = multer(multerConfig)

orphanagesRoutes.get('/', orphanagesController.index)
orphanagesRoutes.get('/:id', orphanagesController.show)
orphanagesRoutes.post('/', upload.array('images'), orphanagesController.create)

export default orphanagesRoutes
