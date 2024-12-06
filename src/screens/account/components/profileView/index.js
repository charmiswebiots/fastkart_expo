import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../utils/images";
import { useTheme } from "@react-navigation/native";

export function ProfileView() {
    const { colors } = useTheme()
    return (
        <View style={styles.profileView}>
            <Image source={images.demoProfile} resizeMode='contain' style={styles.profileImg} />
            <View style={styles.dataView}>
                <Text style={[styles.name, { color: colors.text }]}>Andrea Joanne</Text>
                <Text style={styles.email}>andreajoanne@gmail.com</Text>
            </View>
        </View>
    )
}