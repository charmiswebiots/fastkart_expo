import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../../../../theme/appColors";


export function PaymentsMethodView() {
    const { colors } = useTheme();
    const { textRtlStyle, viewRtlStyle, t, isDark } = useValues();

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
            height={100}
            viewBox="0 0 360 100"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="0" y="15" rx="25" ry="25" width="15%" height="55" />
            <Rect x="73" y="28" rx="4" ry="4" width="60%" height="25" />
        </ContentLoader>
    );

    return (
        <View style={styles.paymentView}>
            <Text style={[styles.addTxt, { textAlign: textRtlStyle }]}>
                {t('orderDetailPage.paymentMethod')}
            </Text>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <View style={[styles.number, { flexDirection: viewRtlStyle }]}>
                    <Image source={images.mastercard} style={styles.masterCardImg} />
                    <Text style={[styles.point, { color: colors.text }]}>**** **** ****</Text>
                    <Text style={[styles.cardNumber, { color: colors.text }]}>
                        {t('orderDetail.cardNumber')}
                    </Text>
                </View>
            )}
        </View>
    );
}
