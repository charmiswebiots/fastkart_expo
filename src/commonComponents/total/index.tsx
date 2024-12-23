// import { View, Text } from "react-native";
// import styles from "./styles";
// import { windowHeight } from "../../theme/appConstant";
// import { useValues } from "../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import appColors from "../../theme/appColors";

// export function Total(props) {

//     const { isDark, textRtlStyle, viewRtlStyle, t,currSymbol,currValue } = useValues()
//     const { colors } = useTheme()


//     const [loading, setLoading] = useState(true);

//     const fadeAnim = new Animated.Value(1);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 500,
//                 useNativeDriver: true,
//             }).start();
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     const SkeletonLoader = () => (
//         <View>
//             <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                 <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                 <View style={{
//                     justifyContent: 'space-between',
//                     flexDirection: viewRtlStyle
//                 }}>
//                     <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
//                     <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
//                     <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
//                 </View>
//             </View>
//         </View>

//     );

//     return (
//         <View
//             style={[
//                 styles.mainView,
//                 { backgroundColor: isDark ? colors.primary : colors.background },
//                 { marginBottom: props.bottom },
//                 props.style1,
//             ]}
//         >
//             <View style={{ paddingHorizontal: windowHeight(13) }}>
//                 <Text style={[styles.title, props.style, { textAlign: textRtlStyle }]}>{(props.title)}</Text>
//                 <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                     <Text style={styles.data}>{t('commonTotal.bagTotal')}</Text>
//                     <Text style={styles.data}>{currSymbol}{(220 * currValue).toFixed(2)}</Text>
//                 </View>
//                 <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                     <Text style={styles.data}>{t('commonTotal.bagSavings')}</Text>
//                     <Text style={styles.price}>{currSymbol}{(-20 * currValue).toFixed(2)}</Text>
//                 </View>
//                 <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                     <Text style={styles.data}>{t('commonTotal.couponDiscount')}</Text>
//                     <Text style={styles.coupon}>{t('totalModule.applyCoupon')}</Text>
//                 </View>
//                 <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
//                     <Text style={styles.data}>{t('commonTotal.delivery')}</Text>
//                     <Text style={styles.data}>{currSymbol}{(50 * currValue).toFixed(2)}</Text>
//                 </View>
//                 <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
//                     <Text style={[styles.amount, { color: colors.text }]}>{t('commonTotal.totalAmount')}</Text>
//                     <Text style={[styles.amount, { color: colors.text }]}>{currSymbol}{(270 * currValue).toFixed(2)}</Text>
//                 </View>
//             </View>
//             {props.btn}
//         </View>
//     )
// }






// import { View, Text, Animated } from "react-native";
// import styles from "./styles";
// import { windowHeight } from "../../theme/appConstant";
// import { useValues } from "../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import { useEffect, useState } from "react";

// export function Total(props) {
//     const { isDark, textRtlStyle, viewRtlStyle, t, currSymbol, currValue } = useValues();
//     const { colors } = useTheme();

//     const [loading, setLoading] = useState(true);
//     const fadeAnim = new Animated.Value(1);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 500,
//                 useNativeDriver: true,
//             }).start();
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);


//     return (
//         <View
//             style={[
//                 styles.mainView,
//                 { backgroundColor: isDark ? colors.primary : colors.background },
//                 { marginBottom: props.bottom },
//                 props.style1,
//             ]}
//         >
//             <View style={{ paddingHorizontal: windowHeight(13) }}>
//                 <Text style={[styles.title, props.style, { textAlign: textRtlStyle }]}>
//                     {props.title}
//                 </Text>

//                 {loading ? (
//                     <View>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>

//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>

//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>

//                         <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>

//                         <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>
//                     </View>
//                 ) : (
//                     <>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t('commonTotal.bagTotal')}</Text>
//                             <Text style={styles.data}>{currSymbol}{(220 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t('commonTotal.bagSavings')}</Text>
//                             <Text style={styles.price}>{currSymbol}{(-20 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t('commonTotal.couponDiscount')}</Text>
//                             <Text style={styles.coupon}>{t('totalModule.applyCoupon')}</Text>
//                         </View>
//                         <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t('commonTotal.delivery')}</Text>
//                             <Text style={styles.data}>{currSymbol}{(50 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={[styles.amount, { color: colors.text }]}>{t('commonTotal.totalAmount')}</Text>
//                             <Text style={[styles.amount, { color: colors.text }]}>{currSymbol}{(270 * currValue).toFixed(2)}</Text>
//                         </View>
//                     </>
//                 )}
//             </View>

