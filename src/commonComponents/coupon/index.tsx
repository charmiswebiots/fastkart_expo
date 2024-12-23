// import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
// import styles from "./styles";
// import images from "../../utils/images";
// import appColors from "../../theme/appColors";
// import { useLoadingContext, useValues } from "../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import { windowHeight, windowWidth } from "../../theme/appConstant";
// import ContentLoader, { Rect } from "react-content-loader/native";
// import { useEffect, useState } from "react";

// export function Coupon(props) {

//     const [loading, setLoading] = useState(true);
//     const { addressLoaded, setAddressLoaded } = useLoadingContext();

//     useEffect(() => {
//         if (addressLoaded) {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//                 setAddressLoaded(true);
//             },3000);
//         }
//     }, [addressLoaded, setAddressLoaded]);


//     const { isDark, viewRtlStyle, textRtlStyle, t, rtl, currSymbol, currValue } = useValues()
//     const { colors } = useTheme()


//     const SkeletonLoader = () => (
//         <ContentLoader
//             speed={1}
//             width="100%"
//             height={windowHeight(145)} 
//             viewBox="0 0 310 150"
//             backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//             foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//         >
//             <Rect x="0" y="10" rx="10" ry="10" width={windowHeight(45)} height={windowHeight(45)} /> 
//             <Rect x="70" y="14" rx="5" ry="5" width={windowWidth(140)} height={windowHeight(14)} />  
//             <Rect x="70" y="44" rx="5" ry="5" width={windowWidth(100)} height={windowHeight(14)} /> 
//             <Rect x="245" y="14" rx="5" ry="5" width={windowWidth(70)}  height={windowHeight(14)} />  
//             <Rect x="245" y="45" rx="5" ry="5" width={windowWidth(70)}  height={windowHeight(14)} />  
//         </ContentLoader>
//     );

//     return (
//         <View style={styles.containerView}>
//             {loading ? (
//                 <SkeletonLoader isDark={isDark} colors={colors} />
//             ) : (
//                 <ImageBackground
//                     source={isDark ? images.cartListDark : images.cartList}
//                     resizeMode="contain"
//                     style={styles.mainView}
//                 >
//                     <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[styles.subView, { flexDirection: viewRtlStyle }]}>
//                         <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
//                             <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
//                                 <Text style={styles.priceTxt}>{props.price}</Text>
//                                 <View style={styles.offView}>
//                                     <Text style={[styles.percent, { left: rtl ? windowHeight(0) : windowHeight(0) }]}>%</Text>
//                                     <Text style={styles.off}>{t('cartlist.off')}</Text>
//                                 </View>
//                             </View>
//                             <View style={[styles.titleView]}>
//                                 <Text style={[styles.titleTxt, { color: isDark ? appColors.white : appColors.secondBlack }, { textAlign: textRtlStyle }]}>{t(props.onOrder)}</Text>
//                                 <Text style={[styles.titleTxt, { color: appColors.content }, { textAlign: textRtlStyle }]}>{t(props.onOrderAbove)}{currSymbol}{(currValue * 250).toFixed(2)}</Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Text style={[styles.useCode, { color: colors.text }]}>{t('coupon.useCode')} </Text>
//                             <Text style={styles.code}>{t('myOffersArr.offerCode')}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </ImageBackground>
//             )}
//         </View>
//     )
// }






// import React, { FC, useEffect, useState } from 'react';
// import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
// import styles from './styles';
// import images from '../../utils/images';
// import appColors from '../../theme/appColors';
// import { useLoadingContext, useValues } from '../../utils/context';
// import { useTheme } from '@react-navigation/native';
// import { windowHeight, windowWidth } from '../../theme/appConstant';
// import ContentLoader, { Rect } from 'react-content-loader/native';

// interface CouponProps {
//     onPress: () => void;
//     price: string;
//     onOrder: string;
//     onOrderAbove: string;
// }

// export function Coupon({ onPress ,price,onOrder,onOrderAbove}: CouponProps) {
//     const [loading, setLoading] = useState<boolean>(true);
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

//     const { isDark, viewRtlStyle, textRtlStyle, t, rtl, currSymbol, currValue } = useValues();
//     const { colors } = useTheme();

