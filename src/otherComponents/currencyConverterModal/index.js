import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { GlobalStyle } from "../../styles/style";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { windowWidth } from "../../theme/appConstant";
import { currencys } from "../../screens/data";

export function CurrencyConverterModal() {
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: appColors.white }]}>
            <Text style={[styles.text, { color: appColors.black, textAlign: 'left' }]}>Select Currency</Text>
            {currencys.map((item) =>
                <TouchableOpacity activeOpacity={0.8}  style={[styles.icon, { flexDirection: 'row' }]}>
                    {item.icons}
                    <Text style={[styles.text, { color: appColors.black, marginLeft: windowWidth(20) }]}>{item.name}  </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}