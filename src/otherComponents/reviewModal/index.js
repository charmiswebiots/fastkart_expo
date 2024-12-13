import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";
import images from "../../utils/images";
import { reviewList } from "../../screens/data";
import { Icons } from "../../utils/icons";
import { reviewStar } from "../../screens/data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function ReviewModal(props) {

    const { colors } = useTheme()
    const {  viewRtlStyle,t } = useValues()

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background, flex: 1 }]}>
            <View style={[styles.allReviewView, { flexDirection: viewRtlStyle}]}>
                <Text style={[styles.allReviewText, { color: colors.text }]}>{t('productDetailsPage.allReview')}</Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Icons.into width={windowWidth(44)} height={windowHeight(44)} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ height: windowHeight(300) }} showsVerticalScrollIndicator={false}>
                {reviewList.map((item) =>
                    <View style={[styles.review, {
                        backgroundColor: appColors.gray,
                    }]}>
                        <View style={[styles.reviewDetail, { flexDirection: viewRtlStyle }]}>
                            <Image source={images.demoProfile} style={styles.demoProfile} />
                            <View style={[styles.reviewName]}>

                                <View style={{ flexDirection: viewRtlStyle }}>
                                    {reviewStar.map((item, key) =>
                                        <Image source={key === 4 ? images.star1 : images.star} style={styles.star} />
                                    )}
                                </View>
                            </View>
                        </View>
                        <Text style={[styles.reviewTxt]}>{t(item.review)}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}