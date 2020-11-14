import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { Container, BackButton, Title, CloseButton } from './style'

interface IHeaderProps {
  title: string
  showCancel?: boolean
}

export const Header: React.FC<IHeaderProps> = ({ title, showCancel = true }) => {

  const { navigate, goBack } = useNavigation()

  const handleGoBackToHomePage = () => {
    navigate('OrphanagesMap')
  }

  return (
    <Container>
      <BackButton onPress={ goBack }>
        <Feather name="arrow-left" size={ 24 } color="#15B6D6"/>
      </BackButton>
      <Title>{ title }</Title>
      { showCancel 
        ? (
          <CloseButton onPress={ handleGoBackToHomePage }>
            <Feather name="x" size={ 24 } color="#FF669D"/>
          </CloseButton>
        ) 
        : (
          <View />
        )
      }
    </Container>
  )
}
