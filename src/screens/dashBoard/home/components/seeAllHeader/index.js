import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function SeeAllHeader({ title, subtitle, onPress }) {

    const { colors}=useTheme()
    const {viewRtlStyle,rtl}=useValues()
    
    return (
        <View style={[styles.mainView,{flexDirection:viewRtlStyle}]}>
            <View>
                <Text style={[styles.title,{color:colors.text},{textAlign:rtl?'right':'left'}]}>{title}</Text>
                <Text style={styles.subTitle}>{subtitle}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
        </View>
    )
}