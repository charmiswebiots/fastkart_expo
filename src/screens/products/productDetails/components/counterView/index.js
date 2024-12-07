import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import appColors from "../../../../../theme/appColors";
import { Icons } from "../../../../../utils/icons";
import { Counter } from "../../../../../commonComponents";
import { useValues } from "../../../../../utils/context";

export function CounterView({ navigation }) {

    const { viewRtlStyle, rtl } = useValues()
    const cart = () => {
        navigation.navigate('Cart')
    }

    return (
        <View style={[styles.counterView, { flexDirection: viewRtlStyle }]}>
            <Counter color={appColors.primary} style={styles.counter} />
            <TouchableOpacity activeOpacity={0.7} onPress={cart} style={{ flexDirection: viewRtlStyle }}>
                <Text style={styles.addToCart}>Add to Cart</Text>
                <View style={{ transform: [{ scaleX: rtl ? -1 : 1 }] }}>
                    <Icons.sideArrow color={appColors.white} />
                </View>
            </TouchableOpacity>
        </View>

    )
}