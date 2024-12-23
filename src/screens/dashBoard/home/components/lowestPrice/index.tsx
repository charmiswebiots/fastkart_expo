// import React, { useEffect, useState } from "react";
// import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../../../../utils/icons";
// import { lowestPrice } from "../../../../data";
// import { SeeAllHeader } from "../seeAllHeader";
// import appColors from "../../../../../theme/appColors";
// import { useTheme } from "@react-navigation/native";
// import { useLoadingContext, useValues } from "../../../../../utils/context";
// import ContentLoader, { Rect } from "react-content-loader/native";

// export function LowestPrice({ headerData, onPress, style }) {
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

//     const { colors } = useTheme();
//     const { viewRtlStyle, textRtlStyle, t, currSymbol, currValue, isDark } = useValues();

//     const SkeletonLoader = () => (
//         <ContentLoader
//             speed={1}
//             width={150}
//             height={200}
//             viewBox="0 0 150 200"
//             backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//             foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//         >
//             <Rect x="35" y="15" rx="10" ry="10" width="70" height="70" />
//             <Rect x="15" y="110" rx="5" ry="5" width="95" height="10" />
//             <Rect x="15" y="130" rx="5" ry="5" width="60" height="10" />
//             <Rect x="15" y="150" rx="5" ry="5" width="80" height="10" />
//         </ContentLoader>
//     );

//     return (
//         <View style={styles.mainView}>
//             <SeeAllHeader {...headerData} />

//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 {loading ? (
//                     Array.from({ length: 5 }).map((_, index) => (
//                         <View key={index} style={styles.skeletonContainer}>
//                             <SkeletonLoader />
//                         </View>
//                     ))
//                 ) : (
//                     lowestPrice.map((item) => (
//                         <TouchableOpacity
//                             key={item.id}
//                             style={[styles.lowestPriceView, style]}
//                             activeOpacity={0.8}
//                             onPress={() => onPress(item)}
//                         >
//                             <Image resizeMode="contain" source={item.image} style={styles.image} />
//                             <Text
//                                 style={[
//                                     styles.name,
//                                     { color: colors.text },
//                                     { textAlign: textRtlStyle },
//                                 ]}
//                                 numberOfLines={2}
//                             >
//                                 {t(item.name)}
//                             </Text>
//                             <Text style={[styles.gram, { textAlign: textRtlStyle }]}>
//                                 {t(item.weight)}
//                             </Text>
//                             <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
//                                 <Text style={[styles.price, { color: colors.text }]}>
//                                     {currSymbol}
//                                     {(item.price * currValue).toFixed(2)}
//                                 </Text>
//                                 <View style={styles.increase}>
//                                     <Icons.increase
//                                         height={18}
//                                         width={18}
//                                         color={appColors.white}
//                                     />
//                                 </View>
//                             </View>
//                             <TouchableOpacity activeOpacity={0.8} style={styles.wishList}>
//                                 <Icons.wishlist />
//                             </TouchableOpacity>
//                         </TouchableOpacity>
//                     ))
//                 )}
//             </ScrollView>
//         </View>
//     );
// }







import React, { useEffect, useState } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { lowestPrice } from "../../../../data";
import { SeeAllHeader } from "../seeAllHeader";
import appColors from "../../../../../theme/appColors";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native";

// Define the shape of the `headerData` prop, assuming it includes title and a `seeAll` flag
interface HeaderData {
    title: string;
    seeAll: boolean;
}

interface LowestPriceProps {
    headerData: HeaderData;
    onPress: (item: typeof lowestPrice[0]) => void;
    style?: ViewStyle;
}

export function LowestPrice({ headerData, onPress, style }: LowestPriceProps) {
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

    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t, currSymbol, currValue, isDark } = useValues();

    const SkeletonLoader = () => (
        <ContentLoader
            speed={1}
            width={150}
            height={200}
            viewBox="0 0 150 200"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="35" y="15" rx="10" ry="10" width="70" height="70" />
            <Rect x="15" y="110" rx="5" ry="5" width="95" height="10" />
            <Rect x="15" y="130" rx="5" ry="5" width="60" height="10" />
            <Rect x="15" y="150" rx="5" ry="5" width="80" height="10" />
        </ContentLoader>
    );

    return (
        <View style={styles.mainView}>
            <SeeAllHeader {...headerData} />

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {loading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <View key={index} style={styles.skeletonContainer}>
                            <SkeletonLoader />
                        </View>
                    ))
                ) : (
                    lowestPrice.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.lowestPriceView, style]}
                            activeOpacity={0.8}
                            onPress={() => onPress(item)}
                        >
                            <Image resizeMode="contain" source={item.image} style={styles.image} />
                            <Text
                                style={[
                                    styles.name,
                                    { color: colors.text },
                                    { textAlign: textRtlStyle },
                                ]}
                                numberOfLines={2}
                            >
                                {t(item.name)}
                            </Text>
                            <Text style={[styles.gram, { textAlign: textRtlStyle }]}>
                                {t(item.weight)}
                            </Text>
                            <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
                                <Text style={[styles.price, { color: colors.text }]}>
                                    {currSymbol}
                                    {(item.price * currValue).toFixed(2)}
                                </Text>
                                <View style={styles.increase}>
                                    <Icons.increase height={18} width={18} color={appColors.white} />
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={styles.wishList}>
                                <Icons.wishlist />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))
                )}
            </ScrollView>
        </View>
    );
}
