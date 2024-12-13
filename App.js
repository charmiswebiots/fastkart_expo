// import React from 'react';
// import { useCustomFonts } from './src/theme/appFonts';
// import { StatusBar } from 'react-native';
// import { StackNavigation } from './src/navigation/stackNavigation';
// import { AppContextProvider } from './src/utils/context';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './src/assets/language'




// export default function App() {
  // const fontsLoaded = useCustomFonts();
  // const isDark = false;

  // if (!fontsLoaded) {
  //   return null;
  // }

//   return (
//     <AppContextProvider>
//       <I18nextProvider i18n={i18n}>
        // <StatusBar
        //   barStyle={isDark ? 'dark-content' : 'light-content'}
        //   backgroundColor={isDark ? 'white' : 'black'}
        // />
//         <StackNavigation />
//       </I18nextProvider>
//     </AppContextProvider>
//   );
// }


import React from 'react';
import { StatusBar} from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/assets/language';
import { StackNavigation } from './src/navigation/stackNavigation';
import { AppContextProvider } from './src/utils/context';
import { useCustomFonts } from './src/theme/appFonts';


export default function App() {
  const fontsLoaded = useCustomFonts();
  const isDark = false;

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AppContextProvider>
      <I18nextProvider i18n={i18n}>
      <StatusBar
          barStyle={isDark ? 'dark-content' : 'light-content'}
          backgroundColor={isDark ? 'white' : 'black'}
        />
        <StackNavigation />
      </I18nextProvider>
    </AppContextProvider>
  );
}
