import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, Animated } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { lowestPrice } from "../../../../data";
import { SeeAllHeader } from "../seeAllHeader";
import { windowHeight, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function LowestPrice({ headerData, onPress, style }) {
    const [loading, setLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true,
            }).start();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t, currSymbol, currValue, isDark } = useValues();

    const SkeletonLoader = () => (
        <View style={styles.loaderContainer}>
            <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
            <View style={{ justifyContent: "space-between", flexDirection: viewRtlStyle }}>
                <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
                <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
            </View>
        </View>
    );

    return (
        <View style={styles.mainView}>
            <SeeAllHeader {...headerData} />

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {loading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))
                ) : (
                    lowestPrice.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.lowestPriceView, style]}
                            activeOpacity={0.8}
                            onPress={() => onPress(item)}
                        >
                            <Image resizeMode="contain" source={item.image} style={styles.image} />
                            <Text
                                style={[
                                    styles.name,
                                    { color: colors.text },
                                    { textAlign: textRtlStyle },
                                ]}
                                numberOfLines={2}
                            >
                                {t(item.name)}
                            </Text>
                            <Text style={[styles.gram, { textAlign: textRtlStyle }]}>
                                {t(item.weight)}
                            </Text>
                            <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
                                <Text style={[styles.price, { color: colors.text }]}>
                                    {currSymbol}
                                    {(item.price * currValue).toFixed(2)}
                                </Text>
                                <View style={styles.increase}>
                                    <Icons.increase
                                        height={windowHeight(18)}
                                        width={windowWidth(18)}
                                        color={appColors.white}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={styles.wishList}>
                                <Icons.wishlist />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))
                )}
            </ScrollView>
        </View>
    );
}
