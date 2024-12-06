import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../theme/appColors";

export function ContinueButton({onPress, image, text}) {
    const {colors}=useTheme()
    const {isDark}=useValues()
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.button,{backgroundColor:isDark?colors.primary:appColors.gray}]}>
            <Image source={image} style={styles.buttonImage} />
            <Text style={[styles.buttonText,{color:colors.text}]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}