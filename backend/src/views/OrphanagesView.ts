import { Orphanage } from './../models/Orphanage'
import { ImagesView } from './ImagesView'

export class OrphanagesView {

  public imagesView: ImagesView

  constructor () {
    this.imagesView = new ImagesView()
  }

  public render (orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: this.imagesView.renderMany(orphanage.images)
    }
  }

  public renderMany (orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage))
  }
}
