import express, { ErrorRequestHandler, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { join } from 'path'
import 'express-async-errors'

import './database/connection'
import routes from './routes'

export class App {

  public app: express.Application

  constructor () {
    this.app = express()

    this.middlewares()
    this.routes()
    this.handleException()
  }

  private middlewares () {
    this.app.use(express.json())
    this.app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))
    this.app.use(cors())
  }

  private routes () {
    this.app.use(routes)
  }

  private handleException() {

    this.app.use((error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) => {
      console.error(error)

      return response.status(500).json({ message: 'Internal server error' })
    })
  }
}
