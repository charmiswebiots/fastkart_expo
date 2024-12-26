import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { trendingProducts } from "../../../../data";
import { Counter } from "../../../../../commonComponents";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";
import { useState, useEffect } from 'react';
import ContentLoader, { Rect } from "react-content-loader/native";

interface TrendingProductsProps {
    onPress: (item: any) => void;
}

export function TrendingProducts({ onPress }: TrendingProductsProps): JSX.Element {

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

    const SkeletonLoader = (): JSX.Element => (
    
        <ContentLoader
            speed={1}
            width="100%"
            height={110}
            viewBox="0 0 340 80"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x={rtl ? "260" : "18"} y="10" rx="10" ry="10" width="60" height="60" />
            <Rect x={rtl ? "66" : "90"} y="12" rx="5" ry="5" width="180" height="13" />
            <Rect x={rtl ? "147" : "90"} y="32" rx="5" ry="5" width="100" height="12" />
            <Rect x={rtl ? "188" : "90"} y="58" rx="5" ry="5" width="60" height="12" />
            <Rect x={rtl ? "130" : "160"} y="58" rx="5" ry="5" width="50" height="12" />
            <Rect x={rtl ? "18" : "245"} y="50" rx="5" ry="5" width="75" height="22" />
        </ContentLoader>
    );

    const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue, rtl } = useValues();
    const { colors } = useTheme();

    return (
        <View>
            {loading ? (
                Array.from({ length: 2 }).map((_, index) => (
                    <SkeletonLoader key={index} />
                ))
            ) : (
                trendingProducts.map((item: any, index: number) => (
                    <View
                        key={index}
                        style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}
                    >
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                        <View style={styles.lineView} />
                        <View style={styles.counterView}>
                            <TouchableOpacity onPress={() => onPress(item)} activeOpacity={0.7}>
                                <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
                                <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
                            </TouchableOpacity>
                            <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
                                <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
                                    <Text style={[styles.price, { color: colors.text }]}>
                                        {currSymbol}{(item.price * currValue).toFixed(2)}
                                    </Text>
                                    <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
                                        <Text style={styles.discount}>{item.discount}%</Text>
                                        <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
                                    </View>
                                </View>
                                <Counter />
                            </View>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
}