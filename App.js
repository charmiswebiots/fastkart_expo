import React from 'react';
import { useCustomFonts } from './src/theme/appFonts';
import { View,Text } from 'react-native';
import { Splash } from './src/screens';
import { StackNavigation } from './src/navigation/stackNavigation';
import { Login } from './src/screens';

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <StackNavigation />
    // <View>
    //   <Text>gvfdg</Text>
    // </View>
  );
}




