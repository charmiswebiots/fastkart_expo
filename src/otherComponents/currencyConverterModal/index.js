import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { GlobalStyle } from "../../styles/style";
import styles from "./styles";
import { windowWidth } from "../../theme/appConstant";
import { currencys } from "../../screens/data";
import { useTheme } from "@react-navigation/native";

export function CurrencyConverterModal() {
    const {colors}=useTheme()
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[styles.text, { color: colors.text, textAlign: 'left' }]}>Select Currency</Text>
            {currencys.map((item) =>
                <TouchableOpacity activeOpacity={0.8}  style={[styles.icon, { flexDirection: 'row' }]}>
                    {item.icons}
                    <Text style={[styles.text, { color: colors.text, marginLeft: windowWidth(20) }]}>{item.name}  </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}