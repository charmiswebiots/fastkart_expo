import React from "react";
import { View, SafeAreaView, ScrollView, Image, Text } from "react-native";
import styles from "./styles";
import images from "../../../utils/images";
import { ContinueButton } from "../../../commonComponents";
import { windowHeight } from "../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

export function OnBoarding() {
    const {colors}=useTheme()
    const {isDark}=useValues()
    return (
        <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageView}>
                    <Image source={images.onBoarding} style={styles.image} />
                </View>
                <View style={styles.contentView}>
                    <Image source={isDark?images.fastKartDark:images.fastkart} />
                    <Text style={[styles.safeDelivery, { color: colors.text }]}>Get Safe Delivery At Your Door Step</Text>
                    <Text style={styles.onlineSupermarket}>Online Supermarket for all your daily needs. you are just One Click away from your all needs at your door step. </Text>

                    <ContinueButton image={images.phone} text={'Continue with Phone'} />
                    <View style={{ bottom: windowHeight(15) }}>
                        <ContinueButton image={images.google} text={'Continue with Google'} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}