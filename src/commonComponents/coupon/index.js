import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";

export function Coupon(props) {
    return (
        <View style={styles.containerView}>
        <ImageBackground source={ images.cartList} resizeMode='contain' style={styles.mainView}>
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
                        <Text style={[styles.titleTxt,{color:appColors.secondBlack}]}>{props.onOrder}</Text>
                        <Text style={[styles.titleTxt,{color:appColors.content}]}>{props.onOrderAbove}</Text>
                    </View>
                </View>
                <View>
                    <Text style={[styles.useCode]}>Use Code: </Text>
                    <Text style={styles.code}>SCD450</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
        </View>
    )
}