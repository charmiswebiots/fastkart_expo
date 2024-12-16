import { View, Text, ScrollView, Image, Animated } from "react-native";
import styles from "./styles";
import { category1 } from "../../../../data";
import { windowHeight } from "../../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";
import { useState, useEffect, useRef } from "react";
import appColors from "../../../../../theme/appColors"; 

export function TrendingCategoryView() {
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
        <View style={styles.skeletonItem}>
            <Animated.View style={[styles.image1, { opacity: fadeAnim }]} />
        </View>
    );

    const { colors } = useTheme();
    const { textRtlStyle, t } = useValues();

    return (
        <View>
            <Text style={[styles.txt, { color: colors.text, textAlign: textRtlStyle }]}>
                {t('searchPage.trendingCategory')}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {loading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))
                ) : (
                    category1.map((item, key) => (
                        <View
                            key={key}
                            style={[
                                styles.image,
                                {
                                    backgroundColor: item.backgroundColor || appColors.defaultBackground,
                                    borderColor: item.borderColor || appColors.defaultBorderColor,
                                    borderWidth: windowHeight(1),
                                },
                            ]}
                        >
                            <Image source={item.image} style={styles.img} />
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
}
