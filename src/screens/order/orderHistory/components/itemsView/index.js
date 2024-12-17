// import { View, FlatList, TouchableOpacity, Text, Image, Animated } from "react-native";
// import styles from "./styles";
// import images from "../../../../../utils/images";
// import { orderHistory } from "../../../../data";
// import { useValues } from "../../../../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import appColors from "../../../../../theme/appColors";
// import { useEffect, useRef, useState } from "react";


// export function ItemsView() {
//     const { colors } = useTheme()
//     const { isDark, viewRtlStyle, t, currSymbol, currValue, textRtlStyle } = useValues()

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
//         <View style={styles.loaderContainer}>
//             <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//             <View style={{ justifyContent: "space-between", flexDirection: viewRtlStyle }}>
//                 <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
//             </View>
//         </View>
//     );

//     return (
//         <FlatList
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={styles.containerStyle}
//             data={orderHistory}
//             renderItem={({ item }) =>
//                 <TouchableOpacity activeOpacity={0.8} style={[styles.listView, { backgroundColor: isDark ? colors.primary : appColors.gray }]} key={item.id}>
//                     <View style={[styles.subView, { flexDirection: viewRtlStyle }]}>
//                         <View>
//                             <View style={[{ flexDirection: 'row' }]}>
//                                 <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.text').substring(0, 27) + ".."} </Text>
//                             </View>
//                             <Text style={styles.add}>{t(item.add)}</Text>
//                             <View style={[styles.paidView, { flexDirection: viewRtlStyle }]}>
//                                 <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.paid')}: <Text style={styles.paid}>{currSymbol}{(item.paid * currValue).toFixed(2)}, </Text></Text>
//                                 <Text style={[styles.data, { color: colors.text }]}>{t('orderDetailPage.items')} <Text style={styles.paid}>{t(item.item)}</Text></Text>
//                             </View>
//                         </View>
//                         <Image source={images.orderHistoryMap} />
//                     </View>
//                     <View style={[styles.orderAgain, { flexDirection: viewRtlStyle }]}>
//                         <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.orderAgain')}</Text>
//                         <Text style={styles.reteNReview}>{t('orderHistoryPage.rateNReviewProduct')}</Text>
//                     </View>
//                 </TouchableOpacity>
//             }
//         />
//     )
// }




import { View, FlatList, TouchableOpacity, Text, Image, Animated } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { orderHistory } from "../../../../data";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";
import { useEffect, useRef, useState } from "react";

export function ItemsView() {
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, t, currSymbol, currValue, textRtlStyle } = useValues();

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
            <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
            <View style={{ justifyContent: "space-between", flexDirection: viewRtlStyle }}>
                <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
                <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} style={[styles.listView, { backgroundColor: isDark ? colors.primary : appColors.gray }]} key={item.id}>
            <View style={[styles.subView, { flexDirection: viewRtlStyle }]}>
                <View>
                    <View style={[{ flexDirection: 'row' }]}>
                        <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.text').substring(0, 27) + ".."} </Text>
                    </View>
                    <Text style={styles.add}>{t(item.add)}</Text>
                    <View style={[styles.paidView, { flexDirection: viewRtlStyle }]}>
                        <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.paid')}: <Text style={styles.paid}>{currSymbol}{(item.paid * currValue).toFixed(2)}, </Text></Text>
                        <Text style={[styles.data, { color: colors.text }]}>{t('orderDetailPage.items')} <Text style={styles.paid}>{t(item.item)}</Text></Text>
                    </View>
                </View>
                <Image source={images.orderHistoryMap} />
            </View>
            <View style={[styles.orderAgain, { flexDirection: viewRtlStyle }]}>
                <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.orderAgain')}</Text>
                <Text style={styles.reteNReview}>{t('orderHistoryPage.rateNReviewProduct')}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            data={orderHistory}
            keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
            renderItem={loading ? SkeletonLoader : renderItem} // Show skeleton loader until data is loaded
        />
    );
}
