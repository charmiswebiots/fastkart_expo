import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";

export function Selected() {
    return (
        <View style={[styles.selectView, styles.selectLeft]}>
            <Icons.select />
        </View>
    )
}