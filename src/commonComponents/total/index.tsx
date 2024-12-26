import React, { useEffect, useState, FC } from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../theme/appConstant";
import { useLoadingContext, useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../theme/appColors";

interface TotalProps {
    bottom: number;
    style1?: ViewStyle;
    title: string;
    style?: TextStyle;
    btn?: JSX.Element;
}

export const Total: FC<TotalProps> = (props) => {
    const { isDark, textRtlStyle, viewRtlStyle, t, currSymbol, currValue, rtl } = useValues();
    const { colors } = useTheme();

    const [loading, setLoading] = useState<boolean>(false);
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

    const SkeletonTitleLoader: FC = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={30}
            viewBox="0 0 340 30"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect
                x={rtl ? '50%' : 0} y="0" rx="4" ry="4" width="50%" height="30" />
        </ContentLoader>
    );

    const SkeletonDataLoader: FC = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={130}
            viewBox="0 0 380 130"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x={rtl ? 200 : 0} y="18" rx="4" ry="4" width="60%" height="20" />
            <Rect x={rtl ? 1 : 285} y="18" rx="4" ry="4" width="25%" height="20" />
            <Rect x={rtl ? 200 : 0} y="55" rx="4" ry="4" width="60%" height="20" />
            <Rect x={rtl ? 1 : 285} y="55" rx="4" ry="4" width="25%" height="20" />
            <Rect x={rtl ? 200 : 0} y="90" rx="4" ry="4" width="60%" height="20" />
            <Rect x={rtl ? 0 : 285} y="90" rx="4" ry="4" width="25%" height="20" />
        </ContentLoader>
    );

    return (
        <View
            style={[
                styles.mainView,
                { backgroundColor: isDark ? colors.primary : colors.background },
                { marginBottom: props.bottom },
                props.style1,
            ]}
        >
            <View style={{ paddingHorizontal: windowHeight(13) }}>
                {loading ? (
                    <SkeletonTitleLoader />
                ) : (
                    <Text style={[styles.title, props.style, { textAlign: textRtlStyle }]}>
                        {props.title}
                    </Text>
                )}

                {loading ? (
                    <SkeletonDataLoader />
                ) : (
                    <>
                        <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                            <Text style={styles.data}>{t("commonTotal.bagTotal")}</Text>
                            <Text style={styles.data}>{currSymbol}{(220 * currValue).toFixed(2)}</Text>
                        </View>
                        <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                            <Text style={styles.data}>{t("commonTotal.bagSavings")}</Text>
                            <Text style={styles.price}>{currSymbol}{(-20 * currValue).toFixed(2)}</Text>
                        </View>
                        <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                            <Text style={styles.data}>{t("commonTotal.couponDiscount")}</Text>
                            <Text style={styles.coupon}>{t("totalModule.applyCoupon")}</Text>
                        </View>
                        <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
                            <Text style={styles.data}>{t("commonTotal.delivery")}</Text>
                            <Text style={styles.data}>{currSymbol}{(50 * currValue).toFixed(2)}</Text>
                        </View>
                        <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
                            <Text style={[styles.amount, { color: colors.text }]}>
                                {t("commonTotal.totalAmount")}
                            </Text>
                            <Text style={[styles.amount, { color: colors.text }]}>
                                {currSymbol}{(270 * currValue).toFixed(2)}
                            </Text>
                        </View>
                    </>
                )}
            </View>

            {props.btn}
        </View>
    );
}