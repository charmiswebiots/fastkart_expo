import React, { useState } from "react";
import { View, Text, TouchableOpacity, NativeModules, LayoutAnimation } from "react-native";
import styles from "./styles";
import appColors from "../../../../../theme/appColors";
import { Icons } from "../../../../../utils/icons";
import { windowHeight } from "../../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function DetailsView() {
    const { textRtlStyle, viewRtlStyle, rtl, t } = useValues()
    const { colors } = useTheme()
    const [showManufacturer, setShowManufacturer] = useState(true);
    const [showProductDesc, setShowProductDesc] = useState(false);
    const [showFeature, setShowFeature] = useState(false);

    const { UIManager } = NativeModules;

    if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const showValue = (manufacturer, product, feature) => {
        LayoutAnimation.easeInEaseOut();
        setShowManufacturer(manufacturer);
        setShowProductDesc(product);
        setShowFeature(feature);
    };

    const getTitle = () => {
        if (showManufacturer) return "Manufacturer Details";
        if (showProductDesc) return "Product Disclaimer";
        if (showFeature) return "Features & Details";
        return "Product Details";
    };

    return (
        <View>
            <Text style={[styles.detail, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('productDetailsPage.detailTitle')}</Text>
            <Text style={[styles.title, { textAlign: textRtlStyle }]}>
                {t('productDetailsPage.detailDesc')}
            </Text>
            <View style={styles.style1} />
            <TouchableOpacity
                onPress={() => showValue(!showManufacturer, false, false)}
                activeOpacity={0.7}
                style={[styles.optionView, { flexDirection: viewRtlStyle }]}
            >
                <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('productDetailsPage.manufacturerDetails')}</Text>
                <View
                    style={{
                        transform: [
                            { scaleX: rtl ? -1 : 1 },
                            showManufacturer ? { rotate: '90deg' } : null,
                        ].filter(Boolean),
                        top: windowHeight(5.5),
                    }}
                >
                    <Icons.sideArrow />
                </View>
            </TouchableOpacity>
            {showManufacturer && (
                <Text style={[styles.title, { textAlign: textRtlStyle }]}>
                    {t('productDetailsPage.manufacturerDetailsDesc')}                </Text>
            )}
            <View style={styles.style2} />
            <View style={styles.product}>
                <TouchableOpacity
                    onPress={() => showValue(false, !showProductDesc, false)}
                    activeOpacity={0.7}
                    style={[styles.optionView, { flexDirection: viewRtlStyle }]}
                >
                    <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>
                        {t('productDetailsPage.productDisclaimer')}
                    </Text>
                    <View
                        style={{
                            transform: [
                                { scaleX: rtl ? -1 : 1 },
                                showProductDesc ? { rotate: '90deg' } : null,
                            ].filter(Boolean),
                            top: windowHeight(5.5),
                        }}
                    >
                        <Icons.sideArrow />
                    </View>
                </TouchableOpacity>
                {showProductDesc && (
                    <>

                        <Text style={[styles.title, { textAlign: textRtlStyle }]}>{t('productDetailsPage.disclaimerDetails')}
                        </Text>
                    </>
                )}
            </View>
            <View style={styles.product}>
                <TouchableOpacity
                    onPress={() => showValue(false, false, !showFeature)}
                    activeOpacity={0.7}
                    style={[styles.optionView, { flexDirection: viewRtlStyle }]}
                >
                    <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>
                        {t('productDetailsPage.featureDetails')}
                    </Text>
                    <View
                        style={{
                            transform: [
                                { scaleX: rtl ? -1 : 1 },
                                showFeature ? { rotate: '90deg' } : null, // Use showFeature here
                            ].filter(Boolean),
                            top: windowHeight(5.5),
                        }}
                    >
                        <Icons.sideArrow />
                    </View>
                </TouchableOpacity>
                {showFeature && (
                    <Text style={[styles.title, { textAlign: textRtlStyle }]}>
                        {t('productDetailsPage.featureDetailsDesc')}
                    </Text>
                )}
            </View>
        </View>
    );
}
