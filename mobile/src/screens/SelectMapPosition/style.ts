import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  position: relative;
  flex: 1;
`

export const MapViewContainer = styled(MapView)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`

export const NextButton = styled(RectButton)`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 40px;
  align-items: center;
  justify-content: center;
  height: 56px;
  background-color: #15c3d6;
  border-radius: 20px;
`

export const NextButtonText = styled.Text`
  font-size: 16px;
  font-family: Nunito_800ExtraBold;
  color: #FFF;
`
