import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { OrphanagesMap } from './../screens/OrphanagesMap'
import { OrphanageDetails } from './../screens/OrphanageDetails'
import { OrphanageData } from './../screens/OrphanageData'
import { SelectMapPosition } from './../screens/SelectMapPosition'

import { Header } from './../components/Header'

const Routes: React.FC = () => {

  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#F2F3F5' }
        }}
      >
        <Screen name="OrphanagesMap" component={ OrphanagesMap }/>

        <Screen 
          name="OrphanageDetails" 
          component={ OrphanageDetails }
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" showCancel={ false }/>
          }}
        />
        <Screen 
          name="OrphanageData" 
          component={ OrphanageData }
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados"/>
          }}
        />
        <Screen 
          name="SelectMapPosition" 
          component={ SelectMapPosition }
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa"/>
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes