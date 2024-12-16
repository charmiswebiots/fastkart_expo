import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import styles from './styles';
import { Counter } from '../counter';
import { useTheme } from '@react-navigation/native';
import { useValues } from '../../utils/context';
import appColors from '../../theme/appColors';

export function Product(props) {
    const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
    const { colors } = useTheme();

    const [loading, setLoading] = useState(true);

    const fadeAnim = new Animated.Value(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const SkeletonLoader = () => (
        <View>
            <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
                <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
                <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
                <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: viewRtlStyle
                }}>
                    <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
                    <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
                    <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
                </View>
            </View>
        </View>

    );

    return (
        <View>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <View
                    style={[
                        styles.mainView,
                        { backgroundColor: isDark ? colors.card : appColors.gray },
                        { flexDirection: viewRtlStyle },
                    ]}
                >

                    <>
                        <Image source={props.image} style={styles.image} resizeMode="contain" />
                        <View style={styles.lineView} />
                        <View style={styles.counterView}>
                            <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
                                <Text
                                    style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}
                                >
                                    {t(props.name)}
                                </Text>
                                <Text style={[styles.weight, { textAlign: textRtlStyle }]}>
                                    {t(props.weight)}
                                </Text>
                            </TouchableOpacity>
                            <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
                                <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
                                    <Text style={[styles.price, { color: colors.text }]}>
                                        {currSymbol}
                                        {(props.price * currValue).toFixed(2)}
                                    </Text>
                                    <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
                                        <Text style={styles.discount}>{props.discount}%</Text>
                                        <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
                                    </View>
                                </View>
                                <Counter />
                            </View>
                        </View>
                    </>

                </View>
            )}
        </View>
    );
}