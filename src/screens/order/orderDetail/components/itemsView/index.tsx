import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { orderDetails } from "../../../../data";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../../../../theme/appColors";

export function ItemsView() {
    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t, currSymbol, currValue, isDark } = useValues();
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
            height={60}
            viewBox="0 0 390 60"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="15" y="12" rx="5" ry="5" width="25" height="32" />
            <Rect x="50" y="16" rx="5" ry="5" width="18" height="24" />

            <Rect x="80" y="15" rx="5" ry="5" width="200" height="25" />
            <Rect x="305" y="15" rx="5" ry="5" width="71" height="25" />
        </ContentLoader>
    );

    return (
        <View>
            <Text style={styles.item}>{t("orderDetailPage.items")}</Text>
            {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                    <View key={index} style={styles.skeletonContainer}>
                        <SkeletonLoader />
                    </View>
                ))
            ) : (
                orderDetails.map((item, index) => (
                    <View
                        key={index}
                        style={[styles.listView, { flexDirection: viewRtlStyle }]}
                    >
                        <Text style={styles.quantityTxt}>{item.quantity}</Text>
                        <Icons.into />
                        <View style={styles.nameView}>
                            <Text style={[styles.nameTxt, { color: colors.text }]}>
                                {t(item.name)}
                            </Text>
                            <Text
                                style={[styles.gramTxt, { textAlign: textRtlStyle }]}
                            >
                                {t(item.gram)}
                            </Text>
                        </View>
                        <Text
                            style={[
                                styles.price,
                                { color: colors.text, textAlign: textRtlStyle },
                            ]}
                        >
                            {currSymbol}
                            {(item.price * currValue).toFixed(2)}
                        </Text>
                    </View>
                ))
            )}
        </View>
    );
}
