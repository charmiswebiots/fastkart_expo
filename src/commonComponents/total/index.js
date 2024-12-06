import { View, Text } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../theme/appConstant";
import { useValues } from "../../utils/context";
import appColors from "../../theme/appColors";
import { useTheme } from "@react-navigation/native";

export function Total(props, style, style1) {
    const {isDark}=useValues()
    const {colors}=useTheme()
    return (
        <View
            style={[
                styles.mainView,
                {backgroundColor:isDark?colors.primary:colors.background},
                { marginBottom: props.bottom },
                props.style1,
            ]}
        >
            <View style={{ paddingHorizontal: windowHeight(13) }}>
                <Text style={[styles.title, props.style,{color:colors.text}]}>{(props.title)}</Text>
                <View style={[styles.dataView]}>
                    <Text style={styles.data}>Bag total</Text>
                    <Text style={styles.data}>$220.00</Text>
                </View>
                <View style={[styles.dataView]}>
                    <Text style={styles.data}>Bag savings</Text>
                    <Text style={styles.price}>-$20.00</Text>
                </View>
                <View style={[styles.dataView]}>
                    <Text style={styles.data}>Coupon Discount</Text>
                    <Text style={styles.coupon}>Apply Coupon</Text>
                </View>
                <View style={[styles.dataView, styles.deliveryView]}>
                    <Text style={styles.data}>Delivery</Text>
                    <Text style={styles.data}>$50.00</Text>
                </View>
                <View style={[styles.amountView]}>
                    <Text style={[styles.amount,{color:colors.text}]}>Total Amount</Text>

                    <Text style={[styles.amount,{color:colors.text}]}>$270.00</Text>
                </View>
            </View>
            {props.btn}
        </View>
    )
}