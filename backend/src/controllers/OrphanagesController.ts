import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { Orphanage } from './../models/Orphanage'
import { OrphanagesView } from './../views/OrphanagesView'

export class OrphanagesController {

  public async index (request: Request, response: Response) {
    const orphanagesView = new OrphanagesView()
    const orphanagesRepository = getRepository(Orphanage)
    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    })

    return response.status(200).json(orphanagesView.renderMany(orphanages))
  }

  public async show (request: Request, response: Response) {
    const orphanagesView = new OrphanagesView()
    const { id } = request.params
    const orphanagesRepository = getRepository(Orphanage)
    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    })

    return response.status(200).json(orphanagesView.render(orphanage))
  }

  public async create (request: Request, response: Response) {

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body
    const requestImages = request.files as Express.Multer.File[]
    const images = requestImages.map(image => {
      return {
        path: image.filename
      }
    })

    const orphanagesRepository = getRepository(Orphanage)
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    })

    await orphanagesRepository.save(orphanage)

    return response.status(201).json(orphanage)
  }
}
