import { SafeAreaView, ScrollView, View, Image } from "react-native";
import styles from "./styles";
import images from "../../../utils/images";
import { GlobalStyle } from "../../../styles/style";
import appColors from "../../../theme/appColors";
import { Header, Button } from "../../../commonComponents";
import { MapImageView, EstimatedDeliveryView, UserDetailView, AddressView } from "./components";
import { useTheme } from "@react-navigation/native";


export function OrderTracking({navigation}) {
    const {colors}=useTheme()
    const order=()=>{
        navigation.navigate('OrderDetail')
    }
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText={false}
                    showImage={false}
                    lightImage={images.fastkart} />
                <MapImageView />
            </ScrollView>

            <View style={styles.subView}>
                <View style={[styles.view,{backgroundColor:colors.background}]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <EstimatedDeliveryView />
                        <UserDetailView />
                        <AddressView />
                        <Button text={'Order Details'} style={styles.btn}
                            color={appColors.white} onPress={order}/>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}