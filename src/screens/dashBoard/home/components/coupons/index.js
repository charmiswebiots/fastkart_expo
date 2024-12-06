import React from "react";
import { View, ScrollView, Image, Text, ImageBackground } from "react-native";
import styles from "./styles";
import { SeeAllHeader } from "../seeAllHeader";
import { coupons } from "../../../../data";
import images from "../../../../../utils/images";
import { useValues } from "../../../../../utils/context";
import appColors from "../../../../../theme/appColors";
import { useTheme } from "@react-navigation/native";

export function Coupons() {
    const {isDark}=useValues()
    const {colors}=useTheme()
    return (
        <View style={[styles.mainView,{backgroundColor:isDark?colors.primary:appColors.drawer}]}>
            <SeeAllHeader title={'Coupons For You'} subtitle={'Popular Offers of the Day'} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    coupons.map((item, key) =>
                        <ImageBackground
                            key={key}
                            source={
                                isDark
                                    ? key === 0
                                        ? images.offerBG1Dark
                                        : key === 1
                                            ? images.offerBG2Dark
                                            : images.offerBG3Dark
                                    : key === 0
                                        ? images.offerBG1
                                        : key === 1
                                            ? images.offerBG2
                                            : images.offerBG3
                            }
                            resizeMode='cover'
                            style={[styles.dataView]}
                        >
                            <Image source={item.icon} resizeMode='contain' style={styles.image} />
                            <Text style={styles.discount}>{item.discount}% OFF</Text>
                            <Text style={styles.upto}>UPTO $20.00</Text>
                        </ImageBackground>
                    )
                }
            </ScrollView>
        </View>
    );
}
