import { ScrollView, Text, TouchableOpacity, Animated, View } from "react-native";
import styles from "./styles";
import { orderHistoryTime } from "../../../../data";
import { useState, useEffect, useRef } from "react";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";
import ContentLoader, { Rect } from "react-content-loader/native";

export function OrderHistoryTime() {
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
            width={100}
            height={40}
            viewBox="0 0 100 40"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="22" y="12" rx="4" ry="4" width="140" height="30" />
        </ContentLoader>
    );

    const { isDark, viewRtlStyle, t } = useValues();
    const { colors } = useTheme();
    const [selected, setSelected] = useState(0);

    const changeSelected = (key) => {
        setSelected(key);
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.scrollView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}
        >
            {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonLoader key={index} />
                ))
            ) : (
                orderHistoryTime.map((item, key) => (
                    <TouchableOpacity key={key} activeOpacity={0.8} onPress={() => changeSelected(key)}>
                        <Text style={[styles.time, { color: colors.text }, key === selected && styles.primaryText]}>
                            {t(item.time)}
                        </Text>
                    </TouchableOpacity>
                ))
            )}
        </ScrollView>
    );
}
