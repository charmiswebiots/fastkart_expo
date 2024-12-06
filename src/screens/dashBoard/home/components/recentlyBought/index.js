import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import images from "../../../../../utils/images";
import styles from "./styles";
import { recentlyBrought } from "../../../../data";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";

export function RecentlyBought({ onPress }) {
    const { isDark } = useValues()
    const { colors } = useTheme()


    return (
        <View style={styles.mainView}>
            <Image source={isDark ? images.recentlyBoughtDark : images.recentlyBought} style={[styles.mainView, {
                position: 'absolute',
            }]} resizeMode='stretch' />
            <Text style={[styles.recentlyBought, {color:colors.text}]}>Buy from Recently Bought</Text>
            <View style={[styles.imageView, {
            }]}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container} horizontal>
                    {
                        recentlyBrought.map((item, key) =>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.recentlyImage,{backgroundColor:colors.card}]} onPress={onPress}>
                                <Image source={item.image} style={styles.image} resizeMode='contain' />
                            </TouchableOpacity>
                        )}
                </ScrollView>
            </View>
        </View >
    )
}