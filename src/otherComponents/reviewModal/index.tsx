




import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleProp, ViewStyle, TextStyle } from "react-native";
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

interface ReviewModalProps {
    onPress: () => void;
}

export function ReviewModal ({onPress}:ReviewModalProps)  {
    const { colors } = useTheme();
    const { viewRtlStyle, t } = useValues();

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background, flex: 1 }]}>
            <View style={[styles.allReviewView, { flexDirection: viewRtlStyle }]}>
                <Text style={[styles.allReviewText, { color: colors.text }]}>{t('productDetailsPage.allReview')}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Icons.into width={windowWidth(44)} height={windowHeight(44)} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ height: windowHeight(300) }} showsVerticalScrollIndicator={false}>
                {reviewList.map((item, index) =>
                    <View key={index} style={[styles.review, { backgroundColor: appColors.gray }]}>
                        <View style={[styles.reviewDetail, { flexDirection: viewRtlStyle }]}>
                            <Image source={images.demoProfile} style={styles.demoProfile} />
                            <View style={[styles.reviewName]}>
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
                        <Text style={[styles.reviewTxt]}>{t(item.review)}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

