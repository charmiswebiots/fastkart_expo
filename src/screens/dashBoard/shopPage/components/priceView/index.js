import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import appColors from "../../../../../theme/appColors";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function PriceView() {

    const {viewRtlStyle,textRtlStyle,t}=useValues()
    const navigation = useNavigation();
    const cart = () => {
        navigation.navigate('Cart')
    }

    return (
        <View style={[styles.price,{flexDirection:viewRtlStyle}]}>
            <View>
                <Text style={styles.listItem}>{t('productList.listItems')}</Text>
                <Text style={[styles.listItem,{textAlign:textRtlStyle}]}>$250.00</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={cart} style={{ flexDirection: "row" }}>
                <Text style={[styles.viewCart,{textAlign:textRtlStyle}]}>{t('productList.viewCart')}</Text>
                <View style={{ transform: [{ scaleX: 1 }] }}>
                    <Icons.sideArrow color={appColors.white} />
                </View>
            </TouchableOpacity>
        </View>
    )
}