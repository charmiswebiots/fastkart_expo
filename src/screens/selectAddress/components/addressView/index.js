// import React from "react";
// import { View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
// import styles from "./styles";
// import appColors from "../../../../theme/appColors";
// import images from "../../../../utils/images";
// import { windowHeight } from "../../../../theme/appConstant";
// import { Icons } from "../../../../utils/icons";
// import { location } from '../../../../screens/data'
// import { useState } from "react";
// import { useTheme } from "@react-navigation/native";
// import { useLoadingContext, useValues } from "../../../../utils/context";

// export function AddressView() {
//     const { colors } = useTheme()
//     const { isDark ,viewRtlStyle,textRtlStyle,t} = useValues()

//     const [isDefault, setIsDefault] = useState(0);

//     const setDefault = (value) => {
//         setIsDefault(value)
//     }

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
//         <ContentLoader
//             speed={1}
//             width="100%"
//             height={110}
//             viewBox="0 0 340 80"

//             backgroundColor={isDark ? colors.card : appColors.loaderBackground}
//             foregroundColor={appColors.placeholder}
//         >
//             <Rect x="18" y="10" rx="10" ry="10" width="60" height="60" />
//             <Rect x="90" y="12" rx="5" ry="5" width="180" height="13" />
//             <Rect x="90" y="32" rx="5" ry="5" width="100" height="12" />
//             <Rect x="90" y="58" rx="5" ry="5" width="60" height="12" />
//             <Rect x="160" y="58" rx="5" ry="5" width="50" height="12" />
//             <Rect x="245" y="50" rx="5" ry="5" width="75" height="22" />
//         </ContentLoader>
//     );

//     return (
//         <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
//             {location.map((item, key) =>
//                 <TouchableOpacity onPress={() => setDefault(key)} activeOpacity={0.8} style={[styles.list, { borderWidth: key === isDefault ? windowHeight(2) : 0, backgroundColor: isDark ? colors.primary : appColors.gray, flexDirection: viewRtlStyle}]}>
//                     <View>
//                         <View style={[styles.optionView, { flexDirection: viewRtlStyle }]}>
//                             {item.isWork ? <Icons.work /> : <Icons.home color={'black'} />}
//                             <Text style={[styles.optionTxt, { color: colors.text }]}>{item.isWork ? t('selectDeliveryAddressPage.work') : t('tabBar.home')}  </Text>
//                             {key === 0 &&
//                                 <Text style={styles.default}>{t('selectDeliveryAddressPage.default')}</Text>}
//                         </View>
//                         <Text style={[styles.name, { color: colors.text, textAlign: textRtlStyle }]}>{t(item.name)}</Text>
//                         <Text style={[styles.add, { textAlign: textRtlStyle }]}>{t(item.address)}</Text>
//                     </View>
//                     <Image source={images.addressMap} style={styles.addMap} />
//                 </TouchableOpacity>)}
//         </ScrollView>
//     )
// }






import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import appColors from "../../../../theme/appColors";
import images from "../../../../utils/images";
import { windowHeight } from "../../../../theme/appConstant";
import { Icons } from "../../../../utils/icons";
import { location } from "../../../../screens/data";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native";

export function AddressView() {
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, textRtlStyle, t } = useValues();

    const [isDefault, setIsDefault] = useState(0); // Default selected address index
    const [loading, setLoading] = useState(false);
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
            height={145}
            viewBox="0 0 340 80"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="265" y="10" rx="10" ry="10" width="60" height="60" />
            <Rect x="15" y="12" rx="5" ry="5" width="22" height="22" />
            <Rect x="45" y="12" rx="5" ry="5" width="71" height="22" />
            <Rect x="125" y="12" rx="25" ry="25" width="71" height="21" />
            <Rect x="15" y="45" rx="5" ry="5" width="125" height="13" />
            <Rect x="15" y="65" rx="5" ry="5" width="220" height="13" />
        </ContentLoader>
    );

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
        >
            {loading
                ?
                Array.from({ length: 5 }).map((_, index) => (
                    <View key={index} style={styles.skeletonContainer}>
                        <SkeletonLoader />
                    </View>
                ))
                :
                location.map((item, key) => (
                    <TouchableOpacity
                        key={key}
                        onPress={() => setIsDefault(key)}
                        activeOpacity={0.8}
                        style={[
                            styles.list,
                            {
                                borderWidth: key === isDefault ? windowHeight(2) : 0,
                                backgroundColor: isDark ? colors.primary : appColors.gray,
                                flexDirection: viewRtlStyle,
                            },
                        ]}
                    >
                        <View>
                            <View
                                style={[styles.optionView, { flexDirection: viewRtlStyle }]}
                            >
                                {item.isWork ? <Icons.work /> : <Icons.home color={"black"} />}
                                <Text
                                    style={[
                                        styles.optionTxt,
                                        { color: colors.text },
                                    ]}
                                >
                                    {item.isWork
                                        ? t("selectDeliveryAddressPage.work")
                                        : t("tabBar.home")}{" "}
                                </Text>
                                {key === 0 && (
                                    <Text style={styles.default}>
                                        {t("selectDeliveryAddressPage.default")}
                                    </Text>
                                )}
                            </View>
                            <Text
                                style={[
                                    styles.name,
                                    { color: colors.text, textAlign: textRtlStyle },
                                ]}
                            >
                                {t(item.name)}
                            </Text>
                            <Text
                                style={[
                                    styles.add,
                                    { textAlign: textRtlStyle },
                                ]}
                            >
                                {t(item.address)}
                            </Text>
                        </View>
                        <Image
                            source={images.addressMap}
                            style={styles.addMap}
                        />
                    </TouchableOpacity>
                ))}
        </ScrollView>
    );
}
