import { View, Text } from "react-native";
import styles from "./styles";
import { windowHeight, windowWidth } from "../../theme/appConstant";

export function Total(props) {
    return (
        <View style={props.style ? [styles.mainView, {
            marginBottom: props.bottom,
        }] : { padding: windowWidth(0) }}>
            <View style={{paddingHorizontal:windowHeight(13)}}>
            <Text style={[styles.title]}>{(props.title)}</Text>
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
                <Text style={[styles.amount]}>Total Amount</Text>
                
                    <Text style={[styles.amount]}>$270.00</Text>
            </View>
            </View>

            {props.btn}
        </View>
    )
}