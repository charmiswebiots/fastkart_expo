import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";

export function Coupon(props) {

    const {isDark,viewRtlStyle,textRtlStyle}=useValues()
    const {colors}=useTheme()

    return (
        <View style={styles.containerView}>
        <ImageBackground source={isDark? images.cartListDark:images.cartList} resizeMode='contain' style={styles.mainView}>
            <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[styles.subView,{flexDirection:viewRtlStyle}]}>
                <View style={[styles.view,{flexDirection:viewRtlStyle}]}>
                    <View style={[styles.view,{flexDirection:viewRtlStyle}]}>
                        <Text style={styles.priceTxt}>{props.price}</Text>
                        <View style={styles.offView}>
                            <Text style={styles.percent}>%</Text>
                            <Text style={styles.off}>OFF</Text>
                        </View>
                    </View>
                    <View style={[ styles.titleView]}>
                        <Text style={[styles.titleTxt,{color:isDark?appColors.white:appColors.secondBlack},{textAlign:textRtlStyle}]}>{props.onOrder}</Text>
                        <Text style={[styles.titleTxt,{color:appColors.content},{textAlign:textRtlStyle}]}>{props.onOrderAbove}</Text>
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