import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { Counter } from "../../../../commonComponents";
import styles from "./styles";
import { cart } from "../../../data";
import { Icons } from "../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../utils/context";
import appColors from "../../../../theme/appColors";
import ContentLoader, { Rect } from "react-content-loader/native";
import { windowHeight } from "../../../../theme/appConstant";

interface SkeletonLoaderProps {
    isDark: boolean;
    colors: any;
}


const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ isDark, colors }) => {
    const { rtl } = useValues();
    return (
        <ContentLoader
            speed={1}
            width="100%"
            height={440}
            viewBox="0 0 340 440"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            {[...Array(4)].map((_, index) => {
                const baseY = 100 * index; 
                return (
                    <React.Fragment key={index}>
                        <Rect x={rtl ? 310 : 18} y={baseY} rx="10" ry="10" width="60" height="60" />
                        <Rect x={rtl ? 110 : 90} y={baseY + 2} rx="5" ry="5" width="180" height="13" />
                        <Rect x={rtl ? 188 : 90} y={baseY + 22} rx="5" ry="5" width="100" height="12" />
                        <Rect x={rtl ? 165 : 90} y={baseY + 48} rx="5" ry="5" width="60" height="12" />
                        <Rect x={rtl ? 238 : 160} y={baseY + 48} rx="5" ry="5" width="50" height="12" />
                        <Rect x={rtl ? 20 : 245} y={baseY + 40} rx="5" ry="5" width="75" height="22" />
                    </React.Fragment>
                );
            })}
        </ContentLoader>
    );
};

interface WhishListProductProps {
    onItemDelete: (length: number) => void;
}

export const WhishListProduct: React.FC<WhishListProductProps> = ({ onItemDelete }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue,rtl } = useValues();
    const [cartItems, setCartItems] = useState<any[]>(cart);

    useEffect(() => {
        if (addressLoaded) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);
            }, 3000);
        }
    }, [addressLoaded, setAddressLoaded]);

    const limitedCartItems = cartItems.slice(0, 4);

    const handleDelete = (id: number) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== id);
            onItemDelete(updatedItems.length);
            return updatedItems;
        });
    };

    const renderRightActions = (progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation, id: number) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1.5, 0],
            extrapolate: "clamp",
        });

        return (
            <View style={{ marginHorizontal: windowHeight(-22), left: windowHeight(25) }}>
                <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
                    <Animated.View style={{ transform: [{ scale }], left: windowHeight(7) }}>
                        <Icons.Delete />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            {loading ? (
                <SkeletonLoader isDark={isDark} colors={colors} />
            ) : (
                limitedCartItems.map((item) => (
                    <Swipeable
                        key={item.id}
                        renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
                        friction={2}
                        leftThreshold={80}
                        rightThreshold={100}
                    >
                        <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
                            <Image source={item.image} style={styles.image} resizeMode="contain" />
                            <View style={styles.lineView} />
                            <View style={styles.counterView}>
                                <TouchableOpacity activeOpacity={0.7}>
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
                                        <View style={styles.counter}>
                                            <Counter />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Swipeable>
                ))
            )}
        </GestureHandlerRootView>
    );
}







