import React, { useEffect, useState, FC } from "react";
import { View, Text, TouchableOpacity, Image, StyleProp, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import appColors from "../../../../../theme/appColors";
import { reviewList, reviewStar } from "../../../../data";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Facebook } from "react-content-loader/native";
import { Icons } from "../../../../../utils/icons";

interface ReviewViewProps {
    visibleReviewModal: () => void;
}

export function ReviewView({ visibleReviewModal }: ReviewViewProps) {
    const { colors } = useTheme();
    const { viewRtlStyle, isDark, t } = useValues();

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

    const SkeletonLoader: FC = () => (
        <View>
            <Facebook width="100%" height={180} />
            <Facebook width="100%" height={120} />
        </View>
    );

    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.reviewView, { flexDirection: viewRtlStyle } as StyleProp<ViewStyle>]}
                onPress={visibleReviewModal}
            >
                <Text style={[styles.txt, { color: colors.text } as TextStyle]}>
                    {t('productDetailsPage.productReview')}
                </Text>
                <Text style={styles.seeAll}>{t('homepage.seeAll')}</Text>
            </TouchableOpacity>

            <View style={styles.list}>
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    reviewList.slice(0, 2).map((item, index) => (
                        <View
                            key={index}
                            style={[styles.review, { backgroundColor: isDark ? colors.primary : appColors.gray } as StyleProp<ViewStyle>]}
                        >
                            <View style={[styles.reviewDetail, { flexDirection: viewRtlStyle } as StyleProp<ViewStyle>]}>
                                <Image source={images.demoProfile} style={styles.demoProfile} />
                                <View style={styles.reviewNameViewRight}>
                                    <Text style={[styles.reviewName, { color: colors.text } as TextStyle]}>
                                        {t(item.reviewName)}
                                    </Text>
                                    <View style={{ flexDirection: viewRtlStyle }}>
                                        {reviewStar.map((item: { id: string }, key: number) => (
                                            key < 4 ? (
                                                <Icons.starYellow key={item.id} style={styles.star} />
                                            ) : (
                                                <Icons.starGrey key={item.id} style={styles.star} />
                                            )
                                        ))}
                                    </View>
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
