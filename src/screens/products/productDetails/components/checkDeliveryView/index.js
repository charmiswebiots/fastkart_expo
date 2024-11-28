import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../../../../theme/appConstant";
import { Icons } from '../../../../../utils/icons'
import { Input } from "../../../../../commonComponents";

export function CheckDeliveryView(props) {
    return (
        <View>
            <Text style={[styles.checkDelivery]}>Check Delivery</Text>
            <Text style={[styles.content, { marginTop: windowHeight(6) }]}>Enter Pincode to check delivery date / pickup option</Text>
            <View style={{ right: windowHeight(13), marginTop: windowHeight(16) }}>
                <Input placeholder='Pin code' isText text={'Check'} style={styles.input} />
            </View>
            <View style={[styles.deliveryView]}>
                <Icons.deliveryTruck />
                <Text style={[styles.content, styles.reviewNameView]}>Free Delivery on order above $200.00</Text>
            </View>
            <View style={[styles.deliveryView]}>
                <Icons.payment />
                <Text style={[styles.content, styles.reviewNameView]}>Cash On delivery Available</Text>
            </View>
            <View style={[styles.deliveryView]}>
                <Icons.refund />
                <Text style={[styles.content, styles.reviewNameView]}>Easy 21 days returns and exchanges</Text>
            </View>
        </View>
    )
}