// import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
// import styles from "./styles";
// import images from "../../utils/images";
// import appColors from "../../theme/appColors";
// import { useValues } from "../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import { windowHeight } from "../../theme/appConstant";
// import { useEffect, useState } from "react";

// export function Coupon(props) {

//         const [loading, setLoading] = useState(true);

//         const fadeAnim = new Animated.Value(1);

//         useEffect(() => {
//             const timer = setTimeout(() => {
//                 setLoading(false);
//                 Animated.timing(fadeAnim, {
//                     toValue: 0,
//                     duration: 500,
//                     useNativeDriver: true,
//                 }).start();
//             }, 3000);

//             return () => clearTimeout(timer);
//         }, []);

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

//     const { isDark, viewRtlStyle, textRtlStyle, t ,rtl,currSymbol,currValue} = useValues()
//     const { colors } = useTheme()

//     return (
//         <View style={styles.containerView}>
//             <ImageBackground source={isDark ? images.cartListDark : images.cartList} resizeMode='contain' style={styles.mainView}>
//                 <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[styles.subView, { flexDirection: viewRtlStyle }]}>
//                     <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
//                         <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
//                             <Text style={styles.priceTxt}>{props.price}</Text>
//                             <View style={styles.offView}>
//                                 <Text style={[styles.percent,{left:rtl?windowHeight(0):windowHeight(0)}]}>%</Text>
//                                 <Text style={styles.off}>{t('cartlist.off')}</Text>
//                             </View>
//                         </View>
//                         <View style={[styles.titleView]}>
//                             <Text style={[styles.titleTxt, { color: isDark ? appColors.white : appColors.secondBlack }, { textAlign: textRtlStyle }]}>{t(props.onOrder)}</Text>
//                             <Text style={[styles.titleTxt, { color: appColors.content }, { textAlign: textRtlStyle }]}>{t(props.onOrderAbove)}{currSymbol}{(currValue * 250).toFixed(2)}</Text>
//                         </View>
//                     </View>
//                     <View>
//                         <Text style={[styles.useCode, { color: colors.text }]}>{t('coupon.useCode')} </Text>
//                         <Text style={styles.code}>{t('myOffersArr.offerCode')}</Text>
//                     </View>
//                 </TouchableOpacity>
//             </ImageBackground>
//         </View>
//     )
// }




import { View, ImageBackground, TouchableOpacity, Text, Animated } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";
import { windowHeight } from "../../theme/appConstant";

export function Coupon(props) {

    const [loading, setLoading] = useState(true);

    // Use useRef for fadeAnim to ensure it is only initialized once
    const fadeAnim = useRef(new Animated.Value(1)).current;

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
                <View style={{ justifyContent: 'space-between', flexDirection: viewRtlStyle }}>
                    <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
                    <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
                    <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
                </View>
            </View>
        </View>
    );

    const { isDark, viewRtlStyle, textRtlStyle, t, rtl, currSymbol, currValue } = useValues();
    const { colors } = useTheme();

    return (
        <View>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <View style={styles.containerView}>

                    <ImageBackground source={isDark ? images.cartListDark : images.cartList} resizeMode="contain" style={styles.mainView}>

                        <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[styles.subView, { flexDirection: viewRtlStyle }]}>
                            <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
                                <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
                                    <Text style={styles.priceTxt}>{props.price}</Text>
                                    <View style={styles.offView}>
                                        <Text style={[styles.percent, { left: rtl ? windowHeight(0) : windowHeight(0) }]}>%</Text>
                                        <Text style={styles.off}>{t('cartlist.off')}</Text>
                                    </View>
                                </View>
                                <View style={[styles.titleView]}>
                                    <Text style={[styles.titleTxt, { color: isDark ? appColors.white : appColors.secondBlack }, { textAlign: textRtlStyle }]}>
                                        {t(props.onOrder)}
                                    </Text>
                                    <Text style={[styles.titleTxt, { color: appColors.content }, { textAlign: textRtlStyle }]}>
                                        {t(props.onOrderAbove)}{currSymbol}{(currValue * 250).toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.useCode, { color: colors.text }]}>{t('coupon.useCode')} </Text>
                                <Text style={styles.code}>{t('myOffersArr.offerCode')}</Text>
                            </View>
                        </TouchableOpacity>

                    </ImageBackground>

                </View>
            )}
        </View>
    );
}
