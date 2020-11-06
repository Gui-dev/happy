import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import { api } from './../../services/api'
import mapMarkerImg from './../../assets/images/map-marker.svg'
import { mapIcon } from './../../utils/mapIcon'
import 'leaflet/dist/leaflet.css'
import { Container, SideBar } from './style'

interface OrphanagesProps {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  images: [{
    id: number
    url: string
  }]
  instructions: string
  open_on_weekends: boolean
  opening_hours: string
}

export const OrphanagesMap: React.FC = () => {

  const [orphanages, setOrphanages] = useState<OrphanagesProps[]>([])
  
  useEffect(() => {
    api.get('/orphanages')
      .then(response => {
        setOrphanages(response.data)
      })
  }, [])

  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarkerImg} alt="Happy" title="Happy"/>
          <h1>Escolha um orfanato no mapa</h1>
          <p>Muitas crianças estão esperando a sua visita {':)'}</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </SideBar>

      <Map 
        center={[-23.7833347,-46.6802013]}
        zoom={ 15 }
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        /> */}

        { orphanages.map(orphanage => {
          return (
            <Marker 
              key={ String(orphanage.id) }
              position={[orphanage.latitude, orphanage.longitude]}
              icon={ mapIcon }
            >
              <Popup 
                className="map-popup"
                closeButton={ false }
                minWidth={ 240 }
                maxWidth={ 240 }
              >
                { orphanage.name }
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={ 20 } color="#FFF"/>
                </Link>
              </Popup>
            </Marker>
          )
        }) }

        
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={ 32 } color="#FFF"/>
      </Link>
    </Container>
  )
}
