import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { windowHeight, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

export function BannerView() {
    const { rtl, textRtlStyle, t, isDark } = useValues();
    const [loading, setLoading] = useState(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();

    useEffect(() => {
        if (addressLoaded) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);
            }, 3000);
        }
    }, [addressLoaded, setAddressLoaded]);

    const SkeletonImg = () => (
        <ContentLoader
            speed={1}
            width={windowWidth(280)}
            height={windowHeight(140)}
            viewBox={`0 0 ${windowWidth(280)} ${windowHeight(140)}`}
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect
                x="0"
                rx="10"
                ry="10"
                width={windowWidth(280)}
                height={windowHeight(140)}
            />
        </ContentLoader>
    );

    return (
        <View
            style={[
                styles.view,
                rtl ? { left: windowHeight(2) } : { right: windowHeight(4.5) },
            ]}
        >
            {loading ? (
                <SkeletonImg />
            ) : (
                <>
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
                </>
            )}
        </View>
    );
}
