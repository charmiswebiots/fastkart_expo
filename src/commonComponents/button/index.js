import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { useValues } from "../../utils/context";


export function Button({ onPress, style, color, text }) {
    const { viewRtlStyle } = useValues()
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[style, styles.button, { flexDirection: viewRtlStyle }]}
        >
            <Text style={[styles.buttonText, { color: color }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
