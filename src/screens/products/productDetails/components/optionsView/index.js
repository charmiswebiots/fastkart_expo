import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";

export function OptionsView(props) {
    return (
        <View style={[styles.optionMainView]}>
            <TouchableOpacity activeOpacity={0.8} onPress={props.visibleQuantityModal} style={[styles.option]}>
                <Text style={[styles.optionTxt]}>500 g / $24.00</Text>
                <Icons.dropDown />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={props.visibleDeliveryModal} style={[styles.option]}>
                <Text style={[styles.optionTxt]}>Delivery Time</Text>
                <Icons.dropDown />
            </TouchableOpacity>
        </View>
    )
}