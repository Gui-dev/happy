import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import mapMarkerImg from './../../assets/images/map-marker.svg'
import 'leaflet/dist/leaflet.css'
import { Container, SideBar } from './style'

export const OrphanagesMap: React.FC = () => {

  const mapIcon = Leaflet.icon({ 
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
  })

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
        <Marker 
          position={[-23.7833347,-46.6802013]}
          icon={ mapIcon }
        >
          <Popup 
            className="map-popup"
            closeButton={ false }
            minWidth={ 240 }
            maxWidth={ 240 }
          >
            Lar das Meninas
            <Link to="">
              <FiArrowRight size={ 20 } color="#FFF"/>
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="#" className="create-orphanage">
        <FiPlus size={ 32 } color="#FFF"/>
      </Link>
    </Container>
  )
}
