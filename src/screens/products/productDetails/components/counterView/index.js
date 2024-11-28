import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import appColors from "../../../../../theme/appColors";
import { Icons } from "../../../../../utils/icons";
import { useNavigation } from "@react-navigation/native";
import { Counter } from "../../../../../commonComponents";

export function CounterView() {

    const navigation = useNavigation()

    const cart = () => {
        navigation.navigate('Cart')
    }

    return (
        <View style={[styles.counterView, { flexDirection: 'row' }]}>
            <Counter color={appColors.primary} style={styles.counter} />
            <TouchableOpacity activeOpacity={0.7} onPress={cart} style={{ flexDirection: 'row' }}>
                <Text style={styles.addToCart}>Add to Cart</Text>
                <View style={{ transform: [{ scaleX: 1 }] }}>
                    <Icons.sideArrow color={appColors.white} />
                </View>
            </TouchableOpacity>
        </View>

    )
}