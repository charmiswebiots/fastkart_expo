import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function AddressView() {
    const {colors}=useTheme()
    const {textRtlStyle,t}=useValues()
    return (
        <View style={styles.dataView}>
            <Text style={[styles.addTxt,{textAlign:textRtlStyle}]}>{t('orderDetailPage.address')}</Text>
            <View>
                <Text style={[styles.name,{color:colors.text},{textAlign:textRtlStyle}]}>{t('locationArr.locationName')}</Text>
                <Text style={[styles.locationTxt,{textAlign:textRtlStyle}]}>{t('locationArr.locationAddress')}</Text>
            </View>
        </View>
    )
}