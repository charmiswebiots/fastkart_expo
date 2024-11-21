import { useFonts } from "expo-font";

export const useCustomFonts = () => {
    const [fontsLoaded] = useFonts({
        mulishBold: require('../../src/assets/fonts/Mulish-Bold.ttf'),
        mulishSemiBold: require('../../src/assets/fonts/Mulish-SemiBold.ttf'),
        nunitoSans: require('../../src/assets/fonts/NunitoSans-Regular.ttf'),
        quickSandBold: require('../../src/assets/fonts/Quicksand-Bold.ttf'),
        quickSandMedium: require('../../src/assets/fonts/Quicksand-Medium.ttf'),

    });
    return fontsLoaded;
}