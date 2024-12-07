import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function PaymentsMethodView() {

    const {colors}=useTheme()
    const {textRtlStyle,viewRtlStyle}=useValues()
    
    return (
        <View style={styles.paymentView}>
            <Text style={[styles.addTxt,{textAlign:textRtlStyle}]}>Payment Method</Text>

            <View style={[styles.number,{flexDirection:viewRtlStyle}]}>
                <Image source={images.mastercard} style={styles.masterCardImg} />
                <Text style={[styles.cardNumber,{color:colors.text}]}>**** **** ****  6502 </Text>
            </View>
        </View>
    )
}