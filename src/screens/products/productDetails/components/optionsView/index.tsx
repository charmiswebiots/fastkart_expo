import React, { useEffect, useState, FC } from "react";
import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import appColors from "../../../../../theme/appColors";
import ContentLoader, { Rect } from "react-content-loader/native";

interface OptionsViewProps {
    visibleQuantityModal: () => void;
    visibleDeliveryModal: () => void;
}

export const OptionsView: FC<OptionsViewProps> = (props) => {
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, t } = useValues();

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

    const SkeletonLoader: FC = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={70}
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}>
            <Rect x="0" y="16" rx="4" ry="4" width="45%" height="40" />
            <Rect x="195" y="16" rx="4" ry="4" width="45%" height="40" />
        </ContentLoader>
    );

    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <View style={[styles.optionMainView, { flexDirection: viewRtlStyle } as StyleProp<ViewStyle>]}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={props.visibleQuantityModal}
                style={[
                    styles.option,
                    { backgroundColor: isDark ? colors.primary : appColors.gray },
                    { flexDirection: viewRtlStyle },
                ]}
            >
                <Text style={[styles.optionTxt, { color: colors.text }]}>500 g / $24.00</Text>
                <Icons.dropDown />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={props.visibleDeliveryModal}
                style={[
                    styles.option,
                    { backgroundColor: isDark ? colors.primary : appColors.gray },
                    { flexDirection: viewRtlStyle },
                ]}
            >
                <Text style={[styles.optionTxt, { color: colors.text }]}>{t('productDetailsPage.deliveryTime')}</Text>
                <Icons.dropDown />
            </TouchableOpacity>
        </View>
    );
}