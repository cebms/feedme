import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/home/index'
import Details from './screens/details/index'

const Routes = () => {
    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name="Home" component={ Home } />
                <Stack.Screen name="Details" component={ Details } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes