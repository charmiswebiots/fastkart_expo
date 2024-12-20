// import React, { useEffect, useState } from "react";
// import { View, Image, Text } from "react-native";
// import styles from "./styles";
// import { reviewStar } from "../../../../data";
// import images from "../../../../../utils/images";
// import { useTheme } from "@react-navigation/native";
// import { useLoadingContext, useValues } from "../../../../../utils/context";
// import { Icons } from "../../../../../utils/icons";
// import ContentLoader, { Rect } from "react-content-loader/native";
// import appColors from "../../../../../theme/appColors";

// export function NameView() {
//     const { colors } = useTheme()
//     const { viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues()


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

//     const SkeletonLoader = () => (
//         <ContentLoader
//             speed={1}
//             width="100%"
//             height={120}
//             backgroundColor={appColors.loaderBackground}
//             foregroundColor={appColors.placeholder}
//             style={{ marginBottom: 16, borderRadius: 8 }}
//         >
//             {/* Text Line */}
//             <Rect x="16" y="16" rx="4" ry="4" width="70%" height="16" />
//             {/* Subtext */}
//             <Rect x="16" y="40" rx="4" ry="4" width="50%" height="14" />
//             {/* Paid Text */}
//             <Rect x="16" y="64" rx="4" ry="4" width="40%" height="14" />
//             {/* Items Text */}
//             <Rect x="16" y="88" rx="4" ry="4" width="40%" height="14" />
//             {/* Image Placeholder */}
//             <Rect x="80%" y="16" rx="8" ry="8" width="64" height="64" />
//         </ContentLoader>
//     );
//     return (
//         <View>
//             <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('productDetailsPage.productName')}</Text>
//             <View style={[styles.ratingsView, { flexDirection: viewRtlStyle }]}>
//                 <View style={{ flexDirection: viewRtlStyle }}>
//                 {reviewStar.map((item, key) => (
//                         key < 4 ? (
//                             <Icons.starYellow key={item.id} style={styles.star} />
//                         ) : (
//                             <Icons.starGrey key={item.id} style={styles.star} />
//                         )
//                     ))}
//                 </View>
//                 <Text style={[styles.ratings]}>{t('productDetailsPage.productRatings')}</Text>
//             </View>
//             <View style={[{ flexDirection: viewRtlStyle }]}>
//                 <Text style={[styles.txt, { color: colors.text }]}>{currSymbol}{(25 * currValue).toFixed(2)}</Text>
//                 <Text style={styles.originalPrice}>{currSymbol}{(45 * currValue).toFixed(2)}</Text>
//                 <Text style={styles.discount}>{t('productDetailsPage.productDiscount')}</Text>
//             </View>
//         </View>
//     );
// }





import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { reviewStar } from "../../../../data";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { Icons } from "../../../../../utils/icons";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../../../../theme/appColors";

export function NameView() {
    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();

    const [loading, setLoading] = useState(true);
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
            height={120}
            backgroundColor={appColors.loaderBackground}
            foregroundColor={appColors.placeholder}
            style={{ marginBottom: 16, borderRadius: 8 }}
        >
            {/* Product Name Placeholder */}
            <Rect x="0" y="16" rx="4" ry="4" width="80%" height="20" />
            {/* Ratings Placeholder */}
            <Rect x="0" y="50" rx="4" ry="4" width="25%" height="16" />
            {/* Price Placeholder */}
            <Rect x="100" y="50" rx="4" ry="4" width="30%" height="16" />
            {/* Discount Placeholder */}
            <Rect x="0" y="80" rx="4" ry="4" width="15%" height="16" />
            <Rect x="65" y="80" rx="4" ry="4" width="15%" height="16" />
            <Rect x="130" y="80" rx="4" ry="4" width="20%" height="16" />


        </ContentLoader>
    );

    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <View>
            {/* Product Name */}
            <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>
                {t('productDetailsPage.productName')}
            </Text>

            {/* Ratings View */}
            <View style={[styles.ratingsView, { flexDirection: viewRtlStyle }]}>
                <View style={{ flexDirection: viewRtlStyle }}>
                    {reviewStar.map((item, key) => (
                        key < 4 ? (
                            <Icons.starYellow key={item.id} style={styles.star} />
                        ) : (
                            <Icons.starGrey key={item.id} style={styles.star} />
                        )
                    ))}
                </View>
                <Text style={[styles.ratings]}>
                    {t('productDetailsPage.productRatings')}
                </Text>
            </View>

            {/* Price and Discount View */}
            <View style={[{ flexDirection: viewRtlStyle }]}>
                <Text style={[styles.txt, { color: colors.text }]}>
                    {currSymbol}{(25 * currValue).toFixed(2)}
                </Text>
                <Text style={styles.originalPrice}>
                    {currSymbol}{(45 * currValue).toFixed(2)}
                </Text>
                <Text style={styles.discount}>
                    {t('productDetailsPage.productDiscount')}
                </Text>
            </View>
        </View>
    );
}
