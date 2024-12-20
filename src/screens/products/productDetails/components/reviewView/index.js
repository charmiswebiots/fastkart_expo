// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, Image } from "react-native";
// import styles from "./styles";
// import images from "../../../../../utils/images";
// import appColors from "../../../../../theme/appColors";
// import { reviewList, reviewStar } from "../../../../data";
// import { useTheme } from "@react-navigation/native";
// import { useLoadingContext, useValues } from "../../../../../utils/context";
// import ContentLoader, { Rect } from "react-content-loader/native";

// export function ReviewView(props) {

//     const { colors } = useTheme()
//     const { viewRtlStyle, isDark, t } = useValues()


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
//             {/* Product Name Placeholder */}
//             <Rect x="0" y="16" rx="4" ry="4" width="80%" height="20" />
//             {/* Ratings Placeholder */}
//             <Rect x="0" y="50" rx="4" ry="4" width="25%" height="16" />
//             {/* Price Placeholder */}
//             <Rect x="100" y="50" rx="4" ry="4" width="30%" height="16" />
//             {/* Discount Placeholder */}
//             <Rect x="0" y="80" rx="4" ry="4" width="15%" height="16" />
//             <Rect x="65" y="80" rx="4" ry="4" width="15%" height="16" />
//             <Rect x="130" y="80" rx="4" ry="4" width="20%" height="16" />


//         </ContentLoader>
//     );

//     return (
//         <View>
//             <TouchableOpacity activeOpacity={0.8} style={[styles.reviewView, { flexDirection: viewRtlStyle }]} onPress={props.visibleReviewModal}>
//                 <Text style={[styles.txt, { color: colors.text }]}>{t('productDetailsPage.productReview')}</Text>
//                 <Text style={styles.seeAll}>{t('homepage.seeAll')}</Text>
//             </TouchableOpacity>
//             <View style={styles.list}>
//                 {reviewList.splice(0, 2).map((item) =>
//                     <View style={[styles.review, {
//                         backgroundColor: isDark ? colors.primary : appColors.gray,
//                     }]}>
//                         <View style={[styles.reviewDetail, { flexDirection: viewRtlStyle }]}>
//                             <Image source={images.demoProfile} style={styles.demoProfile} />
//                             <View style={styles.reviewNameViewRight}>
//                                 <Text style={[styles.reviewName, { color: colors.text }]}>{t(item.reviewName)}</Text>
//                                 <View style={{ flexDirection: viewRtlStyle }}>

//                                 </View>
//                             </View>
//                         </View>
//                         <Text style={[styles.reviewTxt]}>{t(item.review).substring(0, 70) + "..."}
//                         </Text>
//                     </View>
//                 )}
//             </View>
//         </View>
//     )
// }





import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import appColors from "../../../../../theme/appColors";
import { reviewList } from "../../../../data";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Facebook, Rect } from "react-content-loader/native";

export function ReviewView(props) {
    const { colors } = useTheme();
    const { viewRtlStyle, isDark, t } = useValues();

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
        <View>
            <Facebook width="150%" height={180} />
            <Facebook width="150%" height={120} />

        </View>

    );

    return (
        <View>
            {/* Review Section Header */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.reviewView, { flexDirection: viewRtlStyle }]}
                onPress={props.visibleReviewModal}
            >
                <Text style={[styles.txt, { color: colors.text }]}>
                    {t('productDetailsPage.productReview')}
                </Text>
                <Text style={styles.seeAll}>{t('homepage.seeAll')}</Text>
            </TouchableOpacity>

            {/* Review List */}
            <View style={styles.list}>
                {loading ? (
                    <SkeletonLoader /> // Display skeleton loader if loading is true
                ) : (
                    reviewList.slice(0, 2).map((item, index) => (
                        <View
                            key={index}
                            style={[
                                styles.review,
                                {
                                    backgroundColor: isDark ? colors.primary : appColors.gray,
                                }
                            ]}
                        >
                            <View style={[styles.reviewDetail, { flexDirection: viewRtlStyle }]}>
                                <Image source={images.demoProfile} style={styles.demoProfile} />
                                <View style={styles.reviewNameViewRight}>
                                    <Text style={[styles.reviewName, { color: colors.text }]}>
                                        {t(item.reviewName)}
                                    </Text>
                                </View>
                            </View>
                            <Text style={[styles.reviewTxt]}>
                                {t(item.review).substring(0, 70) + "..."}
                            </Text>
                        </View>
                    ))
                )}
            </View>
        </View>
    );
}
