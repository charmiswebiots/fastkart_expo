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




// import { View, FlatList, TouchableOpacity, Text, Image, Animated } from "react-native";
// import styles from "./styles";
// import images from "../../../../../utils/images";
// import { orderHistory } from "../../../../data";
// import { useLoadingContext, useValues } from "../../../../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import appColors from "../../../../../theme/appColors";
// import { useEffect, useState } from "react";
// import ContentLoader, { Rect } from "react-content-loader/native";


// export function ItemsView() {
//     const { colors } = useTheme();
//     const { isDark, viewRtlStyle, t, currSymbol, currValue } = useValues();

//     const [loading, setLoading] = useState(false);
//     const { addressLoaded, setAddressLoaded } = useLoadingContext();

//     useEffect(() => {
//         if (addressLoaded) {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//                 setAddressLoaded(true);
//             }, 3000);
//         }
//     }, [addressLoaded, setAddressLoaded]);

//     const SkeletonLoader = () => (
//         <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//             <View style={{ justifyContent: "space-between", flexDirection: viewRtlStyle }}>
//                 <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
//             </View>
//         </View>
//     );

//     const renderItem = ({ item }) => (
//         <TouchableOpacity activeOpacity={0.8} style={[styles.listView, { backgroundColor: isDark ? colors.primary : appColors.gray }]} key={item.id}>
//             <View style={[styles.subView, { flexDirection: viewRtlStyle }]}>
//                 <View>
//                     <View style={[{ flexDirection: 'row' }]}>
//                         <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.text').substring(0, 27) + ".."} </Text>
//                     </View>
//                     <Text style={styles.add}>{t(item.add)}</Text>
//                     <View style={[styles.paidView, { flexDirection: viewRtlStyle }]}>
//                         <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.paid')}: <Text style={styles.paid}>{currSymbol}{(item.paid * currValue).toFixed(2)}, </Text></Text>
//                         <Text style={[styles.data, { color: colors.text }]}>{t('orderDetailPage.items')} <Text style={styles.paid}>{t(item.item)}</Text></Text>
//                     </View>
//                 </View>
//                 <Image source={images.orderHistoryMap} />
//             </View>
//             <View style={[styles.orderAgain, { flexDirection: viewRtlStyle }]}>
//                 <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.orderAgain')}</Text>
//                 <Text style={styles.reteNReview}>{t('orderHistoryPage.rateNReviewProduct')}</Text>
//             </View>
//         </TouchableOpacity>
//     );

//     return (
//         <FlatList
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={styles.containerStyle}
//             data={orderHistory}
//             keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
//             renderItem={loading ? SkeletonLoader : renderItem} // Show skeleton loader until data is loaded
//         />
//     );
// }








import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { orderHistory } from "../../../../data";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";
import { useEffect, useState } from "react";

export function ItemsView() {
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, t, currSymbol, currValue } = useValues();

    const [loading, setLoading] = useState(true);
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
            height={120}
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
                       foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
            style={{ marginBottom: 16, borderRadius: 8 }}
        >
            {/* Text Line */}
            <Rect x="16" y="16" rx="4" ry="4" width="70%" height="16" />
            {/* Subtext */}
            <Rect x="16" y="40" rx="4" ry="4" width="50%" height="14" />
            {/* Paid Text */}
            <Rect x="16" y="64" rx="4" ry="4" width="40%" height="14" />
            {/* Items Text */}
            <Rect x="16" y="88" rx="4" ry="4" width="40%" height="14" />
            {/* Image Placeholder */}
            <Rect x="80%" y="16" rx="8" ry="8" width="64" height="64" />
        </ContentLoader>
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
            data={loading ? Array.from({ length: 5 }) : orderHistory} // Fake data for skeletons
            keyExtractor={(item, index) => (item?.id || index).toString()} // Handle fake data case
            renderItem={({ item }) =>
                loading ? (
                    <SkeletonLoader />
                ) : (
                    renderItem({ item })
                )
            }
        />
    );
}
