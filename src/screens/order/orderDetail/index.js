import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../../styles/style";
import { Header, Total, Button } from "../../../commonComponents";
import appColors from "../../../theme/appColors";
import { OrderDetailView, ItemsView, AddressView, PaymentsMethodView } from './components'
import { windowHeight } from "../../../theme/appConstant";

export function OrderDetail({navigation}) {

    const shopPage=()=>{
        navigation.navigate('ShopPage')
    }
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: appColors.white }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.replace('Drawer')}
                    showImage={false}
                    isText
                    titleText={'Order Summary'} />
                <OrderDetailView />
                <ItemsView />
                <View style={{ marginTop: windowHeight(22) }}>
                    <Total title={'Payment Details'} />
                </View>
                <AddressView />
                <PaymentsMethodView />
                <Button text={'Reorder'} style={styles.btn}
                color={appColors.white} onPress={shopPage} />
            </ScrollView>

           
        </SafeAreaView>
    )
}