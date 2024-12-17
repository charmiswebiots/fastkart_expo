import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, Image, Text, TouchableOpacity, Dimensions, Animated } from "react-native";
import styles from "./styles";
import { swiperData } from "../../../../data";
import appColors from "../../../../../theme/appColors";
import { useValues } from "../../../../../utils/context";

export function Slider() {

    const { rtl, t } = useValues()

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

    const SkeletonLoader = () => (
        <View style={styles.loaderContainer}>
            <View style={[styles.skeletonItem]}>
                <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
                <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
                <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
            </View>
        </View>
    );

    return (
        <View style={styles.sliderView}>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <FlatList
                    data={swiperData}
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    snapToInterval={Dimensions.get("window").width - 60}
                    snapToAlignment={"center"}
                    centerContent={true}
                    contentInset={styles.content}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={[styles.sliderView]}>
                            <Image
                                source={item.image}
                                style={[styles.image, { transform: [{ scaleX: rtl ? -1 : 1 }] }]}
                            />
                            <View style={styles.contentView}>
                                <Text
                                    style={[
                                        styles.title,
                                        { textAlign: rtl ? "right" : "left" },
                                        item.id === 2 && { color: appColors.white },
                                    ]}
                                >
                                    {t(item.title)}
                                </Text>
                                <Text
                                    style={[
                                        styles.subTitle,
                                        { textAlign: rtl ? "right" : "left" },
                                        item.id === 2 && { color: appColors.white },
                                    ]}
                                >
                                    {t(item.subTitle)}
                                </Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[
                                        styles.shopNowView,
                                        { alignSelf: rtl ? "flex-end" : "flex-start" },
                                        item.id === 2 && { backgroundColor: appColors.white },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.shopNow,
                                            item.id === 2 && { color: appColors.primary },
                                        ]}
                                    >
                                        {t(item.shopNow)}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );

}

