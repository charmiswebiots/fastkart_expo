import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { windowWidth } from "../../theme/appConstant";
import { langauges } from "../../screens/data";
import { GlobalStyle } from "../../styles/style";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function MultiLangaugeModal() {
    const {colors}=useTheme()
    const {textRtlStyle,viewRtlStyle}=useValues()
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[styles.text, { color: colors.text, textAlign: textRtlStyle }]}>Select Language</Text>
            {langauges.map((item) =>
                <TouchableOpacity activeOpacity={0.8}  style={[styles.icon, { flexDirection: viewRtlStyle }]}>
                    {item.icons}
                    <Text style={[styles.text, { color: colors.text, marginLeft: windowWidth(20) }]}>{item.name}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}