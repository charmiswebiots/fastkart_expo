import { View ,Text} from "react-native";
import styles from "./styles";

export function ThankyouView() {
    return (
        <View>
            <Text style={[styles.thankyou]}>Thank you for your order!</Text>
            <Text style={styles.orderSuccessfull}>your order has been placed successfully. your order ID is #548475151</Text>
        </View>
    )
}