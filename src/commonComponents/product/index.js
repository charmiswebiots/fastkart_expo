// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
// import styles from './styles';
// import { Counter } from '../counter';
// import { useTheme } from '@react-navigation/native';
// import { useLoadingContext, useValues } from '../../utils/context';
// import appColors from '../../theme/appColors';
// import ContentLoader, { Rect } from 'react-content-loader/native';


// export function Product(props) {
//     const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
//     const { colors } = useTheme();
//    const [loading, setLoading] = useState(false);
//       const { addressLoaded, setAddressLoaded } = useLoadingContext(); 

//     useEffect(() => {
//       if (!addressLoaded) {
//         setLoading(true);
//         setTimeout(() => {
//           setLoading(false);
//           setAddressLoaded(true); 

//         }, 3000);
//       }
//     }, [addressLoaded, setAddressLoaded]);

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
//         <View>
//             {loading ? (
//                 <SkeletonLoader />
//             ) : (
//                 <View
//                     style={[
//                         styles.mainView,
//                         { backgroundColor: isDark ? colors.card : appColors.gray },
//                         { flexDirection: viewRtlStyle },
//                     ]}
//                 >

//                     <>
//                         <Image source={props.image} style={styles.image} resizeMode="contain" />
//                         <View style={styles.lineView} />
//                         <View style={styles.counterView}>
//                             <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
//                                 <Text
//                                     style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}
//                                 >
//                                     {t(props.name)}
//                                 </Text>
//                                 <Text style={[styles.weight, { textAlign: textRtlStyle }]}>
//                                     {t(props.weight)}
//                                 </Text>
//                             </TouchableOpacity>
//                             <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
//                                 <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
//                                     <Text style={[styles.price, { color: colors.text }]}>
//                                         {currSymbol}
//                                         {(props.price * currValue).toFixed(2)}
//                                     </Text>
//                                     <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
//                                         <Text style={styles.discount}>{props.discount}%</Text>
//                                         <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
//                                     </View>
//                                 </View>
//                                 <Counter />
//                             </View>
//                         </View>
//                     </>

//                 </View>
//             )}
//         </View>
//     );
// }




import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Counter } from '../counter';
import { useTheme } from '@react-navigation/native';
import { useLoadingContext, useValues } from '../../utils/context';
import appColors from '../../theme/appColors';
import ContentLoader, { Rect } from 'react-content-loader/native';

export function Product(props) {
    const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
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

    const SkeletonLoader = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={115}
            viewBox="0 0 340 80"

            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="10" y="10" rx="10" ry="10" width="70" height="70" />
            <Rect x="90" y="12" rx="5" ry="5" width="200" height="15" />
            <Rect x="90" y="35" rx="5" ry="5" width="100" height="15" />
            <Rect x="90" y="64" rx="5" ry="5" width="60" height="15" />
            <Rect x="160" y="64" rx="5" ry="5" width="50" height="15" />
            <Rect x="256" y="59" rx="5" ry="5" width="75" height="22" />
        </ContentLoader>
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
