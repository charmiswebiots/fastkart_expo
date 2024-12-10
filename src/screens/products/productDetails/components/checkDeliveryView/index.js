import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../../../../theme/appConstant";
import { Icons } from '../../../../../utils/icons'
import { Input } from "../../../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function CheckDeliveryView() {
    const {colors}=useTheme()
    const {viewRtlStyle,textRtlStyle}=useValues()
    return (
        <View>
            <Text style={[styles.checkDelivery,{color:colors.text},{textAlign:textRtlStyle}]}>Check Delivery</Text>
            <Text style={[styles.content, { marginTop: windowHeight(6) },{textAlign:textRtlStyle}]}>Enter Pincode to check delivery date / pickup option</Text>
            <View style={{  marginTop: windowHeight(16) }}>
                <Input placeholder='Pin code' isText text={'Check'} style={styles.input} />
            </View>
            <View style={[styles.deliveryView,{flexDirection:viewRtlStyle}]}>
                <Icons.deliveryTruck />
                <Text style={[styles.content, styles.reviewNameView]}>Free Delivery on order above $200.00</Text>
            </View>
            <View style={[styles.deliveryView,{flexDirection:viewRtlStyle}]}>
                <Icons.payment />
                <Text style={[styles.content, styles.reviewNameView]}>Cash On delivery Available</Text>
            </View>
            <View style={[styles.deliveryView,{flexDirection:viewRtlStyle}]}>
                <Icons.refund />
                <Text style={[styles.content, styles.reviewNameView]}>Easy 21 days returns and exchanges</Text>
            </View>
        </View>
    )
}