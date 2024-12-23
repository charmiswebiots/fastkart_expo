// import { SafeAreaView, ScrollView, View } from "react-native";
// import styles from "./styles";
// import { GlobalStyle } from "../../../styles/style";
// import appColors from "../../../theme/appColors";
// import { Header, Button } from "../../../commonComponents";
// import { MapImageView, EstimatedDeliveryView, UserDetailView, AddressView } from "./components";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../../utils/context";
// import { windowHeight } from "../../../theme/appConstant";
// import { Icons } from "../../../utils/icons";


// export function OrderTracking({ navigation }) {
//     const { colors } = useTheme()
//     const { t, isDark } = useValues()

//     const order = () => {
//         navigation.navigate('OrderDetail')
//     }

//     const home = () => {
//         navigation.navigate('Home')
//     }

//     return (
//         <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <Header
//                     onPress={() => navigation.goBack()}
//                     isText={false}
//                     showImage={false}
//                     lightStyle={{ right: windowHeight(4) }}
//                     lightImage={isDark ? <Icons.faskartLogoDark /> : <Icons.faskartLogo />}
//                     imageOnPress={home} />
//                 <MapImageView />
//             </ScrollView>

//             <View style={styles.subView}>
//                 <View style={[styles.view, { backgroundColor: colors.background }]}>
//                     <ScrollView showsVerticalScrollIndicator={false}>
//                         <EstimatedDeliveryView />
//                         <UserDetailView />
//                         <AddressView />
//                         <Button text={t('orderTrackingPage.orderDetails')} style={styles.btn}
//                             color={appColors.white} onPress={order} />
//                     </ScrollView>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }






import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../../styles/style";
import appColors from "../../../theme/appColors";
import { Header, Button } from "../../../commonComponents";
import { MapImageView, EstimatedDeliveryView, UserDetailView, AddressView } from "./components";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";
import { windowHeight } from "../../../theme/appConstant";
import { Icons } from "../../../utils/icons";

interface OrderTrackingProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export function OrderTracking({ navigation }: OrderTrackingProps): JSX.Element {
    const { colors } = useTheme();
    const { t, isDark } = useValues();

    const order = (): void => {
        navigation.navigate('OrderDetail');
    };

    const home = (): void => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText={false}
                    showImage={false}
                    lightStyle={{ right: windowHeight(4) }}
                    lightImage={isDark ? <Icons.faskartLogoDark /> : <Icons.faskartLogo />}
                    imageOnPress={home} />
                <MapImageView />
            </ScrollView>

            <View style={styles.subView}>
                <View style={[styles.view, { backgroundColor: colors.background }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <EstimatedDeliveryView />
                        <UserDetailView />
                        <AddressView />
                        <Button text={t('orderTrackingPage.orderDetails')} style={styles.btn}
                            color={appColors.white} onPress={order} />
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}