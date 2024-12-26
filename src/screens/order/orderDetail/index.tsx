import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../../styles/style";
import { Header, Total, Button } from "../../../commonComponents";
import appColors from "../../../theme/appColors";
import { OrderDetailView, ItemsView, AddressView, PaymentsMethodView } from './components';
import { windowHeight } from "../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

interface OrderDetailProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export function OrderDetail({ navigation }: OrderDetailProps): JSX.Element {
    const { colors } = useTheme();
    const { isDark, t } = useValues();

    const shopPage = (): void => {
        navigation.navigate('ShopPage');
    };

    const home = (): void => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    showImage={false}
                    isText
                    titleText={t('orderDetailPage.orderSummary')} 
                    imageOnPress={home} 
                />
                <OrderDetailView />
                <ItemsView />
                <View style={styles.view}>
                    <Total 
                        title={t('orderDetailPage.paymentDetails')} 
                        style={{ color: isDark ? appColors.primary : appColors.primary }} 
                        style1={{ backgroundColor: colors.background, marginHorizontal: windowHeight(0) }} 
                    />
                </View>
                <AddressView />
                <PaymentsMethodView />
                <Button 
                    text={t('orderDetailPage.reorder')} 
                    style={styles.btn}
                    color={appColors.white} 
                    onPress={shopPage} 
                />
            </ScrollView>
        </SafeAreaView>
    );
}