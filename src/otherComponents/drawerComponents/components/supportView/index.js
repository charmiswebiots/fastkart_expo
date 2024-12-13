import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import appColors from "../../../../theme/appColors";
import { useValues } from "../../../../utils/context";
import { useTheme } from "@react-navigation/native";

export function SupportView() {
    const {isDark,t}=useValues()
    const {colors}=useTheme()
    return (
        <View style={[styles.supportView, { backgroundColor:isDark? colors.primary:appColors.drawer }]}>
            <Text style={[styles.supportTxt,{color:colors.text}]}>{t('drawer.contactSupport')}</Text>
            <Text style={styles.reactOut}>{t('drawer.reactOut')}</Text>
            <TouchableOpacity style={styles.contactUs}>
                <Text style={styles.contactUsTxt}>{t('drawer.contactUs')}</Text>
            </TouchableOpacity>
        </View>
    )
}