import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../utils/images";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

export function ProfileView() {
    const { colors } = useTheme()
    const {viewRtlStyle,textRtlStyle}=useValues()
    return (
        <View style={[styles.profileView,{flexDirection:viewRtlStyle}]}>
            <Image source={images.demoProfile} resizeMode='contain' style={styles.profileImg} />
            <View style={styles.dataView}>
                <Text style={[styles.name, { color: colors.text ,textAlign:textRtlStyle}]}>Andrea Joanne</Text>
                <Text style={[styles.email,{textAlign:textRtlStyle}]}>andreajoanne@gmail.com</Text>
            </View>
        </View>
    )
}