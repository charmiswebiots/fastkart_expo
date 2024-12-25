// import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../../../../utils/icons";
// import { useLoadingContext, useValues } from "../../../../../utils/context";


// export function OrderDetailView() {
//     const { viewRtlStyle, t } = useValues()

//     const [loading, setLoading] = useState(true);
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

//     return (

//         <View style={[styles.orderDetailView, { flexDirection: viewRtlStyle }]}>
//             <Icons.OrderDetails />
//             <View style={styles.idView}>
//                 <Text style={styles.id}>{t('orderSuccessPage.orderID')}</Text>
//                 <Text style={[styles.orderDeliver]}>{t('orderDetailPage.orderDelivered')}  </Text>
//             </View>
//         </View>
//     )
// }



import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import appColors from "../../../../../theme/appColors";
import { useTheme } from "@react-navigation/native";

export function OrderDetailView() {
    const { viewRtlStyle, t ,isDark} = useValues();
    const { addressLoaded, setAddressLoaded } = useLoadingContext();
    const [loading, setLoading] = useState(false);
    const {colors}=useTheme()

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
            height={80}
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="1" y="15" rx="10" ry="10" width="50" height="50" />
            <Rect x="65" y="18" rx="5" ry="5" width="120" height="20" />
            <Rect x="65" y="45" rx="5" ry="5" width="180" height="20" />
        </ContentLoader>
    );

    if (loading) {
        return (
            <View style={[styles.orderDetailView1,{backgroundColor:isDark?colors.card:appColors.gray}]}>
                <SkeletonLoader />
            </View>
        );
    }

    return (
        <View style={[styles.orderDetailView, { flexDirection: viewRtlStyle }]}>
            <Icons.OrderDetails />
            <View style={styles.idView}>
                <Text style={styles.id}>{t("orderSuccessPage.orderID")}</Text>
                <Text style={styles.orderDeliver}>
                    {t("orderDetailPage.orderDelivered")}
                </Text>
            </View>
        </View>
    );
}