//             {props.btn}
//         </View>
//     );
// }




// import { View, Text, Animated } from "react-native";
// import styles from "./styles";
// import { windowHeight } from "../../theme/appConstant";
// import { useValues } from "../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import { useEffect, useState } from "react";

// export function Total(props) {
//     const { isDark, textRtlStyle, viewRtlStyle, t, currSymbol, currValue } = useValues();
//     const { colors } = useTheme();

//     const [loading, setLoading] = useState(true);
//     const fadeAnim = new Animated.Value(1);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 500,
//                 useNativeDriver: true,
//             }).start();
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     // Skeleton loader for Title
//     const SkeletonTitleLoader = () => (
//         <View style={[styles.skeletonTittle]}>
//             <Animated.View style={[styles.skeletonTittle, { opacity: fadeAnim }]} />
//         </View>
//     );

//     return (
//         <View
//             style={[
//                 styles.mainView,
//                 { backgroundColor: isDark ? colors.primary : colors.background },
//                 { marginBottom: props.bottom },
//                 props.style1,
//             ]}
//         >
//             <View style={{ paddingHorizontal: windowHeight(13) }}>
//                 {/* Title Loader or Text */}
//                 {loading ? (
//                     <SkeletonTitleLoader />
//                 ) : (
//                     <Text style={[styles.title, props.style, { textAlign: textRtlStyle }]}>
//                         {props.title}
//                     </Text>
//                 )}

//                 {/* Data loader or content */}
//                 {loading ? (
//                     <View>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>

//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>

//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>

//                         <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>

//                         <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
//                             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                         </View>
//                     </View>
//                 ) : (
//                     <>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t('commonTotal.bagTotal')}</Text>
//                             <Text style={styles.data}>{currSymbol}{(220 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t('commonTotal.bagSavings')}</Text>
//                             <Text style={styles.price}>{currSymbol}{(-20 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t('commonTotal.couponDiscount')}</Text>
//                             <Text style={styles.coupon}>{t('totalModule.applyCoupon')}</Text>
//                         </View>
//                         <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t('commonTotal.delivery')}</Text>
//                             <Text style={styles.data}>{currSymbol}{(50 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={[styles.amount, { color: colors.text }]}>{t('commonTotal.totalAmount')}</Text>
//                             <Text style={[styles.amount, { color: colors.text }]}>{currSymbol}{(270 * currValue).toFixed(2)}</Text>
//                         </View>
//                     </>
//                 )}
//             </View>

//             {props.btn}
//         </View>
//     );
// }






// import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";
// import styles from "./styles";
// import { windowHeight } from "../../theme/appConstant";
// import { useLoadingContext, useValues } from "../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import ContentLoader, { Rect } from "react-content-loader/native";
// import appColors from "../../theme/appColors";

// export function Total(props) {
//     const { isDark, textRtlStyle, viewRtlStyle, t, currSymbol, currValue } = useValues();
//     const { colors } = useTheme();

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

//     const SkeletonTitleLoader = () => (
//         <ContentLoader
//             speed={1}
//             width="100%"
//             height={30}
//             viewBox="0 0 340 30"
//             backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//             foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//         >
//             <Rect x="0" y="0" rx="4" ry="4" width="50%" height="30" />
//         </ContentLoader>
//     );

//     const SkeletonDataLoader = () => (
//         <ContentLoader
//             speed={1}
//             width="100%"
//             height={100}
//             viewBox="0 0 380 100"
//             backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//             foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//         >
//             <Rect x="0" y="18" rx="4" ry="4" width="60%" height="20" />
//             <Rect x="285" y="18" rx="4" ry="4" width="25%" height="20" />
//             <Rect x="0" y="55" rx="4" ry="4" width="60%" height="20" />
//             <Rect x="285" y="55" rx="4" ry="4" width="25%" height="20" />
//             <Rect x="0" y="90" rx="4" ry="4" width="60%" height="20" />
//             <Rect x="285" y="90" rx="4" ry="4" width="25%" height="20" />

//         </ContentLoader>
//     );

//     return (
//         <View
//             style={[
//                 styles.mainView,
//                 { backgroundColor: isDark ? colors.primary : colors.background },
//                 { marginBottom: props.bottom },
//                 props.style1,
//             ]}
//         >
//             <View style={{ paddingHorizontal: windowHeight(13) }}>
//                 {loading ? (
//                     <SkeletonTitleLoader />
//                 ) : (
//                     <Text style={[styles.title, props.style, { textAlign: textRtlStyle }]}>
//                         {props.title}
//                     </Text>
//                 )}

