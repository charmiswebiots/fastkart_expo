import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";
import { shopCategory } from "../../../../data";
import appColors from "../../../../../theme/appColors";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import ContentLoader, { Rect } from "react-content-loader/native";

export function CategoryView() {
    const { isDark, viewRtlStyle, t } = useValues();
    const { colors } = useTheme();
    const [selectCategory, setSelectCategory] = useState(0);

    const selectedCategory = (key) => {
        setSelectCategory(key);
    };
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

    return (
        <ScrollView style={[styles.list, { backgroundColor: isDark ? colors.primary : appColors.gray }]} horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.category, { flexDirection: viewRtlStyle }]}>
                {loading ? (
                    <ContentLoader
                        speed={1}
                        width={350}
                        height={40}
                        viewBox="0 0 350 40"
                        backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
                        foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
                    >
                        <Rect x="0" y="5" rx="4" ry="4" width="160" height="30" />
                        <Rect x="175" y="5" rx="4" ry="4" width="150" height="30" />
                        <Rect x="340" y="5" rx="4" ry="4" width="150" height="30" />
                    </ContentLoader>
                ) : (
                    shopCategory.map((item, key) => (
                        <TouchableOpacity key={key} activeOpacity={0.8} onPress={() => selectedCategory(key)}>
                            <Text style={[styles.name, { color: key === selectCategory ? appColors.primary : colors.text }]}>
                                {t(item.name)}
                            </Text>
                        </TouchableOpacity>
                    ))
                )}
            </View>
        </ScrollView>
    );
}
