import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ContentLoader, { Rect } from "react-content-loader/native"; // Importing ContentLoader
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { windowHeight } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

export function EstimatedDeliveryView() {
    const { t ,isDark} = useValues();
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
            height={windowHeight(50)}
            viewBox="0 0 340 50"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="55" y="0" rx="4" ry="4" width="65%" height={windowHeight(20)} /> 
            <Rect x="66" y="33" rx="4" ry="4" width="58%" height={windowHeight(18)} />
        </ContentLoader>
    );

    return (
        <View>
            {loading ? (
                <SkeletonLoader /> // Show skeleton loader while loading
            ) : (
                <>
                    <Text style={styles.deliveryTime}>{t('orderTrackingPage.estimatedDeliveryTime')}</Text>
                    <Text style={styles.trackingTime}>{t('orderTrackingPage.trackingTime')}</Text>
                </>
            )}
        </View>
    );
}
