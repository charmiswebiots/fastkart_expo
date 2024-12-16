// import { View, Text, ScrollView } from "react-native";
// import styles from "./styles";
// import { recentlySearch } from "../../../../data";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../../../../utils/context";
// import appColors from "../../../../../theme/appColors";

// export function RecentlySearchView() {
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
//         <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.primary : appColors.drawer }]}>
//             <Animated.View style={[styles.view, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
           
//         </View>
//     );

//     const { colors } = useTheme()
//     const { isDark, textRtlStyle, t } = useValues()


//     return (
//         <View>
//             <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('searchPage.recentlySearch')}</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.scrollView]}>
//             <SkeletonLoader/>
//                 {
//                     recentlySearch.map((item) =>
//                         <Text style={[styles.name, { color: colors.text }, { backgroundColor: isDark ? colors.primary : appColors.drawer }]}>{t(item.name)}</Text>
//                     )}
//             </ScrollView>
//         </View>
//     )
// }





import { View, Text, ScrollView, Animated } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "./styles";
import { recentlySearch } from "../../../../data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";
import appColors from "../../../../../theme/appColors";

export function RecentlySearchView() {
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
        <View >
            <Animated.View style={[styles.view, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
        </View>
    );

    const { colors } = useTheme();
    const { isDark, textRtlStyle, t } = useValues();

    return (
        <View>
            <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>
                {t('searchPage.recentlySearch')}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.scrollView]}>
                {loading ? (
                    // Render skeleton loader for each item
                    Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))
                ) : (
                    recentlySearch.map((item, index) => (
                        <Text
                            key={index}
                            style={[styles.name, { color: colors.text }, { backgroundColor: isDark ? colors.primary : appColors.drawer }]}
                        >
                            {t(item.name)}
                        </Text>
                    ))
                )}
            </ScrollView>
        </View>
    );
}
