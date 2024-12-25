import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { Icons } from "../../../../../utils/icons";
import appColors from "../../../../../theme/appColors";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native";
import { windowHeight } from "../../../../../theme/appConstant";

export function UserDetailView() {

    const { colors } = useTheme();
    const { t,isDark,rtl } = useValues();

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
            height={windowHeight(50)}
            viewBox="0 0 340 50"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="0" y="0" rx="50%" ry="50%" width="50" height="50" />
            <Rect x="60" y="7" rx="4" ry="4" width="30%" height={windowHeight(15)} />
            <Rect x="60" y="30" rx="4" ry="4" width="20%" height={windowHeight(15)} />
            <Rect x="258" y="8" rx="4" ry="4" width="10%" height={windowHeight(33)} />
            <Rect x="303" y="8" rx="4" ry="4" width="10%" height={windowHeight(33)} />
        </ContentLoader>
    );

    return (
        <View style={[styles.dataView]}>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <>
                    <View style={[styles.profileView]}>
                        <Image source={images.demoProfile} style={styles.profile} />
                        <View style={styles.nameView}>
                            <Text style={[styles.name, { color: colors.text }]}>{t('orderTrackingPage.name')}</Text>
                            <Text style={[styles.courier]}>{t('orderTrackingPage.courier')}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.option, { backgroundColor: appColors.primary }]}>
                            <Icons.call />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.chat, styles.option, styles.chatLeft]}>
                            <Icons.chat />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}
