import React from "react";
import { TouchableOpacity ,Text} from "react-native";
import styles from "./styles";


export function Button({ onPress, style, color, text }) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[style, styles.button]}
        >
            <Text style={[styles.buttonText, { color: color }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
