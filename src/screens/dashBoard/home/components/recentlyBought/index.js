// import React, { useEffect, useRef, useState } from "react";
// import { View, Image, ScrollView, Text, TouchableOpacity, Animated } from "react-native";
// import images from "../../../../../utils/images";
// import styles from "./styles";
// import { recentlyBrought } from "../../../../data";
// import { useLoadingContext, useValues } from "../../../../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import ContentLoader, { Rect } from 'react-content-loader/native';


// export function RecentlyBought({ onPress }) {

//     const { isDark, rtl, t } = useValues();
//     const { colors } = useTheme();


//     const [loading, setLoading] = useState(false);
//     const { addressLoaded, setAddressLoaded } = useLoadingContext();

//     useEffect(() => {
//         if (!addressLoaded) {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//                 setAddressLoaded(true);

//             }, 3000);
//         }
//     }, [addressLoaded, setAddressLoaded]);



//     const SkeletonLoader = () => {
//         const skeletonData = Array(6).fill({});

//         return (
//             <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.loaderContainer}
//             >
//                 {skeletonData.map((_, index) => (
//                     <View key={index} style={styles.skeletonItem}>
//                         <Animated.View
//                             style={[styles.skeletonImage, { opacity: fadeAnim }]}
//                         />
//                     </View>
//                 ))}
//             </ScrollView>
//         );
//     };


//     return (
//         <View style={styles.mainView}>
//             <Image
//                 source={isDark ? images.recentlyBoughtDark : images.recentlyBought}
//                 style={[
//                     styles.mainView,
//                     {
//                         position: 'absolute',
//                         transform: [{ scaleX: rtl ? -1 : 1 }],
//                     },
//                 ]}
//                 resizeMode="stretch"
//             />
//             <Text
//                 style={[
//                     styles.recentlyBought,
//                     { color: colors.text, textAlign: rtl ? 'right' : 'left' },
//                 ]}
//             >
//                 {t('homepage.recentlyBrought')}
//             </Text>
//             <View style={styles.imageView}>
//                 {loading ? (
//                     <SkeletonLoader />
//                 ) : (
//                     <ScrollView
//                         showsHorizontalScrollIndicator={false}
//                         contentContainerStyle={styles.container}
//                         horizontal
//                     >
//                         {recentlyBrought.map((item, key) => (
//                             <TouchableOpacity
//                                 key={key}
//                                 activeOpacity={0.8}
//                                 style={[
//                                     styles.recentlyImage,
//                                     { backgroundColor: colors.card },
//                                 ]}
//                                 onPress={onPress}
//                             >
//                                 <Image
//                                     source={item.image}
//                                     style={styles.image}
//                                     resizeMode="contain"
//                                 />
//                             </TouchableOpacity>
//                         ))}
//                     </ScrollView>
//                 )}
//             </View>
//         </View>
//     );

// }




import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";
import images from "../../../../../utils/images";
import styles from "./styles";
import { recentlyBrought } from "../../../../data";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";

export function RecentlyBought({ onPress }) {
    const { isDark, rtl, t } = useValues();
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();

    useEffect(() => {
        if (!addressLoaded) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);
            }, 3000);
        }
    }, [addressLoaded, setAddressLoaded]);

    const SkeletonLoader = () => {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.loaderContainer}
            >
                {Array.from({ length: 9 }).map((_, index) => (
                    <ContentLoader
                        key={index}
                        speed={1}
                        width={60}
                        height={65}
                        viewBox="0 0 100 100"
                        backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
                        foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
                        
                        style={styles.skeletonItem}
                    >
                        <Rect x="0" y="0" rx="10" ry="10" width="90" height="90" />
                    </ContentLoader>
                ))}
            </ScrollView>
        );
    };


    return (
        <View style={styles.mainView}>
            <Image
                source={isDark ? images.recentlyBoughtDark : images.recentlyBought}
                style={[
                    styles.mainView,
                    {
                        position: "absolute",
                        transform: [{ scaleX: rtl ? -1 : 1 }],
                    },
                ]}
                resizeMode="stretch"
            />
            <Text
                style={[
                    styles.recentlyBought,
                    { color: colors.text, textAlign: rtl ? "right" : "left" },
                ]}
            >
                {t("homepage.recentlyBrought")}
            </Text>
            <View style={styles.imageView}>
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.container}
                        horizontal
                    >
                        {recentlyBrought.map((item, key) => (
                            <TouchableOpacity
                                key={key}
                                activeOpacity={0.8}
                                style={[
                                    styles.recentlyImage,
                                    { backgroundColor: colors.card },
                                ]}
                                onPress={onPress}
                            >
                                <Image
                                    source={item.image}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
            </View>
        </View>
    );
}
