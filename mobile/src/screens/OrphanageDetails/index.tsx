import React, { useCallback, useEffect, useState } from 'react'
import { Linking, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { Marker } from 'react-native-maps'

import mapMarkerImg from './../../assets/images/map-marker.png'
import { Container, ImagesContainer, Image, DetailsContainer, Title, Description,
  MapContainer, MapViewContent, RoutesContainer, RoutesText, Separator,
  ScheduleContainer, ScheduleItem, ScheduleText, ContactButton, ContactButtonText
} from './style'
import { api } from '../../services/api'

interface IOrphanageDetailsProps {
  id: number
}

interface IOrphanageProps {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Array<{
    id: number
    url: string
  }>
}

export const OrphanageDetails: React.FC = () => {

  const route = useRoute()
  const { id } = route.params as IOrphanageDetailsProps
  const [orphanage, setOrphanage] = useState<IOrphanageProps>()

  useEffect(() => {
    api.get(`/orphanages/${id}`)
      .then(response => {
        setOrphanage(response.data)
      })
  }, [id])

  const handleOpenGoogleMapRoutes = useCallback(() => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`)
  }, [])



  if (!orphanage) {
    return <AppLoading/>
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          { orphanage.images.map(image => {
            return (
              <Image key={ String(image.id) } source={{ uri: image.url }} />
            )
          }) }
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{ orphanage.name }</Title>
        <Description>
          { orphanage.about }
        </Description>

        <MapContainer>
          <MapViewContent
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
            />
          </MapViewContent>

          <RoutesContainer onPress={ handleOpenGoogleMapRoutes }>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator/>

        <Title>Instruções para visita</Title>
        <Description>
          { orphanage.instructions }
        </Description>

        <ScheduleContainer>
          <ScheduleItem type="blue">
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText type="blue">Segunda à Sexta { orphanage.opening_hours }</ScheduleText>
          </ScheduleItem>
          <ScheduleItem type={ orphanage.open_on_weekends ? 'green' : 'red' } >
            <Feather name="info" size={40} color={ orphanage.open_on_weekends ? '#39CC83' : '#FF669D' } />
            <ScheduleText type={ orphanage.open_on_weekends ? 'green' : 'red' }>
            { orphanage.open_on_weekends
              ? 'Atendenmos fim de semana'
              : 'Não atendemos fim de semana'
            }
            </ScheduleText>
          </ScheduleItem>
        </ScheduleContainer>

        <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  )
}
