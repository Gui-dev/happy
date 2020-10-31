import express from 'express'
import cors from 'cors'
import { join } from 'path'

import './database/connection'
import routes from './routes'

export class App {

  public app: express.Application

  constructor () {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))
    this.app.use(cors())
  }

  routes () {
    this.app.use(routes)
  }
}
