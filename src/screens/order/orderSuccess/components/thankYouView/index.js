import { View ,Text} from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";

export function ThankyouView() {
    const {colors}=useTheme()
    return (
        <View>
            <Text style={[styles.thankyou,{color:colors.text}]}>Thank you for your order!</Text>
            <Text style={styles.orderSuccessfull}>your order has been placed successfully. your order ID is #548475151</Text>
        </View>
    )
}