import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa"
import { FiClock, FiInfo } from "react-icons/fi"
import { Map, Marker, TileLayer } from "react-leaflet"

import { api } from "../../services/api"
import { mapIcon } from './../../utils/mapIcon'
import { Sidebar } from './../../components/Sidebar'
import { Container, Main, OrphanageDetails, 
  OrphanageDetailsContent, ButtonContact 
} from './style'

interface OrphanagesProps {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  images: Array<{
    id: number
    url: string
  }>
  instructions: string
  open_on_weekends: boolean
  opening_hours: string
}

interface OrphanageRouteParams {
  id: string
}

export const Orphanage: React.FC = () => {

  const { id } = useParams<OrphanageRouteParams>()
  const [orphanage, setOrphanage] = useState<OrphanagesProps>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)


  
  useEffect(() => {
    api.get(`/orphanages/${id}`)
      .then(response => {
        setOrphanage(response.data)
      })
  }, [id])

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <Container>

      <Sidebar />

      <Main>
        <OrphanageDetails>
          <img src={ orphanage.images[activeImageIndex].url } alt={ orphanage.name } title={ orphanage.name }/>

          <div className="images">
            { orphanage.images.map((image, index) => {
              return (
                <button 
                  type="button"
                  key={ String(image.id) } 
                  className={ activeImageIndex === index ? 'active' : '' }
                  onClick={ () => setActiveImageIndex(index) } 
                >
                  <img src={ image.url } alt={ orphanage.name } title={ orphanage.name }/>
                </button>
              )
            }) }
          </div>
          
          <OrphanageDetailsContent>
            <h1>{ orphanage.name }</h1>
            <p>{ orphanage.about }</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude, orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                  interactive={false} 
                  icon={mapIcon} 
                  position={[orphanage.latitude, orphanage.longitude]} 
                />
              </Map>

              <footer>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  rel="noreferrer" 
                  target="_blank"
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{ orphanage.instructions }</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                { orphanage.opening_hours }
              </div>
              
              { orphanage.open_on_weekends 
                ? (
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                    Atendemos <br />   
                    fim de semana             
                  </div>
                )
                : (
                  <div className="open-on-weekends dont-open">
                    <FiInfo size={32} color="#FF669D" />
                    Não atendemos <br />    
                    fim de semana
                  </div>
                )
              }

              
            </div>

            <ButtonContact type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ButtonContact>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  )
}