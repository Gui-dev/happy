import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
  flex: 1;
`

export const ImagesContainer = styled.View`
  height: 240px;
`

export const Image = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 240px;
  resize-mode: cover;
`

export const DetailsContainer = styled.View`
  padding: 24px;
`

export const Title = styled.Text`
  font-size: 30px;
  font-family: Nunito_700Bold;
  color: #4D6F80;
`

export const Description = styled.Text`
  font-family: Nunito_600SemiBold;
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #B3DAE2;
  margin-top: 40px;
  background-color: #E6F7FB;
`

export const MapViewContent = styled(MapView)`
  width: 100%;
  height: 150px;
`

export const RoutesContainer = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`

export const RoutesText = styled.Text`
  font-family: Nunito_700Bold;
  color: #0089a5;
`

export const Separator = styled.View`
  width: 100%;
  height: 0.8px;
  background-color: #D3E2E6;
  margin: 40px 0;
`

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`

const scheduleItemBlue = css`
  background-color: #E6F7FB;
  border-width: 1px;
  border-color: #B3DAE2;
  border-radius: 20px;
`

const scheduleItemGreen = css`
  background-color: #EDFFF6;
  border-width: 1px;
  border-color: #A1E9C5;
  border-radius: 20px;
`

export const ScheduleItem = styled.View`
  width: 48%;
  padding: 20px;
`

const scheduleTextBlue = css`
  color: #5C8599;
`

const scheduleTextGreen = css`
  color: #37C77F;
`

export const ScheduleText = styled.Text`
  font-family: Nunito_600SemiBold;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
`

export const ContactButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 56px;
  background-color: #3CDC8C;
  border-radius: 20px;
`

export const ContactButtonText = styled.Text`
  font-family: Nunito_800ExtraBold;
  color: #FFF;
  font-size: 16px;
  margin-left: 16px;
`