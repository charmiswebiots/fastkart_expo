import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { useValues } from "../../../../../utils/context";

export function OrderDetailView() {
    const {viewRtlStyle}=useValues()
    return (

        <View style={[styles.orderDetailView,{flexDirection:viewRtlStyle}]}>
            <Icons.OrderDetails />
            <View style={styles.idView}>
                <Text style={styles.id}>Order ID : #5151515</Text>
                <Text style={[styles.orderDeliver]}>Order Delivered</Text>
            </View>
        </View>
    )
}