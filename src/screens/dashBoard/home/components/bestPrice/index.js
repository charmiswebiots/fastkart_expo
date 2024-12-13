import React from "react";
import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import { bestPrice } from "../../../../data";
import styles from "./styles";
import { SeeAllHeader } from "../seeAllHeader";
import { Icons } from "../../../../../utils/icons";
import { windowHeight, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function BestPrice({ headerData, onPress }) {
    const { colors } = useTheme()
    const { textRtlStyle, viewRtlStyle, t, currSymbol, currValue } = useValues()
    return (
        <View style={styles.mainView}>
            <SeeAllHeader  {...headerData} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    bestPrice.map((item, key) =>
                        <TouchableOpacity key={key} style={styles.lowestPriceView} activeOpacity={0.8} onPress={onPress}>
                            <Image resizeMode='contain' source={item.image} style={styles.image} />
                            <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]} numberOfLines={2}>{t(item.name)}</Text>
                            <Text style={[styles.gram, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
                            <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
                                <Text style={[styles.price, { color: colors.text }]}>
                                    {currSymbol}{(item.price * currValue).toFixed(2)}
                                </Text>                               
                                 <View style={styles.increase}>
                                    <Icons.increase height={windowHeight(18)} width={windowWidth(18)} color={appColors.white} />
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={styles.wishList}>
                                <Icons.wishlist />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    )
}