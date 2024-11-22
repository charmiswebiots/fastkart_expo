import { View,Text } from "react-native";
import styles from "./styles";

export function EstimatedDeliveryView() {
    return (
        <View>
            <Text style={styles.deliveryTime}>Estimated Delivery Time</Text>
            <Text style={styles.trackingTime}>9.00am - 12.00pm</Text>
        </View>
    )
}