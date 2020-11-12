import styled from 'styled-components/native'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const MapContainer = styled(MapView)`
  width: ${ Dimensions.get('window').width };
  height: ${ Dimensions.get('window').height };
`

export const CalloutContainer = styled.View`
  justify-content: center;
  width: 160px;
  height: 46px;
  padding: 0 16px;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 16px;
`

export const CalloutText = styled.Text`
  font-size: 14px;
  font-family: Nunito_700Bold;
  color: #0089A5;
`

export const Footer = styled.View`
  position: absolute;
  right: 24px;
  bottom: 32px;
  left: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  height: 56px;
  background-color: #FFF;
  border-radius: 20px;
  elevation: 3;
`

export const FooterText = styled.Text`
  font-family: Nunito_700Bold;
  color: #8FA7B3;
`

export const CreateOrphanageButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: #15C3D6;
  border-radius: 20px;
`

export const CreateOrphanageButtonText = styled.Text`

`


