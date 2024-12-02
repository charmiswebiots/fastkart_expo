import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../../screens';

const Drawer = createDrawerNavigator();

export function MyDrawer() {

    return (
        <NavigationContainer >
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}


// import { View, Text } from 'react-native'
// import React from 'react'

// export function MyDrawer() {
//   return (
//     <View>
//       <Text>drawerNavigator</Text>
//     </View>
//   )
// }

