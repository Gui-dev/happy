import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'

import mapMarker from './../../assets/images/map-marker.png'
import { Container, MapContainer, CalloutContainer, CalloutText, Footer,
  FooterText, CreateOrphanageButton, CreateOrphanageButtonText
} from './style'

export const OrphanagesMap: React.FC = () => {

  const { navigate } = useNavigation()

  const handleNavigateToOrphanageDetails = () => {
    navigate('OrphanageDetails')
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
        <Marker 
          icon={mapMarker}
          calloutAnchor={{
            x: 2.8,
            y: 0.9
          }}
          coordinate={{
            latitude: -23.7833347,
            longitude: -46.6802013,
          }}
        >
          <Callout
            tooltip
            onPress={ handleNavigateToOrphanageDetails }
          >
            <CalloutContainer>
              <CalloutText>Lar de Maria</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapContainer>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>

        <CreateOrphanageButton>
          <CreateOrphanageButtonText>
            <Feather name="plus" size={ 20 } color="#FFF"/>
          </CreateOrphanageButtonText>
        </CreateOrphanageButton>
      </Footer>
    </Container>
  )
}