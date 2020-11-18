import React, { useCallback, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import { api } from '../../services/api'
import { Container, Title, Label, Input, UploadedImagesContainer, Image, ImagesInput, SwitchContainer, Switch,
  NextButton, NextButtonText
} from './style'

interface IOrphanageDataParams {
  position: {
    latitude: number,
    longitude: number
  }
}

export const OrphanageData: React.FC = () => {

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<string[]>([])
  const { navigate } = useNavigation()
  const route = useRoute()
  const { position } = route.params as IOrphanageDataParams

  const handleSelectImages = useCallback( async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()

    if (status !== 'granted') {
      alert('Eita!, precisamos de acesso as suas fotos...')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })

    if (result.cancelled) {
      return
    }

    const { uri: image } = result
    setImages([...images, image])
  }, [])

  const handleCreateOrphanage = useCallback(async () => {
    const data = new FormData()
    data.append('name', name)
    data.append('about', about)
    data.append('instructions', instructions)
    data.append('latitude', String(position.latitude))
    data.append('longitude', String(position.longitude))
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))
    images.forEach((image, index) => {
      data.append('images', {
        name: `images_${index}.jpg`,
        type: 'images/jpeg',
        uri: image
      } as any)
    })

    await api.post('/orphanages', data)
    navigate('OrphanagesMap')
  }, [])

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input
        value={ name }
        onChangeText={ setName }
      />

      <Label>Sobre</Label>
      <Input
        style={ { height: 110 } }
        multiline
        value={ about }
        onChangeText={ setAbout }
      />

      {/* <Label>Whatsapp</Label>
      <Input /> */}

      <Label>Fotos</Label>
      <UploadedImagesContainer>
        { images.map(image => {
          return (
            <Image
              key={ image }
              source={{ uri: image }}
            />
          )
        }) }
      </UploadedImagesContainer>
      <ImagesInput onPress={ handleSelectImages }>
        <Feather name="plus" size={24} color="#15B6D6"/>
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input
        style={ { height: 110 } }
        multiline
        value={ instructions }
        onChangeText={ setInstructions }
      />

      <Label>Horario de visitas</Label>
      <Input
        value={ opening_hours }
        onChangeText={ setOpeningHours }
      />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={ open_on_weekends }
          onValueChange={ setOpenOnWeekends }
        />
      </SwitchContainer>

      <NextButton onPress={ handleCreateOrphanage }>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  )
}

