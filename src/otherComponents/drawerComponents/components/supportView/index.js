import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import appColors from "../../../../theme/appColors";

export function SupportView() {
    return (
        <View style={[styles.supportView, { backgroundColor: appColors.drawer }]}>
            <Text style={[styles.supportTxt]}>Contact Support</Text>
            <Text style={styles.reactOut}>If you have any problem,queries or questions feel free to reach out</Text>
            <TouchableOpacity style={styles.contactUs}>
                <Text style={styles.contactUsTxt}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    )
}