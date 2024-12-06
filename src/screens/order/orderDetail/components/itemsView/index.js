import React from "react";
import { View ,Text} from "react-native";
import styles from "./styles";
import { orderDetails } from "../../../../data";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";

export function ItemsView() {
    const {colors}=useTheme()
    return (
        <View>
            <Text style={styles.item}>Items:</Text>
            {
                orderDetails.map((item) =>
                    <View style={[styles.listView]}>
                        <Text style={styles.quantityTxt}>{item.quantity}</Text>
                        <Icons.into />
                        <View style={styles.nameView}>
                            <Text style={[styles.nameTxt,{color:colors.text}]}>{item.name}</Text>
                            <Text style={[styles.gramTxt]}>{item.gram}</Text>
                        </View>
                        <Text style={[styles.price,{color:colors.text}]}>{item.price}</Text>
                    </View>
                )}
        </View>
    )
}