import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";

export function PaymentsMethodView() {
    return (
        <View style={styles.paymentView}>
            <Text style={[styles.addTxt]}>Payment Method</Text>

            <View style={[styles.number]}>
                <Image source={images.mastercard} style={styles.masterCardImg} />
                <Text style={[styles.cardNumber]}>**** **** ****  6502 </Text>
            </View>
        </View>
    )
}