import React, { ChangeEvent, FormEvent, useState } from "react"
import { Map, Marker, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'
import { FiPlus } from "react-icons/fi"

import { mapIcon } from './../../utils/mapIcon'
import { Sidebar } from './../../components/Sidebar'
import { Container, Main, Form, InputBlock, ButtonSubmit } from './style'

export const CreateOrphanage: React.FC = () => {

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleMapMarker = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng
    setPosition({ latitude: lat, longitude: lng })
  }

  const handleSelectImages = (event: ChangeEvent<HTMLInputElement>) => {
    const fileImages = event.target.files
    
    if (!fileImages) {
      return
    }

    const selectedImages = Array.from(fileImages)
    setImages(selectedImages)
    const selectedPreviewImages = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })
    setPreviewImages(selectedPreviewImages)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const { latitude, longitude } = position
    console.log({
      name,
      about,
      latitude,
      longitude,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    })
  }

  return (
    <Container>

      <Sidebar />

      <Main>
        <Form className="create-orphanage-form" onSubmit={ handleSubmit }>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={ handleMapMarker }
            >
              <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              { position.latitude !== 0 && (
                <Marker 
                  interactive={false} 
                  style={{ width: '100%', height: 280 }}
                  icon={mapIcon} 
                  position={[position.latitude, position.longitude]} 
                />
              ) }

              
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input 
                id="name"
                value={ name }
                onChange={ event => setName(event.target.value) }
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea 
                id="about" 
                maxLength={300}
                value={ about }
                onChange={ event => setAbout(event.target.value) }
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <div className="images-container">

                { previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={name} title={name}/>
                  )
                }) }

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              
              <input 
                type="file" 
                id="image[]" 
                multiple
                onChange={ handleSelectImages }
              />

            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea 
                id="instructions" 
                value={ instructions }
                onChange={ event => setInstructions(event.target.value) }
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input 
                id="opening_hours" 
                value={ opening_hours }
                onChange={ event => setOpeningHours(event.target.value) }              
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                  type="button" 
                  className={open_on_weekends ? 'active': ''}
                  onClick={ () => setOpenOnWeekends(true) }
                >
                  Sim
                </button>
                <button 
                  type="button" 
                  className={!open_on_weekends ? 'active': ''}                  
                  onClick={ () => setOpenOnWeekends(false) }
                >
                  Não
                </button>
              </div>
            </InputBlock>
          </fieldset>

          <ButtonSubmit className="confirm-button" type="submit">
            Confirmar
          </ButtonSubmit>
        </Form>
      </Main>
    </Container>
  )
}
