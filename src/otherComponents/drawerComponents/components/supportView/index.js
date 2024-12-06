import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import appColors from "../../../../theme/appColors";
import { useValues } from "../../../../utils/context";
import { useTheme } from "@react-navigation/native";

export function SupportView() {
    const {isDark}=useValues()
    const {colors}=useTheme()
    return (
        <View style={[styles.supportView, { backgroundColor:isDark? colors.primary:appColors.drawer }]}>
            <Text style={[styles.supportTxt,{color:colors.text}]}>Contact Support</Text>
            <Text style={styles.reactOut}>If you have any problem,queries or questions feel free to reach out</Text>
            <TouchableOpacity style={styles.contactUs}>
                <Text style={styles.contactUsTxt}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    )
}