import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function AddressView() {
    const {colors}=useTheme()
    const {textRtlStyle}=useValues()
    return (
        <View style={styles.dataView}>
            <Text style={[styles.addTxt,{textAlign:textRtlStyle}]}>Address</Text>
            <View>
                <Text style={[styles.name,{color:colors.text},{textAlign:textRtlStyle}]}>Noah Hamilton </Text>
                <Text style={[styles.locationTxt,{textAlign:textRtlStyle}]}>8857 Morris Rd.,Charlottesville, VA 22901</Text>
            </View>
        </View>
    )
}