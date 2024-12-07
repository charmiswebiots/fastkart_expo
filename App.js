import React from 'react';
import { useCustomFonts } from './src/theme/appFonts';
import { StatusBar } from 'react-native';
import { StackNavigation } from './src/navigation/stackNavigation';
import { AppContextProvider } from './src/utils/context';


export default function App() {
  const fontsLoaded = useCustomFonts();
  const isDark = false;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppContextProvider>
      <StatusBar
        barStyle={isDark ? 'dark-content' : 'light-content'}
        backgroundColor={isDark ? 'white' : 'black'}
      />
      <StackNavigation />
    </AppContextProvider>
  );
}


