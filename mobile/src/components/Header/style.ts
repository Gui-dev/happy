import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  padding-top: 44px;
  background-color: #F9FAFC;
  border-bottom-width: 1px;
  border-color: #DDE3F0;
`

export const BackButton = styled(BorderlessButton)`

`

export const Title = styled.Text`
  font-size: 16px;
  font-family: Nunito_600SemiBold;
  color: #8FA7B3;
`

export const CloseButton = styled(BorderlessButton)`

`
