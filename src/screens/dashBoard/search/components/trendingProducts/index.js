// import { View, TouchableOpacity, Text, Image, Animated } from "react-native";
// import styles from "./styles";
// import { trendingProducts } from "../../../../data";
// import { Counter } from "../../../../../commonComponents";
// import { useValues } from "../../../../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import appColors from "../../../../../theme/appColors";
// import { useState, useEffect, useRef } from 'react';

// export function TrendingProducts({ onPress }) {
//     const [loading, setLoading] = useState(true);
//     const fadeAnim = useRef(new Animated.Value(1)).current;

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 1200,
//                 useNativeDriver: true,
//             }).start();
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     const SkeletonLoader = () => (
//         <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//             <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//             <View style={{
//                 justifyContent: 'space-between',
//                 flexDirection: viewRtlStyle
//             }}>
//                 <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
//             </View>
//         </View>
//     );

//     const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
//     const { colors } = useTheme();

//     return (
//         <View>
//         {loading ? (
//             <SkeletonLoader />
//         ) : (
//             <View
//                 style={[
//                     styles.mainView,
//                     { backgroundColor: isDark ? colors.card : appColors.gray },
//                     { flexDirection: viewRtlStyle },
//                 ]}
//             >

//                 <>
//                         <Image source={item.image} style={styles.image} resizeMode='contain' />
//                         <View style={styles.lineView} />
//                         <View style={styles.counterView}>
//                             <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//                                 <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
//                                 <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
//                             </TouchableOpacity>
//                             <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
//                                 <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
//                                     <Text style={[styles.price, { color: colors.text }]}>
//                                         {currSymbol}{(item.price * currValue).toFixed(2)}
//                                     </Text>
//                                     <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
//                                         <Text style={styles.discount}>{item.discount}%</Text>
//                                         <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
//                                     </View>
//                                 </View>
//                                 <Counter />
//                             </View>
//                         </View>
//                     </View>
//                 ))
//             )}
//         </View>
//     );
// }




import { View, TouchableOpacity, Text, Image, Animated } from "react-native";
import styles from "./styles";
import { trendingProducts } from "../../../../data";
import { Counter } from "../../../../../commonComponents";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";
import { useState, useEffect, useRef } from 'react';

export function TrendingProducts({ onPress }) {
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
        <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
            <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
            <View style={{ justifyContent: 'space-between', flexDirection: viewRtlStyle }}>
                <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
                <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
                <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
            </View>
        </View>
    );

    const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
    const { colors } = useTheme();

    return (
        <View>
            {loading ? (
                Array.from({ length: 2 }).map((_, index) => (
                    <SkeletonLoader key={index} />
                ))
            ) : (
                trendingProducts.map((item, index) => (
                    <View
                        key={index}
                        style={[styles.mainView, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}
                    >
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                        <View style={styles.lineView} />
                        <View style={styles.counterView}>
                            <TouchableOpacity onPress={() => onPress(item)} activeOpacity={0.7}>
                                <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
                                <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
                            </TouchableOpacity>
                            <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
                                <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
                                    <Text style={[styles.price, { color: colors.text }]}>
                                        {currSymbol}{(item.price * currValue).toFixed(2)}
                                    </Text>
                                    <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
                                        <Text style={styles.discount}>{item.discount}%</Text>
                                        <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
                                    </View>
                                </View>
                                <Counter />
                            </View>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
}
