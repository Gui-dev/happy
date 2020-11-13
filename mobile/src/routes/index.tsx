import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { OrphanagesMap } from './../screens/OrphanagesMap'
import { OrphanageDetails } from './../screens/OrphanageDetails'
import { OrphanageData } from './../screens/OrphanageData'
import { SelectMapPosition } from './../screens/SelectMapPosition'

const Routes: React.FC = () => {

  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="OrphanagesMap" component={ OrphanagesMap }/>
        <Screen name="OrphanageDetails" component={ OrphanageDetails }/>
        <Screen name="OrphanageData" component={ OrphanageData }/>
        <Screen name="SelectMapPosition" component={ SelectMapPosition }/>
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes