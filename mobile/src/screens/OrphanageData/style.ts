import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: Nunito_700Bold;
  color: #5c8599;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-color: #D3E2E6;
  border-bottom-width: 0.8px;
`

export const Label = styled.Text`
  font-family: Nunito_600SemiBold;
  color: #8fa7b3;
  margin-bottom: 8px;
`

export const Comment = styled.Text`
  font-size: 11px;
  color: #8fa7b3;
`

export const Input = styled.TextInput`
  padding: 18px 24px;
  margin-bottom: 16px;
  height: 56px;
  background-color: #fff;
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
`

export const UploadedImagesContainer = styled.View`
  flex-direction: row;
`

export const Image = styled.Image`
  margin-right: 8px;
  margin-bottom: 32px;
  width: 64px;
  height: 64px;
  border-radius: 20px;
`

export const ImagesInput = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  height: 56px;
  background-color: rgba(255, 255, 255, 0.5);
  border-style: dashed;
  border-color: #96D2F0;
  border-width: 1.4px;
  border-radius: 20px;
`

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`

export const Switch = styled.Switch`

`

export const NextButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  height: 56px;
  background-color: #15c3d6;
  border-radius: 20px;
`

export const NextButtonText = styled.Text`
  font-size: 16px;
  font-family: Nunito_800ExtraBold;
  color: #FFF;
`
