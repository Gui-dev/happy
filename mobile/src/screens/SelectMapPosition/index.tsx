import React, { useState } from 'react'
import { Marker, MapEvent } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

import mapMarkerImg from './../../assets/images/map-marker.png'
import { Container, MapViewContainer, NextButton, NextButtonText } from './style'

export const SelectMapPosition: React.FC = () => {

  const { navigate } = useNavigation()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })


  const handleNextStep = () => {
    navigate('OrphanageData', { position })
  }

  const handleSelectMapPosition = (event: MapEvent) => {
    const latLong = event.nativeEvent.coordinate
    setPosition(latLong)
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
        onPress={ handleSelectMapPosition }
      >
        { position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        ) }
      </MapViewContainer>

      { position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      ) }
    </Container>
  )
}
