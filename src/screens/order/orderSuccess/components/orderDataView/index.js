// import { View, Text } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../../../../utils/icons";
// import { useTheme } from "@react-navigation/native";
// import { useLoadingContext, useValues } from "../../../../../utils/context";
// import { useEffect, useState } from "react";

// export function OrderDataView() {

//     const { colors } = useTheme()
//     const { viewRtlStyle, textRtlStyle, t } = useValues()

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

//     return (
//         <View style={[styles.totalView, { flexDirection: viewRtlStyle }]}>
//             <View style={{ flexDirection: viewRtlStyle }}>
//                 <View style={styles.optionView}>
//                     <Icons.calender />
//                 </View>
//                 <View style={styles.option}>
//                     <Text style={[styles.orderDate, { color: colors.text }]}>{t('orderSuccessPage.orderDate')}</Text>
//                     <Text style={styles.date}>{t('orderSuccessPage.date')}</Text>
//                 </View>
//             </View>
//             <View style={{ flexDirection: viewRtlStyle }}>
//                 <View style={styles.optionView}>
//                     <Icons.orderId />
//                 </View>
//                 <View style={styles.option}>
//                     <Text style={[styles.orderDate, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('orderSuccessPage.idOrder')}</Text>
//                     <Text style={styles.date}>{t('orderSuccessPage.id')}</Text>
//                 </View>
//             </View>
//         </View>
//     )
// }





import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native";
import { windowHeight } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";


export function OrderDataView() {

    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t ,isDark} = useValues();

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
            height={windowHeight(38)}
            viewBox="0 0 340 38"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="0" y="0" rx="4" ry="4" width="13%" height={windowHeight(38)} />
            <Rect x="55" y="1" rx="4" ry="4" width="25%" height={windowHeight(14)} />
            <Rect x="55" y="23" rx="4" ry="4" width="30%" height={windowHeight(14)} />


            <Rect x="184" y="0" rx="4" ry="4" width="13%" height={windowHeight(38)} />
            <Rect x="238" y="1" rx="4" ry="4" width="25%" height={windowHeight(14)} />
            <Rect x="238" y="23" rx="4" ry="4" width="30%" height={windowHeight(14)} />
        </ContentLoader>

    );





    return (
        <View style={[styles.totalView, { flexDirection: viewRtlStyle }]}>
            {loading ? (
                <SkeletonLoader />


            ) : (
                <>
                    <View style={{ flexDirection: viewRtlStyle }}>
                        <View style={styles.optionView}>
                            <Icons.calender />
                        </View>
                        <View style={styles.option}>
                            <Text style={[styles.orderDate, { color: colors.text }]}>{t('orderSuccessPage.orderDate')}</Text>
                            <Text style={styles.date}>{t('orderSuccessPage.date')}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: viewRtlStyle }}>
                        <View style={styles.optionView}>
                            <Icons.orderId />
                        </View>
                        <View style={styles.option}>
                            <Text style={[styles.orderDate, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('orderSuccessPage.idOrder')}</Text>
                            <Text style={styles.date}>{t('orderSuccessPage.id')}</Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}
