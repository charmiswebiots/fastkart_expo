import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { data } from "../../../../data";
import { Counter } from "../../../../../commonComponents";
import images from "../../../../../utils/images";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";
import ContentLoader, { Rect } from "react-content-loader/native";

export function DataView() {
    const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue,rtl } = useValues();
    const { colors } = useTheme();
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
            height={115}
            viewBox="0 0 340 80"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            {/* <Rect x="15" y="10" rx="10" ry="10" width="70" height="70" />
            <Rect x="98" y="12" rx="5" ry="5" width="200" height="15" />
            <Rect x="98" y="35" rx="5" ry="5" width="100" height="15" />
            <Rect x="98" y="64" rx="5" ry="5" width="60" height="15" />
            <Rect x="166" y="64" rx="5" ry="5" width="50" height="15" />
            <Rect x="250" y="59" rx="5" ry="5" width="75" height="22" /> */}
              <Rect x={rtl ? '250' : '15'} y="10" rx="10" ry="10" width="70" height="70" />
      <Rect x={rtl ? '40' : '98'} y="12" rx="5" ry="5" width="200" height="15" />
      <Rect x={rtl ? '140' : '98'} y="35" rx="5" ry="5" width="100" height="15" />
      <Rect x={rtl ? '120' : '98'} y="64" rx="5" ry="5" width="60" height="15" />
      <Rect x={rtl ? '190' : '166'} y="64" rx="5" ry="5" width="50" height="15" />
      <Rect x={rtl ? '20' : '250'} y="59" rx="5" ry="5" width="75" height="22" />
        </ContentLoader>
    );

    return (
        <View style={styles.container}>
            {loading ? (
                Array(5).fill().map((_, index) => (
                    <SkeletonLoader key={index} />
                ))
            ) : (
                data.map((item, key) => (
                    key === 3 ? (
                        <Image key={key} source={images.categoryBanner} style={styles.img} />
                    ) : (
                        <View key={key} style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
                            <Image source={item.image} style={styles.image} resizeMode="contain" />
                            <View style={styles.lineView} />
                            <View style={styles.counterView}>
                                <TouchableOpacity onPress={item.onPress} activeOpacity={0.7}>
                                    <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
                                    <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
                                </TouchableOpacity>
                                <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
                                    <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
                                        <Text style={[styles.price, { color: colors.text }]}>{currSymbol}{(item.price * currValue).toFixed(2)}</Text>
                                        <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
                                            <Text style={styles.discount}>{item.discount}% </Text>
                                            <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
                                        </View>
                                    </View>
                                    <Counter />
                                </View>
                            </View>
                        </View>
                    )
                ))
            )}
        </View>
    );
}
