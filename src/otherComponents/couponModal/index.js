import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { termsCondition } from "../../screens/data";
import { useTheme } from "@react-navigation/native";

export function CouponModal(props) {
    const {colors}=useTheme()
    return (
        <View style={[styles.mainView, { backgroundColor: colors.background }]}>
            <View style={styles.offView}>
                <Text style={[styles.flatTxt]}>Flat 50% off</Text>
                <Text style={[styles.offTxt]}>on order above $250.00</Text>
                <TouchableOpacity onPress={props.showModal} activeOpacity={0.8} style={styles.codeView}>
                    <Text style={styles.codeTxt}>Code: SCD450</Text>
                    <Text style={styles.copyCode}>Copy Code</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.termsView,{backgroundColor:colors.primary}]}>
                <Text style={[styles.txt]}>Terms & conditions</Text>
                {termsCondition.map((item) => (
                    <View style={[styles.keyView]} key={item.id}>
                        <Text style={[styles.txt]}>{item.terms}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
