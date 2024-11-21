import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";

export function TitleView({ props }) {
    return (
        <View>
            <Image source={images.fastkart} style={[styles.fastkartImg]} />
            <Text style={[styles.online]}>{props}</Text>
        </View>
    )
}