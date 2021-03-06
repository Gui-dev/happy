import { Image } from './../models/Image'

export class ImagesView {

  public render (image: Image) {
    return {
      id: image.id,
      url: `http://192.168.0.105:3333/uploads/${image.path}`
    }
  }

  public renderMany (images: Image[]) {
    return images.map(image => this.render(image))
  }
}
