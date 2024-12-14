import { ScrollView, SafeAreaView, Image, View } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../../styles/style";
import appColors from "../../../theme/appColors";
import { Header, Total, Button } from "../../../commonComponents";
import images from "../../../utils/images";
import { ThankyouView, OrderDataView } from "./components";
import { Icons } from "../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

export function OrderSuccess({ navigation }) {
    const { colors } = useTheme()
    const { isDark ,t} = useValues()

    const orderTracking = () => {
        navigation.navigate('OrderTracking')
    }

    const home = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <View style={styles.mainView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header
                        isText={false}
                        imageOnPress={home}
                        showImage={false}
                        firstIcon={<Icons.category />}
                        lightImage={isDark ? images.fastKartDark : images.fastkart}
                    />
                    <Image source={images.orderSuccess} style={styles.orderSuccess} />
                    <ThankyouView />
                    <OrderDataView />
                    <Total  title={t('orderTrackingPage.orderDetails')} style1={{ backgroundColor: isDark ? colors.primary : appColors.gray }} style={{color:isDark?appColors.white:colors.primary}} />
                </ScrollView>
            </View>
            <View style={styles.view}>
                <Button text={t('orderSuccessPage.trackOnMap')} style={styles.btn} color={appColors.white} onPress={orderTracking} />
            </View>
        </SafeAreaView>
    )
}