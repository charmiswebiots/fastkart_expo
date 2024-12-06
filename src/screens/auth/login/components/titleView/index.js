import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { useValues } from "../../../../../utils/context";

export function TitleView({ props }) {
    const {isDark}=useValues()
    return (
        <View>
            <Image source={isDark?images.fastKartDark:images.fastkart} style={[styles.fastkartImg]} />
            <Text style={[styles.online]}>{props}</Text>
        </View>
    )
}