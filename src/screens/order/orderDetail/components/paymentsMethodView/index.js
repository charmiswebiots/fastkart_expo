import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { useTheme } from "@react-navigation/native";

export function PaymentsMethodView() {
    const {colors}=useTheme()
    return (
        <View style={styles.paymentView}>
            <Text style={[styles.addTxt]}>Payment Method</Text>

            <View style={[styles.number]}>
                <Image source={images.mastercard} style={styles.masterCardImg} />
                <Text style={[styles.cardNumber,{color:colors.text}]}>**** **** ****  6502 </Text>
            </View>
        </View>
    )
}