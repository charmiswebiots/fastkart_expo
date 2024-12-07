import React, { useState } from "react";
import { View, Text, TouchableOpacity, NativeModules, LayoutAnimation } from "react-native";
import styles from "./styles";
import appColors from "../../../../../theme/appColors";
import { Icons } from "../../../../../utils/icons";
import { windowHeight } from "../../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function DetailsView() {
    const {textRtlStyle,viewRtlStyle,rtl}=useValues()
    const {colors}=useTheme()
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
            <Text style={[styles.detail,{color:colors.text},{textAlign:textRtlStyle}]}>Product Details</Text>
            <Text style={[styles.title,{textAlign:textRtlStyle}]}>
                Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
            </Text>
            <View style={{
                borderBottomWidth: 0.7,
                marginTop: windowHeight(13),
                marginBottom: windowHeight(10),
                borderBottomColor: appColors.content,
            }} />
            <TouchableOpacity
                onPress={() => showValue(!showManufacturer, false, false)}
                activeOpacity={0.7}
                style={[styles.optionView,{flexDirection:viewRtlStyle}]}
            >
                <Text style={[styles.txt,{color:colors.text},{textAlign:textRtlStyle}]}>Manufacturer Details</Text>
                <View style={{ transform: [{ scaleX: rtl?-1:1 }] }}>
                    <Icons.sideArrow />
                </View>
            </TouchableOpacity>
            {showManufacturer && (
                <Text style={[styles.title,{textAlign:textRtlStyle}]}>
                    Manufacturer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
                </Text>
            )}
            <View style={{
                borderBottomWidth: 0.7,
                marginTop: windowHeight(16),
                marginBottom: windowHeight(0),
                borderBottomColor: appColors.content,
            }} />
            <View style={styles.product}>
                <TouchableOpacity
                    onPress={() => showValue(false, !showProductDesc, false)}
                    activeOpacity={0.7}
                    style={[styles.optionView,{flexDirection:viewRtlStyle}]}
                >
                    <Text style={[styles.txt,{color:colors.text},{textAlign:textRtlStyle}]}>Product Disclaimer</Text>
                    <View style={{ transform: [{ scaleX: rtl?-1:1 }] }}>
                    <Icons.sideArrow />
                    </View>
                </TouchableOpacity>
                {showProductDesc && (
                    <>

                        <Text style={[styles.title,{textAlign:textRtlStyle}]}>
                            Disclaimer: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
                        </Text>
                    </>
                )}
            </View>
            <View style={styles.product}>
                <TouchableOpacity
                    onPress={() => showValue(false, false, !showFeature)}
                    activeOpacity={0.7}
                    style={[styles.optionView,{flexDirection:viewRtlStyle}]}
                >
                    <Text style={[styles.txt,{color:colors.text},{textAlign:textRtlStyle}]}>Features & details</Text>
                    <View style={{ transform: [{ scaleX: rtl?-1:1 }] }}>
                        <Icons.sideArrow />
                    </View>
                </TouchableOpacity>
                {showFeature && (
                    <Text style={[styles.title,{textAlign:textRtlStyle}]}>
                        Features: Refillable, Reusable, High Quality Glass Roll on Bottles with Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty Products Ideal
                    </Text>
                )}
            </View>
        </View>
    );
}
