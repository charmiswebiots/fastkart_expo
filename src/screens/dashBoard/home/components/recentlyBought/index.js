import React, { useEffect, useRef, useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity, Animated } from "react-native";
import images from "../../../../../utils/images";
import styles from "./styles";
import { recentlyBrought } from "../../../../data";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";

export function RecentlyBought({ onPress }) {

    const { isDark, rtl, t } = useValues();
    const { colors } = useTheme();


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



    const SkeletonLoader = () => {
        const skeletonData = Array(6).fill({}); 

        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.loaderContainer}
            >
                {skeletonData.map((_, index) => (
                    <View key={index} style={styles.skeletonItem}>
                        <Animated.View
                            style={[styles.skeletonImage, { opacity: fadeAnim }]}
                        />
                    </View>
                ))}
            </ScrollView>
        );
    };

 
    return (
        <View style={styles.mainView}>
            <Image
                source={isDark ? images.recentlyBoughtDark : images.recentlyBought}
                style={[
                    styles.mainView,
                    {
                        position: 'absolute',
                        transform: [{ scaleX: rtl ? -1 : 1 }],
                    },
                ]}
                resizeMode="stretch"
            />
            <Text
                style={[
                    styles.recentlyBought,
                    { color: colors.text, textAlign: rtl ? 'right' : 'left' },
                ]}
            >
                {t('homepage.recentlyBrought')}
            </Text>
            <View style={styles.imageView}>
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.container}
                        horizontal
                    >
                        {recentlyBrought.map((item, key) => (
                            <TouchableOpacity
                                key={key}
                                activeOpacity={0.8}
                                style={[
                                    styles.recentlyImage,
                                    { backgroundColor: colors.card },
                                ]}
                                onPress={onPress}
                            >
                                <Image
                                    source={item.image}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
            </View>
        </View>
    );

}
