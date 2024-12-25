import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../../../../theme/appColors";
import { windowHeight } from "../../../../../theme/appConstant";

export function AddressView() {
    const { colors } = useTheme();
    const { t, isDark, rtl } = useValues();

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

    const SkeletonLoader = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={windowHeight(120)}
            viewBox="0 0 340 120"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}>
            <Rect x="0" y="8" rx="4" ry="4" width="10%" height={windowHeight(33)} />
            <Rect x="45" y="9" rx="4" ry="4" width="85%" height={windowHeight(14)} />
            <Rect x="45" y="30" rx="4" ry="4" width="30%" height={windowHeight(14)} />
            <Rect x="0" y="80" rx="4" ry="4" width="10%" height={windowHeight(33)} />
            <Rect x="45" y="80" rx="4" ry="4" width="85%" height={windowHeight(14)} />
            <Rect x="45" y="103" rx="4" ry="4" width="30%" height={windowHeight(14)} />
        </ContentLoader>
    );

    return (
        <View style={[styles.location]}>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <>
                    <View>
                        <Image source={images.seprator} style={styles.sepratorImg} />
                        <View style={styles.homeView}>
                            <View style={[styles.option]}>
                                <Icons.home />
                            </View>
                            <View style={[styles.option]}>
                                <Icons.location color />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.storeLocation, styles.storeRight]}>
                        <View>
                            <Text style={[styles.locationTxt, { color: colors.text }]}>{t('orderTrackingPage.location')}</Text>
                            <Text style={[styles.storeLocationTxt]}>{t('orderTrackingPage.storeLocation')}</Text>
                        </View>
                        <View>
                            <Text style={[styles.locationTxt, { color: colors.text }]}>{t('orderTrackingPage.location')}</Text>
                            <Text style={[styles.storeLocationTxt]}>{t('orderTrackingPage.deliveryLocation')}</Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}
