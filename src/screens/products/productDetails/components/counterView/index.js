import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import appColors from "../../../../../theme/appColors";
import { Icons } from "../../../../../utils/icons";
import { Counter } from "../../../../../commonComponents";
import { useValues } from "../../../../../utils/context";
import { useNavigation } from "@react-navigation/native";

export function CounterView() {
    const navigation=useNavigation()

    const cart=()=>{
        navigation.navigate('Cart')
    }


    const { viewRtlStyle, rtl ,t} = useValues()

    return (
        <View style={[styles.counterView, { flexDirection: viewRtlStyle }]}>
            <Counter color={appColors.primary} style={styles.counter} />
            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: viewRtlStyle }} onPress={cart}>
                <Text style={styles.addToCart}>{t('productDetailsPage.addToCart')}</Text>
                <View style={{ transform: [{ scaleX: rtl ? -1 : 1 }] }}>
                    <Icons.sideArrow color={appColors.white} />
                </View>
            </TouchableOpacity>
        </View>

    )
}