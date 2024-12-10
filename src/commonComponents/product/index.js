import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Counter } from "../counter";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";
import appColors from "../../theme/appColors";

export function Product(props) {

    const { isDark, viewRtlStyle, textRtlStyle } = useValues()
    const { colors } = useTheme()

    return (
        <View style={[styles.mainView, {
            backgroundColor: isDark ? colors.card : appColors.gray
        }, { flexDirection: viewRtlStyle }]}>
            <Image source={props.image} style={styles.image} resizeMode='contain' />
            <View style={styles.lineView} />
            <View style={styles.counterView}>
                <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
                    <Text style={[styles.name, {
                        color: colors.text
                    }, { textAlign: textRtlStyle }]}>{props.name}</Text>
                    <Text style={[styles.weight, {textAlign: textRtlStyle
                    }]}>{props.weight}</Text>
                </TouchableOpacity>
                <View style={[styles.priceView, {
                    flexDirection: viewRtlStyle
                }]}>
                    <View style={[styles.discountPriceView, {  flexDirection: viewRtlStyle
                    }]}>
                        <Text style={[styles.price, { color: colors.text }]}>{props.price}</Text>

                        <View style={[styles.discountView, {  flexDirection: viewRtlStyle
                        }]}>
                            <Text style={styles.discount}>{props.discount}% </Text>
                            <Text style={styles.discount}>off</Text>
                        </View>
                    </View>
                    <Counter />
                </View>

            </View>
        </View>
    )
}