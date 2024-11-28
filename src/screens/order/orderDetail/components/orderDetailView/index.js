import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";

export function OrderDetailView() {
    return (

        <View style={[styles.orderDetailView]}>
            <Icons.OrderDetails />
            <View style={styles.idView}>
                <Text style={styles.id}>Order ID : #5151515</Text>
                <Text style={[styles.orderDeliver]}>Order Delivered</Text>
            </View>
        </View>
    )
}