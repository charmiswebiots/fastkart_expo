import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import images from "../../../../../utils/images";
import styles from "./styles";
import { recentlyBrought } from "../../../../data";

export function RecentlyBought({onPress}) {

  
    return (
        <View style={styles.mainView}>
            <Image source={images.recentlyBought} style={[styles.mainView, {
                position: 'absolute',
            }]} resizeMode='stretch' />
            <Text style={[styles.recentlyBought, {

            }]}>Buy from Recently Bought</Text>
            <View style={[styles.imageView, {
            }]}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container} horizontal>
                    {
                        recentlyBrought.map((item, key) =>
                            <TouchableOpacity activeOpacity={0.8} style={[styles.recentlyImage]} onPress={onPress}>
                                <Image source={item.image} style={styles.image} resizeMode='contain' />
                            </TouchableOpacity>
                        )}
                </ScrollView>
            </View>
        </View >
    )
}