//                 {loading ? (
//                     <SkeletonDataLoader />
//                 ) : (
//                     <>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t("commonTotal.bagTotal")}</Text>
//                             <Text style={styles.data}>{currSymbol}{(220 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t("commonTotal.bagSavings")}</Text>
//                             <Text style={styles.price}>{currSymbol}{(-20 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t("commonTotal.couponDiscount")}</Text>
//                             <Text style={styles.coupon}>{t("totalModule.applyCoupon")}</Text>
//                         </View>
//                         <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.data}>{t("commonTotal.delivery")}</Text>
//                             <Text style={styles.data}>{currSymbol}{(50 * currValue).toFixed(2)}</Text>
//                         </View>
//                         <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
//                             <Text style={[styles.amount, { color: colors.text }]}>
//                                 {t("commonTotal.totalAmount")}
//                             </Text>
//                             <Text style={[styles.amount, { color: colors.text }]}>
//                                 {currSymbol}{(270 * currValue).toFixed(2)}
//                             </Text>
//                         </View>
//                     </>
//                 )}
//             </View>

//             {props.btn}
//         </View>
//     );
// }




import React, { useEffect, useState, FC } from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../theme/appConstant";
import { useLoadingContext, useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../theme/appColors";

interface TotalProps {
    bottom: number;
    style1?: ViewStyle;
    title: string;
    style?: TextStyle;
    btn?: JSX.Element;
}

export const Total: FC<TotalProps> = (props) => {
    const { isDark, textRtlStyle, viewRtlStyle, t, currSymbol, currValue } = useValues();
    const { colors } = useTheme();

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

    const SkeletonTitleLoader: FC = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={30}
            viewBox="0 0 340 30"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="0" y="0" rx="4" ry="4" width="50%" height="30" />
        </ContentLoader>
    );

    const SkeletonDataLoader: FC = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={100}
            viewBox="0 0 380 100"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="0" y="18" rx="4" ry="4" width="60%" height="20" />
            <Rect x="285" y="18" rx="4" ry="4" width="25%" height="20" />
            <Rect x="0" y="55" rx="4" ry="4" width="60%" height="20" />
            <Rect x="285" y="55" rx="4" ry="4" width="25%" height="20" />
            <Rect x="0" y="90" rx="4" ry="4" width="60%" height="20" />
            <Rect x="285" y="90" rx="4" ry="4" width="25%" height="20" />
        </ContentLoader>
    );

    return (
        <View
            style={[
                styles.mainView,
                { backgroundColor: isDark ? colors.primary : colors.background },
                { marginBottom: props.bottom },
                props.style1,
            ]}
        >
            <View style={{ paddingHorizontal: windowHeight(13) }}>
                {loading ? (
                    <SkeletonTitleLoader />
                ) : (
                    <Text style={[styles.title, props.style, { textAlign: textRtlStyle }]}>
                        {props.title}
                    </Text>
                )}

                {loading ? (
                    <SkeletonDataLoader />
                ) : (
                    <>
                        <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                            <Text style={styles.data}>{t("commonTotal.bagTotal")}</Text>
                            <Text style={styles.data}>{currSymbol}{(220 * currValue).toFixed(2)}</Text>
                        </View>
                        <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                            <Text style={styles.data}>{t("commonTotal.bagSavings")}</Text>
                            <Text style={styles.price}>{currSymbol}{(-20 * currValue).toFixed(2)}</Text>
                        </View>
                        <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                            <Text style={styles.data}>{t("commonTotal.couponDiscount")}</Text>
                            <Text style={styles.coupon}>{t("totalModule.applyCoupon")}</Text>
                        </View>
                        <View style={[styles.dataView, styles.deliveryView, { flexDirection: viewRtlStyle }]}>
                            <Text style={styles.data}>{t("commonTotal.delivery")}</Text>
                            <Text style={styles.data}>{currSymbol}{(50 * currValue).toFixed(2)}</Text>
                        </View>
                        <View style={[styles.amountView, { flexDirection: viewRtlStyle }]}>
                            <Text style={[styles.amount, { color: colors.text }]}>
                                {t("commonTotal.totalAmount")}
                            </Text>
                            <Text style={[styles.amount, { color: colors.text }]}>
                                {currSymbol}{(270 * currValue).toFixed(2)}
                            </Text>
                        </View>
                    </>
                )}
            </View>

            {props.btn}
        </View>
    );
}