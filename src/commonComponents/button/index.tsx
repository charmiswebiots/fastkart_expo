import React, { FC } from "react";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import styles from "./styles";
import { useValues } from "../../utils/context";

interface ButtonProps {
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    color: string;
    text: string;
}

export const Button: FC<ButtonProps> = ({ onPress, style, color, text }) => {
    const { viewRtlStyle } = useValues();
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