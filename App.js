import React from 'react';
import { useCustomFonts } from './src/theme/appFonts';
import { StatusBar } from 'react-native';
import { StackNavigation } from './src/navigation/stackNavigation';


export default function App() {
  const fontsLoaded = useCustomFonts();
  const isDark = false;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'dark-content' : 'light-content'}
        backgroundColor={isDark ? 'white' : 'black'}
      />
      <StackNavigation />
    </>
  );
}





// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { useNavigation } from '@react-navigation/native';

// // Home screen
// function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to About"
//         onPress={() => navigation.navigate('About')}
//       />
//     </View>
//   );
// }

// // About screen
// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>About Screen</Text>
//     </View>
//   );
// }

// // Services screen
// function ServicesScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Services Screen</Text>
//     </View>
//   );
// }

// // Contact screen
// function ContactScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Contact Screen</Text>
//     </View>
//   );
// }

// // Create the Drawer Navigator
// const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="About" component={AboutScreen} />
//         <Drawer.Screen name="Services" component={ServicesScreen} />
//         <Drawer.Screen name="Contact" component={ContactScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

