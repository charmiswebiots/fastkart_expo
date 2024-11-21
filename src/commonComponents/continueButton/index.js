import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";

export function ContinueButton({onPress, image, text}) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
            <Image source={image} style={styles.buttonImage} />
            <Text style={[styles.buttonText]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}