//     const SkeletonLoader: FC = () => (
//         <ContentLoader
//             speed={1}
//             width="100%"
//             height={windowHeight(145)}
//             viewBox="0 0 310 150"
//             backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//             foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//         >
//             <Rect x="0" y="10" rx="10" ry="10" width={windowHeight(45)} height={windowHeight(45)} />
//             <Rect x="70" y="14" rx="5" ry="5" width={windowWidth(140)} height={windowHeight(14)} />
//             <Rect x="70" y="44" rx="5" ry="5" width={windowWidth(100)} height={windowHeight(14)} />
//             <Rect x="245" y="14" rx="5" ry="5" width={windowWidth(70)} height={windowHeight(14)} />
//             <Rect x="245" y="45" rx="5" ry="5" width={windowWidth(70)} height={windowHeight(14)} />
//         </ContentLoader>
//     );

//     return (
//         <View style={styles.containerView}>
//             {loading ? (
//                 <SkeletonLoader />
//             ) : (
//                 <ImageBackground
//                     source={isDark ? images.cartListDark : images.cartList}
//                     resizeMode="contain"
//                     style={styles.mainView}
//                 >
//                     <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[styles.subView, { flexDirection: viewRtlStyle }]}>
//                         <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
//                             <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
//                                 <Text style={styles.priceTxt}>{props.price}</Text>
//                                 <View style={styles.offView}>
//                                     <Text style={[styles.percent, { left: rtl ? windowHeight(0) : windowHeight(0) }]}>%</Text>
//                                     <Text style={styles.off}>{t('cartlist.off')}</Text>
//                                 </View>
//                             </View>
//                             <View style={[styles.titleView]}>
//                                 <Text style={[styles.titleTxt, { color: isDark ? appColors.white : appColors.secondBlack }, { textAlign: textRtlStyle }]}>{t(props.onOrder)}</Text>
//                                 <Text style={[styles.titleTxt, { color: appColors.content }, { textAlign: textRtlStyle }]}>{t(props.onOrderAbove)}{currSymbol}{(currValue * 250).toFixed(2)}</Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Text style={[styles.useCode, { color: colors.text }]}>{t('coupon.useCode')} </Text>
//                             <Text style={styles.code}>{t('myOffersArr.offerCode')}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </ImageBackground>
//             )}
//         </View>
//     );
// };





import React, { FC, useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import appColors from '../../theme/appColors';
import { useLoadingContext, useValues } from '../../utils/context';
import { useTheme } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../../theme/appConstant';
import ContentLoader, { Rect } from 'react-content-loader/native';

interface CouponProps {
    onPress: () => void;
    price: string;
    onOrder: string;
    onOrderAbove: string;
}

export function Coupon({ onPress, price, onOrder, onOrderAbove }: CouponProps) {
    const [loading, setLoading] = useState<boolean>(true);
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

    const { isDark, viewRtlStyle, textRtlStyle, t, rtl, currSymbol, currValue } = useValues();
    const { colors } = useTheme();

    const SkeletonLoader: FC = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={windowHeight(145)}
            viewBox="0 0 310 150"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="0" y="10" rx="10" ry="10" width={windowHeight(45)} height={windowHeight(45)} />
            <Rect x="70" y="14" rx="5" ry="5" width={windowWidth(140)} height={windowHeight(14)} />
            <Rect x="70" y="44" rx="5" ry="5" width={windowWidth(100)} height={windowHeight(14)} />
            <Rect x="245" y="14" rx="5" ry="5" width={windowWidth(70)} height={windowHeight(14)} />
            <Rect x="245" y="45" rx="5" ry="5" width={windowWidth(70)} height={windowHeight(14)} />
        </ContentLoader>
    );

    return (
        <View style={styles.containerView}>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <ImageBackground
                    source={isDark ? images.cartListDark : images.cartList}
                    resizeMode="contain"
                    style={styles.mainView}
                >
                    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.subView, { flexDirection: viewRtlStyle }]}>
                        <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
                            <View style={[styles.view, { flexDirection: viewRtlStyle }]}>
                                <Text style={styles.priceTxt}>{price}</Text>
                                <View style={styles.offView}>
                                    <Text style={[styles.percent, { left: rtl ? windowHeight(0) : windowHeight(0) }]}>%</Text>
                                    <Text style={styles.off}>{t('cartlist.off')}</Text>
                                </View>
                            </View>
                            <View style={[styles.titleView]}>
                                <Text style={[styles.titleTxt, { color: isDark ? appColors.white : appColors.secondBlack }, { textAlign: textRtlStyle }]}>
                                    {t(onOrder)}
                                </Text>
                                <Text style={[styles.titleTxt, { color: appColors.content }, { textAlign: textRtlStyle }]}>
                                    {t(onOrderAbove)}{currSymbol}{(currValue * 250).toFixed(2)}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.useCode, { color: colors.text }]}>{t('coupon.useCode')} </Text>
                            <Text style={styles.code}>{t('myOffersArr.offerCode')}</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            )}
        </View>
    );
}
