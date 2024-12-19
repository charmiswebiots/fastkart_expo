import { View, Image, SafeAreaView } from "react-native";
import React from "react";
import styles from "./styles";
import images from "../../../utils/images";
import { useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

export function Splash({ navigation }) {

    const {colors}=useTheme()
    const {isDark}=useValues()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        }, 1000);
    }, []);

    return (
        <SafeAreaView style={[styles.mainView,{backgroundColor:colors.background}]}>
            <Image source={images.splash} style={{ width: '100%' }} />
            <View style={styles.logo}>
                <Image source={isDark?images.fastKartDark:images.appLogo} style={styles.img} />
            </View>
        </SafeAreaView>
    )
}

