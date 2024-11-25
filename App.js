import { StackNavigation } from './src/navigation/stackNavigation';
import { useCustomFonts } from './src/theme/appFonts';

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }
  return (
     <StackNavigation/>
  );
}




