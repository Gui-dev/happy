import React from 'react'
import { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

import mapMarkerImg from './../../assets/images/map-marker.png'
import { Container, MapViewContainer, NextButton, NextButtonText } from './style'

export const SelectMapPosition: React.FC = () => {

  const { navigate } = useNavigation()

  const handleNextStep = () => {
    navigate('OrphanageData');
  }

  return (
    <Container>
      <MapViewContainer 
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker 
          icon={mapMarkerImg}
          coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
        />
      </MapViewContainer>

      <NextButton onPress={handleNextStep}>
        <NextButtonText>Próximo</NextButtonText>
      </NextButton>
    </Container>
  )
}
