import * as Yup from 'yup'

export const createOrphanageValidation = Yup.object().shape({
  name: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  about: Yup.string().max(300).required(),
  instructions: Yup.string().required(),
  opening_hours: Yup.string().required(),
  open_on_weekends: Yup.boolean().required(),
  images: Yup.array(Yup.object().shape({
    path: Yup.string().required()
  }))
})
