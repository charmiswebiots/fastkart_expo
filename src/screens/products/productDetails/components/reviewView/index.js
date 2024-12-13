import React from "react";
import { View,Text,TouchableOpacity,Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import appColors from "../../../../../theme/appColors";
import { reviewList,reviewStar } from "../../../../data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function ReviewView(props) {

    const {colors}=useTheme()
    const {viewRtlStyle,isDark,t}=useValues()

    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} style={[styles.reviewView,{flexDirection:viewRtlStyle}]} onPress={props.visibleReviewModal}>
                <Text style={[styles.txt,{color:colors.text}]}>{t('productDetailsPage.productReview')}</Text>
                <Text style={styles.seeAll}>{t('homepage.seeAll')}</Text>
            </TouchableOpacity>
            <View style={styles.list}>
                {reviewList.splice(0, 2).map((item) =>
                    <View style={[styles.review, {
                        backgroundColor: isDark?colors.primary:appColors.gray,
                    }]}>
                        <View style={[styles.reviewDetail,{flexDirection:viewRtlStyle}]}>
                            <Image source={images.demoProfile} style={styles.demoProfile} />
                            <View style={styles.reviewNameViewRight}>
                                <Text style={[styles.reviewName,{color:colors.text}]}>{t(item.reviewName)}</Text>
                                <View style={{ flexDirection: viewRtlStyle }}>
                                    {/* {reviewStar.map((item, key) =>
                                        <Image source={key === 4 ? images.star1 : images.star} style={styles.star} />
                                    )} */}
                                </View>
                            </View>
                        </View>
                        <Text style={[styles.reviewTxt]}>{t(item.review).substring(0, 70) + "..."}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    )
}