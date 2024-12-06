import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";

export function Coupon(props) {
    const {isDark}=useValues()
    const {colors}=useTheme()
    return (
        <View style={styles.containerView}>
        <ImageBackground source={isDark? images.cartListDark:images.cartList} resizeMode='contain' style={styles.mainView}>
            <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[styles.subView]}>
                <View style={[styles.view]}>
                    <View style={[styles.view]}>
                        <Text style={styles.priceTxt}>{props.price}</Text>
                        <View style={styles.offView}>
                            <Text style={styles.percent}>%</Text>
                            <Text style={styles.off}>OFF</Text>
                        </View>
                    </View>
                    <View style={[ styles.titleView]}>
                        <Text style={[styles.titleTxt,{color:isDark?appColors.white:appColors.secondBlack}]}>{props.onOrder}</Text>
                        <Text style={[styles.titleTxt,{color:appColors.content}]}>{props.onOrderAbove}</Text>
                    </View>
                </View>
                <View>
                    <Text style={[styles.useCode,{color:colors.text}]}>Use Code: </Text>
                    <Text style={styles.code}>SCD450</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
        </View>
    )
}