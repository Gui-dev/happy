import React from "react"
import { Map, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { FiPlus } from "react-icons/fi"

import mapMarkerImg from './../../assets/images/map-marker.svg'
import { Sidebar } from './../../components/Sidebar'
import { Container, Main, Form, InputBlock, ButtonSubmit } from './style'

export const CreateOrphanage: React.FC = () => {
  const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

  return (
    <Container>

      <Sidebar />

      <Main>
        <Form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
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
