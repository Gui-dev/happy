import React from 'react'
import { ScrollView } from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { Marker } from 'react-native-maps'

import mapMarkerImg from './../../assets/images/map-marker.png'
import { Container, ImagesContainer, Image, DetailsContainer, Title, Description,
  MapContainer, MapViewContent, RoutesContainer, RoutesText, Separator, 
  ScheduleContainer, ScheduleItem, ScheduleText, ContactButton, ContactButtonText
} from './style'

export const OrphanageDetails: React.FC = () => {
  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          <Image source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
          <Image source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
          <Image source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>Orf. Esperança</Title>
        <Description>
          Presta assistência a crianças de 06 a 15 anos que se 
          encontre em situação de risco e/ou vulnerabilidade social.
        </Description>
      
        <MapContainer>
          <MapViewContent 
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
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
                latitude: -27.2092052,
                longitude: -49.6401092
              }}
            />
          </MapViewContent>

          <RoutesContainer>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>
      
        <Separator/>

        <Title>Instruções para visita</Title>
        <Description>
          Venha como se sentir a vontade e traga muito amor e paciência para dar.
        </Description>

        <ScheduleContainer>
          <ScheduleItem>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText>Segunda à Sexta 8h às 18h</ScheduleText>
          </ScheduleItem>
          <ScheduleItem>
            <Feather name="info" size={40} color="#39CC83" />
            <ScheduleText>Atendemos fim de semana</ScheduleText>
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
