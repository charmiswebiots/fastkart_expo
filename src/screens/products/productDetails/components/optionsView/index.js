import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";
import appColors from "../../../../../theme/appColors";

export function OptionsView(props) {

    const {colors}=useTheme()
    const {isDark,viewRtlStyle}=useValues()

    return (
        <View style={[styles.optionMainView,{flexDirection:viewRtlStyle}]}>
            <TouchableOpacity activeOpacity={0.8} onPress={props.visibleQuantityModal} style={[styles.option,{backgroundColor:isDark?colors.primary:appColors.gray},{flexDirection:viewRtlStyle}]}>
                <Text style={[styles.optionTxt,{color:colors.text}]}>500 g / $24.00</Text>
                <Icons.dropDown />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={props.visibleDeliveryModal} style={[styles.option,{backgroundColor:isDark?colors.primary:appColors.gray},{flexDirection:viewRtlStyle}]}>
                <Text style={[styles.optionTxt,{color:colors.text}]}>{t('productDetailsPage.deliveryTime')}</Text>
                <Icons.dropDown />
            </TouchableOpacity>
        </View>
    )
}