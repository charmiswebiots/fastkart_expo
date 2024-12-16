import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text, Animated } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { useValues } from "../../../../../utils/context";
import { windowHeight } from "../../../../../theme/appConstant";

export function BannerView() {
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

    const { textRtlStyle, rtl, t } = useValues();

    const SkeletonLoader = () => (
        <View style={[styles.loaderContainer, rtl ? { left: windowHeight(130) } : { right: windowHeight(130) }]}>
            <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />

        </View>
    );

    return (
        loading ? (
            <SkeletonLoader />
        ) : (
            <View
                style={[
                    styles.view,
                    rtl ? { left: windowHeight(130) } : { right: windowHeight(130) },
                ]}
            >
                <Image
                    style={[
                        styles.bannerImg,
                        {
                            transform: [{ scaleX: rtl ? -1 : 1 }],
                        },
                    ]}
                    source={images.banner1}
                />
                <View style={styles.contentView}>
                    <Text style={[styles.title, { textAlign: textRtlStyle }]}>
                        {t('homepage.farmFreshVegies')}
                    </Text>
                    <Text style={[styles.subTitle, { textAlign: textRtlStyle }]}>
                        {t('homepage.getInstantDelivery')}
                    </Text>
                </View>
            </View>
        )
    );
}
