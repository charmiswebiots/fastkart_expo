import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { windowHeight } from "../../../../theme/appConstant";
import { Counter } from "../../../../commonComponents";
import styles from "./styles";
import { cart } from "../../../data";
import { Icons } from "../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";
import appColors from "../../../../theme/appColors";

export function WhishListProduct() {
    const { colors } = useTheme()
    const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues()
    const [cartItems, setCartItems] = useState(cart);
    const handleDelete = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const renderRightActions = (progress, dragX, id) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: "clamp",
        });

        return (
            <TouchableOpacity
                onPress={() => handleDelete(id)}
                style={styles.deleteButton}
            >
                <Animated.View style={{ transform: [{ scale }] }}>
                    <Icons.Delete />
                </Animated.View>
            </TouchableOpacity>
        );
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            {cartItems.map((item) => (
                <Swipeable
                    key={item.id}
                    renderRightActions={(progress, dragX) =>
                        renderRightActions(progress, dragX, item.id)
                    }
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
                                    <Text style={[styles.price, { color: colors.text }]}>
                                        {currSymbol}{(item.price * currValue).toFixed(2)}
                                    </Text>
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
            ))}
        </GestureHandlerRootView>
    );
}
