import React, { useEffect, useState, FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { Icons } from "../../../../../utils/icons";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../../../../theme/appColors";
import { reviewStar } from "../../../../data";
import styles from "./styles";



export const NameView: FC = () => {
    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t, currSymbol, currValue, isDark } = useValues();

    const [loading, setLoading] = useState<boolean>(true);
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

    const SkeletonLoader: FC = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={120}
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
            style={{ marginBottom: 16, borderRadius: 8 }}
        >
            <Rect x="0" y="16" rx="4" ry="4" width="80%" height="20" />
            <Rect x="0" y="50" rx="4" ry="4" width="25%" height="16" />
            <Rect x="100" y="50" rx="4" ry="4" width="30%" height="16" />
            <Rect x="0" y="80" rx="4" ry="4" width="15%" height="16" />
            <Rect x="65" y="80" rx="4" ry="4" width="15%" height="16" />
            <Rect x="130" y="80" rx="4" ry="4" width="20%" height="16" />
        </ContentLoader>
    );

    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <View>
            <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>
                {t('productDetailsPage.productName')}
            </Text>

            <View style={[styles.ratingsView, { flexDirection: viewRtlStyle }]}>
                <View style={{ flexDirection: viewRtlStyle }}>
                    {reviewStar.map((item: { id: string }, key: number) => (
                        key < 4 ? (
                            <Icons.starYellow key={item.id} style={styles.star} />
                        ) : (
                            <Icons.starGrey key={item.id} style={styles.star} />
                        )
                    ))}
                </View>
                <Text style={[styles.ratings, { color: colors.text }]}>
                    {t('productDetailsPage.productRatings')}
                </Text>
            </View>

            <View style={[{ flexDirection: viewRtlStyle }]}>
                <Text style={[styles.txt, { color: colors.text }]}>
                    {currSymbol}{(25 * currValue).toFixed(2)}
                </Text>
                <Text style={[styles.originalPrice,{ color: colors.text }]}>
                    {currSymbol}{(45 * currValue).toFixed(2)}
                </Text>
                <Text style={[styles.discount,{ color: colors.text }]}>
                    {t('productDetailsPage.productDiscount')}
                </Text>
            </View>
        </View>
    );
}