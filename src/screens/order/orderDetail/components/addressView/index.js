import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";

export function AddressView() {
    const {colors}=useTheme()
    return (
        <View style={styles.dataView}>
            <Text style={[styles.addTxt]}>Address</Text>
            <View>
                <Text style={[styles.name,{color:colors.text}]}>Noah Hamilton </Text>
                <Text style={[styles.locationTxt]}>8857 Morris Rd.,Charlottesville, VA 22901</Text>
            </View>
        </View>
    )
}