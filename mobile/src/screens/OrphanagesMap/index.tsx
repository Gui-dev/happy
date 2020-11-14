import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'

import { api } from '../../services/api'
import mapMarker from './../../assets/images/map-marker.png'
import { Container, MapContainer, CalloutContainer, CalloutText, Footer,
  FooterText, CreateOrphanageButton, CreateOrphanageButtonText
} from './style'

interface IOrphanagesProps {
  id: number
  name: string
  latitude: number
  longitude: number
}

export const OrphanagesMap: React.FC = () => {

  const { navigate } = useNavigation()
  const [orphanages, setOrphanages] = useState<IOrphanagesProps[]>([])

  useEffect(() => {
    api.get('/orphanages')
      .then(response => {
        setOrphanages(response.data)
      })
  }, [])

  const handleNavigateToOrphanageDetails = (id: number) => {
    navigate('OrphanageDetails', { id })
  }

  const handleNavigateToCreateOrphanage = () => {
    navigate('SelectMapPosition')
  }

  return (
    <Container>
      <MapContainer
        provider={ PROVIDER_GOOGLE }
        initialRegion={{
          latitude: -23.7833347,
          longitude: -46.6802013,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        { orphanages.map(orphanage => {
          return (
            <Marker
              key={ String(orphanage.id) }
              icon={mapMarker}
              calloutAnchor={{
                x: 2.8,
                y: 0.9
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout
                tooltip
                onPress={ () => handleNavigateToOrphanageDetails(orphanage.id) }
              >
                <CalloutContainer>
                  <CalloutText>{ orphanage.name }</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          )
        }) }

      </MapContainer>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>

        <CreateOrphanageButton onPress={ handleNavigateToCreateOrphanage }>
          <CreateOrphanageButtonText>
            <Feather name="plus" size={ 20 } color="#FFF"/>
          </CreateOrphanageButtonText>
        </CreateOrphanageButton>
      </Footer>
    </Container>
  )
}
