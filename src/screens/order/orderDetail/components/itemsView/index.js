import React from "react";
import { View ,Text} from "react-native";
import styles from "./styles";
import { orderDetails } from "../../../../data";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function ItemsView() {
    const {colors}=useTheme()
    const {viewRtlStyle,textRtlStyle,t}=useValues()
    return (
        <View>
            <Text style={styles.item}>{t('orderDetailPage.items')}</Text>
            {
                orderDetails.map((item) =>
                    <View style={[styles.listView,{flexDirection:viewRtlStyle}]}>
                        <Text style={styles.quantityTxt}>{item.quantity}</Text>
                        <Icons.into />
                        <View style={styles.nameView}>
                            <Text style={[styles.nameTxt,{color:colors.text}]}>{t(item.name)}</Text>
                            <Text style={[styles.gramTxt,{textAlign:textRtlStyle}]}>{t(item.gram)}</Text>
                        </View>
                        <Text style={[styles.price,{color:colors.text},{textAlign:textRtlStyle}]}>{item.price}</Text>
                    </View>
                )}
        </View>
    )
}