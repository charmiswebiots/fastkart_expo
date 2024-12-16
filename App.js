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



// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import EasyContentLoader from "react-native-easy-content-loader";

// export default function DemoLoader() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Simulate data fetching
//     setTimeout(() => {
//       setData({
//         name: "John Doe",
//         age: 30,
//         location: "New York"
//       });
//       setLoading(false);
//     }, 3000); // 3 seconds delay to simulate data loading
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Profile</Text>

//       {loading ? (
//         // Show skeleton loader when loading is true
//         <EasyContentLoader
//           active={true}
//           pRows={3} // Number of rows for the loader
//           pWidth={['80%', '60%', '90%']} // Width of the loader for each row
//           pHeight={12} // Height of each row
//           tHeight={16} // Height for text lines
//         />
//       ) : (
//         // Show the actual content once data is loaded
//         <View style={styles.content}>
//           <Text style={styles.text}>Name: {data.name}</Text>
//           <Text style={styles.text}>Age: {data.age}</Text>
//           <Text style={styles.text}>Location: {data.location}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#f9f9f9"
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16
//   },
//   content: {
//     marginBottom: 20
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 8
//   }
// });
