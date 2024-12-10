import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { termsCondition } from "../../screens/data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function CouponModal(props) {

    const { colors } = useTheme()
    const { textRtlStyle, viewRtlStyle } = useValues()

    return (
        <View style={[styles.mainView, { backgroundColor: colors.background }]}>
            <View style={styles.offView}>
                <Text style={[styles.flatTxt, { textAlign: textRtlStyle }]}>Flat 50% off</Text>
                <Text style={[styles.offTxt, { textAlign: textRtlStyle }]}>on order above $250.00</Text>
                <TouchableOpacity onPress={props.showModal} activeOpacity={0.8} style={[styles.codeView, { flexDirection: viewRtlStyle }]}>
                    <Text style={styles.codeTxt}>Code: SCD450</Text>
                    <Text style={styles.copyCode}>Copy Code</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.termsView, { backgroundColor: colors.primary }]}>
                <Text style={[styles.txt,{ textAlign: textRtlStyle }]}>Terms & conditions</Text>
                {termsCondition.map((item) => (
                    <View style={[styles.keyView, { flexDirection: viewRtlStyle }]} key={item.id}>
                        <Text style={[styles.txt,{ textAlign: textRtlStyle }]}>{item.terms}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
