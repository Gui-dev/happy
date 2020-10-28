import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import mapMarkerImg from './../../assets/images/map-marker.svg'
import 'leaflet/dist/leaflet.css'
import { Container, SideBar } from './style'

export const OrphanagesMap: React.FC = () => {
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
      </Map>

      <Link to="#" className="create-orphanage">
        <FiPlus size={ 32 } color="#FFF"/>
      </Link>
    </Container>
  )
}
