import { View, Text } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../theme/appConstant";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";

export function Total(props) {

    const { isDark, textRtlStyle, viewRtlStyle, t,currSymbol,currValue } = useValues()
    const { colors } = useTheme()

    return (
        <View
            style={[
                styles.mainView,
                { backgroundColor: isDark ? colors.primary : colors.background },
                { marginBottom: props.bottom },
                props.style1,
            ]}
        >
            <View style={{ paddingHorizontal: windowHeight(13) }}>
                <Text style={[styles.title, props.style, { textAlign: textRtlStyle }]}>{(props.title)}</Text>
                <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                    <Text style={styles.data}>{t('commonTotal.bagTotal')}</Text>
                    <Text style={styles.data}>{currSymbol}{(220 * currValue).toFixed(2)}</Text>
                </View>
                <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                    <Text style={styles.data}>{t('commonTotal.bagSavings')}</Text>
                    <Text style={styles.price}>{currSymbol}{(-20 * currValue).toFixed(2)}</Text>
                </View>
                <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                    <Text style={styles.data}>{t('commonTotal.couponDiscount')}</Text>
                    <Text style={styles.coupon}>{t('totalModule.applyCoupon')}</Text>
                </View>
                <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
                    <Text style={styles.data}>{t('commonTotal.delivery')}</Text>
                    <Text style={styles.data}>{currSymbol}{(50 * currValue).toFixed(2)}</Text>
                </View>
                <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
                    <Text style={[styles.amount, { color: colors.text }]}>{t('commonTotal.totalAmount')}</Text>

                    <Text style={[styles.amount, { color: colors.text }]}>{currSymbol}{(270 * currValue).toFixed(2)}</Text>
                    {/* <Text style={[styles.price, { color: colors.text }]}>
                        {currSymbol}{(item.price * currValue).toFixed(2)}
                    </Text> */}
                </View>
            </View>
            {props.btn}
        </View>
    )
}