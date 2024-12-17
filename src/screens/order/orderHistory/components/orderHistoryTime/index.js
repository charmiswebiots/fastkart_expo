import { ScrollView, Text, TouchableOpacity, Animated, View } from "react-native";
import styles from "./styles";
import { orderHistoryTime } from "../../../../data";
import { useState, useEffect, useRef } from "react";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";

export function OrderHistoryTime() {
    const [loading, setLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true,
            }).start();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const SkeletonLoader = () => (
        <View>
            <Animated.View style={[styles.view, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
        </View>
    );

    const { isDark, viewRtlStyle, t } = useValues();
    const { colors } = useTheme();
    const [selected, setSelected] = useState(0);

    const changeSelected = (key) => {
        setSelected(key);
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.scrollView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}
        >
            {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonLoader key={index} />
                ))
            ) : (
                orderHistoryTime.map((item, key) => (
                    <TouchableOpacity key={key} activeOpacity={0.8} onPress={() => changeSelected(key)}>
                        <Text style={[styles.time, { color: colors.text }, key === selected && styles.primaryText]}>
                            {t(item.time)}
                        </Text>
                    </TouchableOpacity>
                ))
            )}
        </ScrollView>
    );
}
